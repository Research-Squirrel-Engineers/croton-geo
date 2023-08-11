var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Taranto, Via Oberdan (fsld:site_1001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Paestum (anc. Poseidonia), Lucania (fsld:site_1002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Strongoli (anc. Petelia), 25 km. N of Croton, Bruttium (fsld:site_1003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (anc. Bruttium) (fsld:site_1004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_1005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Ionian Shore, Bruttium (fsld:site_1006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Bruttium (fsld:site_2001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (Regione) (fsld:site_2002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Leucopetra (cape) (fsld:site_2003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Shepherd - Bruttium (Calabria) - 1911 (fsld:site_2004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Taranto (Italy) (fsld:site_2005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Paestum (Italy) (fsld:site_2006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Strongoli (Italy) (fsld:site_2007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (Italy) (fsld:site_2008)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_2009)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Province of Brindisi (Italy) (fsld:site_2010)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Site",
        "parent": "#",
        "type": "geoclass",
        "text": "Site (fsl:Site) [16]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSource": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSourceType": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#method": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#partOf": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#relatedTo": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#siteType": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#spatialType": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/creator": {
              "instancecount": 2
            },
            "http://purl.org/dc/terms/license": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/rightsHolder": {
              "instancecount": 2
            },
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 1,
              "http://www.opengis.net/ont/sf#Point": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 1,
              "http://www.w3.org/ns/prov#Activity": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 1
            }
          }
        },
        "instancecount": 19
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1001_geom (fsld:site_1001_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1002_geom (fsld:site_1002_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1003_geom (fsld:site_1003_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1004_geom (fsld:site_1004_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1005_geom (fsld:site_1005_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1006_geom (fsld:site_1006_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2001_geom (fsld:site_2001_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2002_geom (fsld:site_2002_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2003_geom (fsld:site_2003_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2004_geom (fsld:site_2004_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2005_geom (fsld:site_2005_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2006_geom (fsld:site_2006_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2007_geom (fsld:site_2007_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2008_geom (fsld:site_2008_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2009_geom (fsld:site_2009_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2010_geom (fsld:site_2010_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "#",
        "type": "geoclass",
        "text": "Point (sf:Point) [16]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#hasGeometry": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1001",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1001 (fsld:activity_site_1001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1002",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1002 (fsld:activity_site_1002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1003",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1003 (fsld:activity_site_1003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1004",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1004 (fsld:activity_site_1004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1005",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1005 (fsld:activity_site_1005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_1006",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_1006 (fsld:activity_site_1006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2001",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2001 (fsld:activity_site_2001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2002",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2002 (fsld:activity_site_2002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2003",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2003 (fsld:activity_site_2003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2004",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2004 (fsld:activity_site_2004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2005",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2005 (fsld:activity_site_2005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2006",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2006 (fsld:activity_site_2006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2007",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2007 (fsld:activity_site_2007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2008",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2008 (fsld:activity_site_2008)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2009",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2009 (fsld:activity_site_2009)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/activity_site_2010",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "activity_site_2010 (fsld:activity_site_2010)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [16]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Site_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Site Instances Collection (fsld:Site_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 16,
              "http://archaeoinformatics.link/ontology#Site": 16
            }
          },
          "from": {}
        },
        "instancecount": 19
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "parent": "#",
        "type": "collectionclass",
        "text": "SpatialObjectCollection (gsp:SpatialObjectCollection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Point_collection",
        "parent": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "type": "geocollection",
        "text": "Point Instances Collection (fsld:Point_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#GeometryCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "GeometryCollection (gsp:GeometryCollection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 16,
              "http://www.opengis.net/ont/sf#Point": 16
            }
          },
          "from": {}
        },
        "instancecount": 19
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Activity_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Activity Instances Collection (fsld:Activity_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 16,
              "http://www.w3.org/ns/prov#Activity": 16
            }
          },
          "from": {}
        },
        "instancecount": 18
      }
    ]
  }
}