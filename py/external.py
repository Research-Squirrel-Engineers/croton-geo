__author__ = "Florian Thiery"
__copyright__ = "MIT Licence 2023, Florian Thiery"
__credits__ = ["Florian Thiery"]
__license__ = "MIT"
__version__ = "beta"
__maintainer__ = "Florian Thiery"
__email__ = "mail@fthiery.de"
__status__ = "beta"
__update__ = "2023-08-10"

# import dependencies
import uuid
import requests
import io
import pandas as pd
import os
import codecs
import datetime
import importlib
import sys
import hashlib

# set UTF8 as default
importlib.reload(sys)
print("*****************************************")

# set starttime
starttime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")

# set paths
file_name = "external.csv"
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = dir_path.replace("\\py", "\\csv") + "\\" + file_name

# read csv file
data = pd.read_csv(
    file_in,
    encoding='utf-8',
    sep=',',
    usecols=['id', 'label', 'relatedto', 'source', 'sourcetype',
             'spatialtype', 'methodtype', 'certainty', 'wkt'],
    na_values=['.', '??', 'NULL']  # take any '.' or '??' values as NA
)
print(data.info())

# create triples from dataframe
lineNo = 2
outStr = ""
lines = []
ids = []
for index, row in data.iterrows():
    # print(lineNo)
    tmpno = lineNo - 2
    if tmpno % 1000 == 0:
        print(tmpno)
    lineNo += 1

    # site metadata
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "rdf:type" + " fsl:Site .")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:partOf" + " fsl:Croton .")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:siteType" + " fsl:ArchaeologicalSite .")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "rdfs:label" + " '" + str(row['label']) + "'@en.")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:relatedTo" + " <" + str(row['relatedto']) + ">.")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:hasSource" + " " + str(row['source']) + ".")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:hasSourceType" + " " + str(row['sourcetype']) + ".")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:spatialType" + " " + str(row['spatialtype']) + ".")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:method" + " " + str(row['methodtype']) + ".")
    lines.append("fsld:site_" +
                 str(row['id']) + " " + "fsl:certaintyLevel" + " " + str(row['certainty']) + ".")

    # geom
    point = str(row['wkt'])
    point = "\"<http://www.opengis.net/def/crs/EPSG/0/4326> " + \
        point + "\"^^geosparql:wktLiteral"
    lines.append("fsld:site_" + str(row['id']) + " " +
                 "geosparql:hasGeometry" + " fsld:site_" + str(row['id']) + "_geom .")
    lines.append("fsld:site_" +
                 str(row['id']) + "_geom " + "rdf:type" + " sf:Point .")
    lines.append("fsld:site_" +
                 str(row['id']) + "_geom " + "geosparql:asWKT " + point + ".")

    # license
    lines.append("fsld:site_" + str(row['id']) + " " + "dct:license" +
                 " <" + "https://creativecommons.org/licenses/by/4.0/deed.de" + "> .")
    lines.append("fsld:site_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("fsld:site_" + str(row['id']) + " " + "dct:creator" +
                 " <" + "https://orcid.org/0000-0003-1100-6494" + "> .")
    lines.append("fsld:site_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0002-3246-3531" + "> .")
    lines.append("fsld:site_" + str(row['id']) + " " + "dct:rightsHolder" +
                 " <" + "https://orcid.org/0000-0003-1100-6494" + "> .")

    # prov-o
    lines.append("fsld:site_" + str(row['id']) + " " +
                 "prov:wasAttributedTo" + " <https://github.com/Research-Squirrel-Engineers/croton-geo/blob/main/py/external.py> .")
    lines.append("fsld:site_" + str(row['id']) + " " +
                 "prov:wasDerivedFrom" + " <https://github.com/Research-Squirrel-Engineers/croton-geo> .")
    lines.append("fsld:site_" + str(row['id']) + " " +
                 "prov:wasGeneratedBy" + " fsld:activity_site_" + str(row['id']) + " .")
    lines.append("fsld:activity_site_" +
                 str(row['id']) + " " + "rdf:type" + " <http://www.w3.org/ns/prov#Activity> .")
    lines.append("fsld:activity_site_" +
                 str(row['id']) + " " + "prov:startedAtTime '" + starttime + "'^^xsd:dateTime .")
    lines.append("fsld:activity_site_" + str(row['id']) + " " + "prov:endedAtTime '" +
                 datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ") + "'^^xsd:dateTime .")
    lines.append("fsld:activity_site_" + str(
        row['id']) + " " + "prov:wasAssociatedWith" + " <https://github.com/Research-Squirrel-Engineers/croton-geo/blob/main/py/external.py> .")

    lines.append("")

files = (len(lines) / 100000) + 1
print("triples", len(lines), "files", int(files))
thiscount = len(lines)

# write output files
f = 0
step = 100000
prefixes = ""
prefixes += "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\r\n"
prefixes += "@prefix owl: <http://www.w3.org/2002/07/owl#> .\r\n"
prefixes += "@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n"
prefixes += "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\r\n"
prefixes += "@prefix geosparql: <http://www.opengis.net/ont/geosparql#> .\r\n"
prefixes += "@prefix dc: <http://purl.org/dc/elements/1.1/> .\r\n"
prefixes += "@prefix dct: <http://purl.org/dc/terms/> .\r\n"
prefixes += "@prefix sf: <http://www.opengis.net/ont/sf#> .\r\n"
prefixes += "@prefix prov: <http://www.w3.org/ns/prov#> .\r\n"
prefixes += "@prefix fsl: <http://archaeoinformatics.link/ontology#> .\r\n"
prefixes += "@prefix fsld: <http://fuzzy-sl.squirrel.link/data/> .\r\n"
prefixes += "\r\n"

for x in range(1, int(files) + 1):
    strX = str(x)
    filename = dir_path.replace("\\py", "\\rdf") + \
        "\\" + file_name.replace(".csv", "") + ".ttl"
    file = codecs.open(filename, "w", "utf-8")
    file.write("# create triples from " + file_name + " \r\n")
    file.write(
        "# on " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M") + "\r\n\r\n")
    file.write(prefixes)
    i = f
    for i, line in enumerate(lines):
        if (i > f - 1 and i < f + step):
            file.write(line)
            file.write("\r\n")
    f = f + step
    print(" > " + file_name.replace(".csv", "") + ".ttl")
    file.close()

print("*****************************************")
print("SUCCESS: closing script")
print("*****************************************")
