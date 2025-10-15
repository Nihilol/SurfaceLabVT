var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.05638756044904625,
        "pitch": 0.045096890216001384,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.03445246594428397,
          "pitch": 0.03385440534482065,
          "rotation": 0,
          "target": "2-gowning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-desiccators",
      "name": "Desiccators",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 2.4218156804178292,
        "pitch": 0.10710511426299263,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.6168601121264272,
          "pitch": 0.07117870145748384,
          "rotation": 0,
          "target": "11-surface-lab-main"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.119507133732588,
          "pitch": -0.3296394924483046,
          "title": "Desiccators",
          "text": "Low-pressure sample storage with a nitrogen atmosphere."
        },
        {
          "yaw": -0.45562865622540727,
          "pitch": -0.17631344439868357,
          "title": "Fumehood",
          "text": "Fumehood for dicing wafers and chemical cleaning of samples."
        }
      ]
    },
    {
      "id": "2-gowning",
      "name": "Gowning",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.511515726930643,
        "pitch": 0.15785341887469073,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.4804629526478337,
          "pitch": 0.07363529119203704,
          "rotation": 0,
          "target": "3-hallway-1"
        },
        {
          "yaw": -2.7324714779480423,
          "pitch": 0.10958122401573611,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.559434308611193,
          "pitch": -0.1282334758631407,
          "title": "Lab-coats",
          "text": "To maintain a clean lab and for personal protection, we require that users wear a lab-coat, plastic shoe covers, and protective eye-wear when working in the lab."
        },
        {
          "yaw": 1.0976028530528286,
          "pitch": 0.42879430464244095,
          "title": "Plastic Shoe Covers",
          "text": "To maintain a clean lab and for personal protection, we require that users wear a lab-coat, plastic shoe covers, and protective eye-wear when working in the lab."
        }
      ]
    },
    {
      "id": "3-hallway-1",
      "name": "Hallway 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.251296820717922,
        "pitch": 0.20892389532264488,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.12141352351872214,
          "pitch": 0.01516171760302143,
          "rotation": 0,
          "target": "11-surface-lab-main"
        },
        {
          "yaw": -1.4205167443108788,
          "pitch": 0.04794325581030989,
          "rotation": 0,
          "target": "2-gowning"
        },
        {
          "yaw": -2.7873713872580606,
          "pitch": 0.07839264937174661,
          "rotation": 0,
          "target": "12-wet-lab"
        },
        {
          "yaw": -3.088464750793131,
          "pitch": 0.050691970227632055,
          "rotation": 0,
          "target": "4-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway-2",
      "name": "Hallway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 1.0975466531021443,
        "pitch": 0.14645925936986792,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.2434193692942337,
          "pitch": 0.0714034095086511,
          "rotation": 0,
          "target": "7-sem-1"
        },
        {
          "yaw": 0.5937217967749291,
          "pitch": 0.05417208153441244,
          "rotation": 0,
          "target": "8-sem-2-first-view"
        },
        {
          "yaw": 1.920267606448828,
          "pitch": 0.03034575478605106,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pld-end",
      "name": "PLD End",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.24166097335306347,
        "pitch": 0.015032296738667128,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.0416696146358486,
          "pitch": 0.02383192555526925,
          "rotation": 0,
          "target": "6-pld-start"
        },
        {
          "yaw": 0.7227684704354793,
          "pitch": 0.05859763105558713,
          "rotation": 0,
          "target": "13-xps"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.34988775945303985,
          "pitch": 0.09970257118100889,
          "title": "PLD Chamber 1 With RHEED",
          "text": "First PLD Chamber for atomic layer deposition of materials.&nbsp;"
        },
        {
          "yaw": 0.18029216468314146,
          "pitch": 0.08089854376793859,
          "title": "RHEED power source",
          "text": "Power source for the RHEED system"
        },
        {
          "yaw": -0.19685782737955293,
          "pitch": 0.03330814460874798,
          "title": "Reflection High Energy Electron Diffraction (RHEED)",
          "text": "RHEED enables atomic layer-by-layer growth monitoring."
        },
        {
          "yaw": 1.0785844443869692,
          "pitch": 0.11429709081529182,
          "title": "Computer for RHEED control",
          "text": "Computer to control and monitor the RHEED system and output."
        },
        {
          "yaw": 1.2575022540180019,
          "pitch": 0.13588982176961117,
          "title": "Computer for PLD chamber 1",
          "text": "Computer to control and monitor PLD chamber 1."
        },
        {
          "yaw": 2.0332704892406497,
          "pitch": 0.22983281442902026,
          "title": "Computer for PLD chamber 2",
          "text": "Computer to control and monitor PLD chamber 2."
        },
        {
          "yaw": 1.5231660411027388,
          "pitch": 0.19068239888474814,
          "title": "Computer for surface chamber",
          "text": "Computer to control and monitor the surface chamber."
        }
      ]
    },
    {
      "id": "6-pld-start",
      "name": "PLD Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9348552503252385,
          "pitch": 0.05798626394431139,
          "rotation": 0,
          "target": "5-pld-end"
        },
        {
          "yaw": -2.3269905992445548,
          "pitch": 0.024073628312855533,
          "rotation": 0,
          "target": "11-surface-lab-main"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4043372157862493,
          "pitch": -0.04501904504811449,
          "title": "PLD Chamber 3",
          "text": "Third PLD chamber for atomic layer deposition of materials."
        },
        {
          "yaw": -0.36706955373974814,
          "pitch": 0.09056166815102529,
          "title": "PLD Chamber 2",
          "text": "Second PLD chamber for atomic layer deposition of materials."
        },
        {
          "yaw": 0.31004044009219633,
          "pitch": 0.18944104082250846,
          "title": "Sputter chamber",
          "text": "Chamber to sputter materials onto a substrate."
        },
        {
          "yaw": -0.8086981940873876,
          "pitch": -0.02919030681883683,
          "title": "PLD Laser Control Room",
          "text": "The room in which the laser for PLD is controlled."
        }
      ]
    },
    {
      "id": "7-sem-1",
      "name": "SEM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.24159093624352757,
        "pitch": 0.1108631884476523,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.8871919097855674,
          "pitch": -0.016045731165529986,
          "rotation": 0,
          "target": "4-hallway-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6666499540431694,
          "pitch": 0.004183339763384808,
          "title": "Scanning Electron Microscope",
          "text": "Scanning electron microscopy is a non-optical method to obtain information about about a surface using electrons instead of light, as electrons are not under the same constraints as light is due to the diffraction limit of light."
        }
      ]
    },
    {
      "id": "8-sem-2-first-view",
      "name": "SEM 2 First View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24584957058563717,
          "pitch": -0.07524084061090974,
          "rotation": 0,
          "target": "9-sem-2-second-view"
        },
        {
          "yaw": -1.3125958663002812,
          "pitch": 0.07078693300371519,
          "rotation": 0,
          "target": "4-hallway-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6465188088379303,
          "pitch": 0.020926057695730194,
          "title": "Scanning Electron Microscope 1 (SEM)",
          "text": "Scanning electron microscopy is a non-optical method to obtain information about about a surface using electrons instead of light, as electrons are not under the same constraints as light is due to the diffraction limit of light."
        }
      ]
    },
    {
      "id": "9-sem-2-second-view",
      "name": "SEM 2 Second View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3999088080433939,
          "pitch": -0.07321917284247093,
          "rotation": 0,
          "target": "8-sem-2-first-view"
        },
        {
          "yaw": 0.3433394733698254,
          "pitch": -0.0012309983844929206,
          "rotation": 0,
          "target": "4-hallway-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7611426676272472,
          "pitch": 0.07702191724285257,
          "title": "Scanning Electron Microscope 2 (SEM)",
          "text": "Scanning electron microscopy is a non-optical method to obtain information about about a surface using electrons instead of light, as electrons are not under the same constraints as light is due to the diffraction limit of light."
        }
      ]
    },
    {
      "id": "10-stacker-and-microscope",
      "name": "Stacker and Microscope",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -1.3453687075326766,
        "pitch": 0.29679479171855405,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.2243416247585088,
          "pitch": 0.024659496202247055,
          "rotation": 0,
          "target": "11-surface-lab-main"
        },
        {
          "yaw": 0.958116037252724,
          "pitch": 0.018930299372456716,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.26155286063870875,
          "pitch": 0.24539762275748878,
          "title": "Plasma Asher",
          "text": "A plasma asher is an instrument used to clean samples of organic residue on the surface by burning them off with a plasma."
        },
        {
          "yaw": 1.8639651800769688,
          "pitch": 0.18177736039814185,
          "title": "Optical Microscope",
          "text": "Standard optical microscope for visual inspection of samples."
        },
        {
          "yaw": -1.3617859238630636,
          "pitch": 0.014578519966342185,
          "title": "Stacker",
          "text": "The stacker is a movable stage and microscope that has micromanipulators attached to it, such that you interact with and manipulate samples that are incredibly hard to do by hand.&nbsp;"
        },
        {
          "yaw": -2.144224684756244,
          "pitch": -0.08229751663972174,
          "title": "Digital View of Optical Stacker Microscope",
          "text": "Screens to view and capture what the stacker is seeing."
        },
        {
          "yaw": -1.6393237817483666,
          "pitch": 0.21043770073286794,
          "title": "Control Panel for Stacker",
          "text": "The control sticks to move the stage and micromanipulators of the stacker."
        }
      ]
    },
    {
      "id": "11-surface-lab-main",
      "name": "Surface Lab Main",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.5104365929654229,
        "pitch": 0.011274222554000346,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.7179249637252152,
          "pitch": 0.04303703119796154,
          "rotation": 0,
          "target": "10-stacker-and-microscope"
        },
        {
          "yaw": -1.1937032210250926,
          "pitch": 0.03870007902712125,
          "rotation": 0,
          "target": "0-desiccators"
        },
        {
          "yaw": 0.33640818228602676,
          "pitch": 0.015432150023283242,
          "rotation": 0,
          "target": "6-pld-start"
        },
        {
          "yaw": 1.3882057237411303,
          "pitch": 0.08149974723352393,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7866024314611195,
          "pitch": -0.0623149940500447,
          "title": "Equipment Status",
          "text": "It's important that all users know the state of the lab, so the equipment responsible are tasked with keeping this board up to date on the working order of their equipment."
        }
      ]
    },
    {
      "id": "12-wet-lab",
      "name": "Wet lab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.5258610739775076,
        "pitch": 0.11876290017589852,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.888669827558659,
          "pitch": 0.036790104902657106,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5415993780269286,
          "pitch": -0.03864491031527528,
          "title": "Fumehood",
          "text": "The fumehood is where wet chemistry of the lab is performed, such as sample cleaning, dissolving of polymers, and other tasks best performed with wet chemistry."
        },
        {
          "yaw": 0.18504065327884156,
          "pitch": -0.14424253655614017,
          "title": "Chemical Storage",
          "text": "Chemical storage and trash."
        },
        {
          "yaw": 0.9619661222838829,
          "pitch": -0.04312734457802314,
          "title": "Ultra-pure water Source (MilliQ)",
          "text": "For many purposes, water is an incredibly useful thing but standard tap water contains many other things, so a hyper-pure water source is invaluable in a lab such as this."
        },
        {
          "yaw": -2.5936266154107877,
          "pitch": 0.10520917080293835,
          "title": "Microscope",
          "text": "A standard optical microscope for sample inspection."
        }
      ]
    },
    {
      "id": "13-xps",
      "name": "XPS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.6232092663430429,
          "pitch": 0.006979908041596872,
          "rotation": 0,
          "target": "5-pld-end"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0826340683146185,
          "pitch": -0.017098303793549263,
          "title": "X-Ray Photoelectron Spectroscopy Control Panel",
          "text": "Techniques such as this require many input parameters, which can be controlled from this computer."
        },
        {
          "yaw": 0.6335973851078034,
          "pitch": -0.2248856359624174,
          "title": "X-Ray Photoelectron Spectroscopy (XPS)",
          "text": "XPS is a method used to determine the material composition of a surface, by utilising the energy of scattered electrons from the surface.&nbsp;"
        }
      ]
    }
  ],
  "name": "Surface Lab Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
