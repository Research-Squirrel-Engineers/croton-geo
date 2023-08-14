__author__ = "Florian Thiery"
__copyright__ = "MIT Licence 2023, Florian Thiery"
__credits__ = ["Florian Thiery"]
__license__ = "MIT"
__version__ = "beta"
__maintainer__ = "Florian Thiery"
__email__ = "mail@fthiery.de"
__status__ = "beta"
__update__ = "2023-08-14"

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

# query: https://tinyurl.com/2a7jurzr
# example: https://fuzzy-sl.wikibase.cloud/wiki/Item:Q13

# set starttime
starttime = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
qs = []
lines = []

# set paths I
file_name = "wikibase.csv"
dir_path = os.path.dirname(os.path.realpath(__file__))
file_in = dir_path.replace("\\py", "\\csv") + "\\" + file_name

# read csv file
data = pd.read_csv(
    file_in,
    encoding='utf-8',
    sep=',',
    usecols=['label', 'desc', 'certainty', 'certaintyinfo', 'relatedto', 'relatedtohow', 'source',
             'sourcetype', 'spatialtype', 'methodtype', 'agent', 'methoddesc', 'literature', 'wkt'],
    na_values=['.', '??', 'NULL']  # take any '.' or '??' values as NA
)
print("*****************************************")
print(data.info())

# create quickstatements from dataframe
lineNo = 2
tmp = ""
for index, row in data.iterrows():
    # tmpno = lineNo - 2
    # lineNo += 1
    qs.append("CREATE")
    tmp = "LAST" + "\t" + "Len" + "\t" + "\"" + str(row['label']) + "\""
    qs.append(tmp)
    if str(row['desc']) != 'nan':
        tmp = "LAST" + "\t" + "Den" + "\t" + "\"" + str(row['desc']) + "\""
    qs.append(tmp)
    tmp = "LAST" + "\t" + "P1" + "\t" + "Q10"
    qs.append(tmp)
    if str(row['literature']) != 'nan':
        lit = str(row['literature'])
        lits = lit.split(";")
        for i in lits:
            tmp = "LAST" + "\t" + "P11" + "\t" + "\"" + i + "\""
            qs.append(tmp)
    if str(row['relatedto']) != 'nan':
        rt = str(row['relatedto'])
        rts = rt.split(";")
        for i in rts:
            tmp = "LAST" + "\t" + "P10" + "\t" + "\"" + i + "\"" + "\t" + \
                "P12" + "\t" + "\"" + str(row['relatedtohow']) + "\""
            qs.append(tmp)
    tmp = "LAST" + "\t" + "P3" + "\t" + "Q14"
    qs.append(tmp)
    tmp = "LAST" + "\t" + "P8" + "\t" + str(row['spatialtype'])
    qs.append(tmp)
    latlon = str(row['wkt'])
    latlon = latlon.replace("POINT(", "")
    latlon = latlon.replace(")", "")
    latlon2 = latlon.split(" ")
    tmp = "LAST" + "\t" + "P4" + "\t" + "@" + \
        latlon2[1] + "/" + latlon2[0] + "\t" + "P5" + "\t" + str(row['certainty']) + "\t" + "P13" + "\t" + "\"" + str(row['certaintyinfo']) + "\"" + "\t" + "P7" + "\t" + str(
            row['methodtype']) + "\t" + "P14" + "\t" + str(row['agent']) + "\t" + "P16" + "\t" + str(row['sourcetype']) + "\t" + "P6" + "\t" + str(row['source']) + "\t" + "P15" + "\t" + "\"" + str(row['methoddesc']) + "\""
    qs.append(tmp)

    qs.append("")

files = (len(qs) / 100000) + 1
print("triples", len(qs), "files", int(files))
thiscount = len(qs)

# write output files
f = 0
step = 100000

for x in range(1, int(files) + 1):
    strX = str(x)
    filename = dir_path.replace("\\py", "\\rdf") + \
        "\\" + "croton_wikibase.qs"
    file = codecs.open(filename, "w", "utf-8")
    i = f
    for i, line in enumerate(qs):
        if (i > f - 1 and i < f + step):
            file.write(line)
            file.write("\r\n")
    f = f + step
    print(" > croton_wikibase.qs")
    file.close()

print("*****************************************")
print("SUCCESS: closing script")
print("*****************************************")
