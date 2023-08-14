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
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0003-1100-6494_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0000-0003-1100-6494 (fsld:agent_0000-0003-1100-6494)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0002-3246-3531_suniv0_",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "agent_0000-0002-3246-3531 (fsld:agent_0000-0002-3246-3531)",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "parent": "#",
        "type": "class",
        "text": "Person (foaf:Person) [2]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0003-1100-6494_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "instance",
        "text": "agent_0000-0003-1100-6494 (fsld:agent_0000-0003-1100-6494)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/agent_0000-0002-3246-3531_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "instance",
        "text": "agent_0000-0002-3246-3531 (fsld:agent_0000-0002-3246-3531)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Agent",
        "parent": "#",
        "type": "class",
        "text": "Agent (prov:Agent) [2]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/2004/02/skos/core#exactMatch": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Taranto, Via Oberdan (fsld:site_1001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Paestum (anc. Poseidonia), Lucania (fsld:site_1002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Strongoli (anc. Petelia), 25 km. N of Croton, Bruttium (fsld:site_1003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (anc. Bruttium) (fsld:site_1004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_1005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Ionian Shore, Bruttium (fsld:site_1006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Curinga, 30 km. WSW of Catanzaro, Bruttium (fsld:site_1007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Bruttium (fsld:site_2001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (Regione) (fsld:site_2002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Leucopetra (cape) (fsld:site_2003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Shepherd - Bruttium (Calabria) - 1911 (fsld:site_2004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Taranto (Italy) (fsld:site_2005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Paestum (Italy) (fsld:site_2006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Strongoli (Italy) (fsld:site_2007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Calabria (Italy) (fsld:site_2008)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_2009)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Province of Brindisi (Italy) (fsld:site_2010)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Curinga (Italy) (fsld:site_2011)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "San Giorgio Ionico 1949 (fsld:site_3001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Crotone, loc. Via Paternostro 1974 (fsld:site_3002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Fiume Esaro 1967 (gennaio) (fsld:site_3003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_suniv0_",
        "parent": "http://archaeoinformatics.link/ontology#Site",
        "type": "geoinstance",
        "text": "Curinga 1916 (IGCH 1881 / Noe 285) (fsld:site_3004)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Site",
        "parent": "#",
        "type": "geoclass",
        "text": "Site (fsl:Site) [22]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Taranto, Via Oberdan (fsld:site_1001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Paestum (anc. Poseidonia), Lucania (fsld:site_1002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Strongoli (anc. Petelia), 25 km. N of Croton, Bruttium (fsld:site_1003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Calabria (anc. Bruttium) (fsld:site_1004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_1005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Ionian Shore, Bruttium (fsld:site_1006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Curinga, 30 km. WSW of Catanzaro, Bruttium (fsld:site_1007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Bruttium (fsld:site_2001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Calabria (Regione) (fsld:site_2002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Leucopetra (cape) (fsld:site_2003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Shepherd - Bruttium (Calabria) - 1911 (fsld:site_2004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Taranto (Italy) (fsld:site_2005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Paestum (Italy) (fsld:site_2006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Strongoli (Italy) (fsld:site_2007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Calabria (Italy) (fsld:site_2008)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_2009)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Province of Brindisi (Italy) (fsld:site_2010)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Curinga (Italy) (fsld:site_2011)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "San Giorgio Ionico 1949 (fsld:site_3001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Crotone, loc. Via Paternostro 1974 (fsld:site_3002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Fiume Esaro 1967 (gennaio) (fsld:site_3003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_suniv1_",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "geoinstance",
        "text": "Curinga 1916 (IGCH 1881 / Noe 285) (fsld:site_3004)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "geoclass",
        "text": "Entity (prov:Entity) [22]",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Taranto, Via Oberdan (fsld:site_1001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Paestum (anc. Poseidonia), Lucania (fsld:site_1002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Strongoli (anc. Petelia), 25 km. N of Croton, Bruttium (fsld:site_1003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Calabria (anc. Bruttium) (fsld:site_1004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_1005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Ionian Shore, Bruttium (fsld:site_1006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Curinga, 30 km. WSW of Catanzaro, Bruttium (fsld:site_1007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Bruttium (fsld:site_2001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Calabria (Regione) (fsld:site_2002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Leucopetra (cape) (fsld:site_2003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Shepherd - Bruttium (Calabria) - 1911 (fsld:site_2004)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Taranto (Italy) (fsld:site_2005)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Paestum (Italy) (fsld:site_2006)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Strongoli (Italy) (fsld:site_2007)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Calabria (Italy) (fsld:site_2008)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "South Italy (fsld:site_2009)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Province of Brindisi (Italy) (fsld:site_2010)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Curinga (Italy) (fsld:site_2011)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "San Giorgio Ionico 1949 (fsld:site_3001)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Crotone, loc. Via Paternostro 1974 (fsld:site_3002)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Fiume Esaro 1967 (gennaio) (fsld:site_3003)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_suniv2_",
        "parent": "https://pleiades.stoa.org/places/vocab#Place",
        "type": "geoinstance",
        "text": "Curinga 1916 (IGCH 1881 / Noe 285) (fsld:site_3004)",
        "data": {}
      },
      {
        "id": "https://pleiades.stoa.org/places/vocab#Place",
        "parent": "#",
        "type": "geoclass",
        "text": "Place (pleiades:Place) [22]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#partOf": {
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
              "instancecount": 3
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#exactMatch": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#prefLabel": {
              "instancecount": 1
            },
            "http://www.w3.org/2004/02/skos/core#scopeNote": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasAttributedTo": {
              "instancecount": 2
            },
            "http://www.w3.org/ns/prov#wasDerivedFrom": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 2,
              "http://www.w3.org/ns/prov#Activity": 2,
              "http://archaeoinformatics.link/ontology#Georeferencing": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#FeatureCollection": 3
            },
            "http://www.w3.org/ns/prov#used": {
              "instancecount": 0,
              "http://www.w3.org/ns/prov#Activity": 1,
              "http://archaeoinformatics.link/ontology#Georeferencing": 1
            }
          }
        },
        "instancecount": 24
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
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_1007_geom (fsld:site_1007_geom)",
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
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_2011_geom (fsld:site_2011_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_3001_geom (fsld:site_3001_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_3002_geom (fsld:site_3002_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_3003_geom (fsld:site_3003_geom)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_geom",
        "parent": "http://www.opengis.net/ont/sf#Point",
        "type": "geoinstance",
        "text": "site_3004_geom (fsld:site_3004_geom)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/sf#Point",
        "parent": "#",
        "type": "geoclass",
        "text": "Point (sf:Point) [22]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
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
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.opengis.net/ont/geosparql#GeometryCollection": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1001_activity (fsld:site_1001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1001_pyscript (fsld:site_1001_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1002_activity (fsld:site_1002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1002_pyscript (fsld:site_1002_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1003_activity (fsld:site_1003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1003_pyscript (fsld:site_1003_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1004_activity (fsld:site_1004_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1004_pyscript (fsld:site_1004_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1005_activity (fsld:site_1005_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1005_pyscript (fsld:site_1005_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1006_activity (fsld:site_1006_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1006_pyscript (fsld:site_1006_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1007_activity (fsld:site_1007_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_1007_pyscript (fsld:site_1007_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2001_activity (fsld:site_2001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2001_pyscript (fsld:site_2001_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2002_activity (fsld:site_2002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2002_pyscript (fsld:site_2002_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2003_activity (fsld:site_2003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2003_pyscript (fsld:site_2003_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2004_activity (fsld:site_2004_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2004_pyscript (fsld:site_2004_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2005_activity (fsld:site_2005_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2005_pyscript (fsld:site_2005_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2006_activity (fsld:site_2006_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2006_pyscript (fsld:site_2006_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2007_activity (fsld:site_2007_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2007_pyscript (fsld:site_2007_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2008_activity (fsld:site_2008_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2008_pyscript (fsld:site_2008_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2009_activity (fsld:site_2009_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2009_pyscript (fsld:site_2009_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2010_activity (fsld:site_2010_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2010_pyscript (fsld:site_2010_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2011_activity (fsld:site_2011_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_2011_pyscript (fsld:site_2011_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3001_activity (fsld:site_3001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3001_pyscript (fsld:site_3001_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3002_activity (fsld:site_3002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3002_pyscript (fsld:site_3002_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3003_activity (fsld:site_3003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3003_pyscript (fsld:site_3003_pyscript)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_activity_suniv0_",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3004_activity (fsld:site_3004_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_pyscript",
        "parent": "http://www.w3.org/ns/prov#Activity",
        "type": "instance",
        "text": "site_3004_pyscript (fsld:site_3004_pyscript)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/ns/prov#Activity",
        "parent": "#",
        "type": "class",
        "text": "Activity (prov:Activity) [44]",
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
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1001_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1001_activity (fsld:site_1001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1002_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1002_activity (fsld:site_1002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1003_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1003_activity (fsld:site_1003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1004_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1004_activity (fsld:site_1004_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1005_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1005_activity (fsld:site_1005_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1006_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1006_activity (fsld:site_1006_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_1007_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_1007_activity (fsld:site_1007_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2001_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2001_activity (fsld:site_2001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2002_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2002_activity (fsld:site_2002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2003_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2003_activity (fsld:site_2003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2005_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2005_activity (fsld:site_2005_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2006_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2006_activity (fsld:site_2006_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2007_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2007_activity (fsld:site_2007_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2008_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2008_activity (fsld:site_2008_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2009_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2009_activity (fsld:site_2009_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2010_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2010_activity (fsld:site_2010_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2011_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "type": "instance",
        "text": "site_2011_activity (fsld:site_2011_activity)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#ExternalRepository",
        "parent": "#",
        "type": "class",
        "text": "ExternalRepository (fsl:ExternalRepository) [17]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#activityDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSource": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSourceType": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#used": {
              "instancecount": 1,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            }
          }
        },
        "instancecount": 11
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_2004_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "site_2004_activity (fsld:site_2004_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3001_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "site_3001_activity (fsld:site_3001_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3002_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "site_3002_activity (fsld:site_3002_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3003_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "site_3003_activity (fsld:site_3003_activity)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/site_3004_activity_suniv1_",
        "parent": "http://archaeoinformatics.link/ontology#Georeferencing",
        "type": "instance",
        "text": "site_3004_activity (fsld:site_3004_activity)",
        "data": {}
      },
      {
        "id": "http://archaeoinformatics.link/ontology#Georeferencing",
        "parent": "#",
        "type": "class",
        "text": "Georeferencing (fsl:Georeferencing) [5]",
        "data": {
          "to": {
            "http://archaeoinformatics.link/ontology#activityDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyDesc": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#certaintyLevel": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSource": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#hasSourceType": {
              "instancecount": 1
            },
            "http://archaeoinformatics.link/ontology#image": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            },
            "http://www.w3.org/ns/prov#endedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#startedAtTime": {
              "instancecount": 1
            },
            "http://www.w3.org/ns/prov#used": {
              "instancecount": 1,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            },
            "http://www.w3.org/ns/prov#wasAssociatedWith": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 0,
              "http://www.w3.org/2004/02/skos/core#Collection": 2
            },
            "http://www.w3.org/ns/prov#wasGeneratedBy": {
              "instancecount": 0,
              "http://archaeoinformatics.link/ontology#Site": 1,
              "http://www.w3.org/ns/prov#Entity": 1,
              "https://pleiades.stoa.org/places/vocab#Place": 1
            }
          }
        },
        "instancecount": 12
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Person_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Person Instances Collection (fsld:Person_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Agent_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Agent Instances Collection (fsld:Agent_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Activity_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Activity Instances Collection (fsld:Activity_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/ExternalRepository_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "ExternalRepository Instances Collection (fsld:ExternalRepository_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Georeferencing_collection",
        "parent": "http://www.w3.org/2004/02/skos/core#Collection",
        "type": "instance",
        "text": "Georeferencing Instances Collection (fsld:Georeferencing_collection)",
        "data": {}
      },
      {
        "id": "http://www.w3.org/2004/02/skos/core#Collection",
        "parent": "#",
        "type": "collectionclass",
        "text": "Collection (skos:Collection) [5]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 44,
              "http://www.w3.org/ns/prov#Activity": 44,
              "http://archaeoinformatics.link/ontology#ExternalRepository": 17,
              "http://archaeoinformatics.link/ontology#Georeferencing": 5
            }
          },
          "from": {}
        },
        "instancecount": 46
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Site_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Site Instances Collection (fsld:Site_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Entity_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Entity Instances Collection (fsld:Entity_collection)",
        "data": {}
      },
      {
        "id": "http://fuzzy-sl.squirrel.link/data/Place_collection",
        "parent": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "type": "featurecollection",
        "text": "Place Instances Collection (fsld:Place_collection)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/geosparql#FeatureCollection",
        "parent": "http://www.opengis.net/ont/geosparql#SpatialObjectCollection",
        "type": "collectionclass",
        "text": "FeatureCollection (gsp:FeatureCollection) [3]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#member": {
              "instancecount": 22,
              "http://archaeoinformatics.link/ontology#Site": 22,
              "http://www.w3.org/ns/prov#Entity": 22,
              "https://pleiades.stoa.org/places/vocab#Place": 22
            }
          },
          "from": {}
        },
        "instancecount": 25
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
              "instancecount": 22,
              "http://www.opengis.net/ont/sf#Point": 22
            }
          },
          "from": {}
        },
        "instancecount": 25
      }
    ]
  }
}