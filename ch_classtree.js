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
        "id": "http://coinhoards.org/id/igch1885",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "IGCH 1885 (igch1885)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Concept",
        "parent": "#",
        "type": "class",
        "text": "Concept (skos:Concept) [2]",
        "data": {
          "to": {
            "http://nomisma.org/ontology#hasClosingDate": {
              "instancecount": 1
            },
            "http://nomisma.org/ontology#hasFindspot": {
              "instancecount": 1
            },
            "http://purl.org/dc/terms/tableOfContents": {
              "instancecount": 1
            },
            "http://rdfs.org/ns/void#inDataset": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#prefLabel": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 1
            }
          }
        },
        "instancecount": 6
      },
      {
        "id": "https://sws.geonames.org/2522990/#this",
        "parent": "http://www.ics.forth.gr/isl/CRMgeo/SP5_Geometric_Place_Expression",
        "type": "instance",
        "text": "this",
        "data": {}
      },
      {
        "id": "http://www.ics.forth.gr/isl/CRMgeo/SP5_Geometric_Place_Expression",
        "parent": "#",
        "type": "class",
        "text": "SP5_Geometric_Place_Expression (crmgeo:SP5_Geometric_Place_Expression) [2]",
        "data": {}
      },
      {
        "id": "http://coinhoards.org/id/Concept_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Concept Instances Collection (Concept_collection)",
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
              "instancecount": 2,
              "http://www.w3.org/2004/02/skos/core#Concept": 1
            }
          },
          "from": {}
        },
        "instancecount": 4
      },
      {
        "id": "http://coinhoards.org/id/igch1873",
        "parent": "http://www.w3.org/2004/02/skos/core#Concept",
        "type": "instance",
        "text": "IGCH 1873 (igch1873)",
        "data": {}
      },
      {
        "id": "https://sws.geonames.org/2525468/#this",
        "parent": "http://www.ics.forth.gr/isl/CRMgeo/SP5_Geometric_Place_Expression",
        "type": "instance",
        "text": "this",
        "data": {}
      }
    ]
  }
}