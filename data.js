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
        "yaw": 0.20816872257831953,
        "pitch": -0.04605310629235859,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 0.13250627971617845,
          "pitch": -0.031653113728001614,
          "rotation": 0,
          "target": "1-gowning-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1446235742591604,
          "pitch": -0.45348343861669704,
          "title": "Surface Lab Gowning Area",
          "text": "The main entrance to the surface lab"
        }
      ]
    },
    {
      "id": "1-gowning-area",
      "name": "Gowning Area",
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
        "yaw": -0.006155204077412435,
        "pitch": -0.021809020388637634,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 3.109407130919571,
          "pitch": -0.05898873702570029,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.21297760741805227,
          "pitch": 0.015972186669062083,
          "rotation": 0,
          "target": "2-after-gowning"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1181589404395496,
          "pitch": -0.359258694394498,
          "title": "Exit",
          "text": "Exiting into hallway"
        },
        {
          "yaw": -2.2427457929184307,
          "pitch": -0.561765964957587,
          "title": "Gowns",
          "text": "Gowns for researchers and guests"
        },
        {
          "yaw": -0.20488930211076983,
          "pitch": -0.2906904283487748,
          "title": "Surface Lab",
          "text": "After having gowned and put on plastic slippers, you can enter the surface lab"
        }
      ]
    },
    {
      "id": "2-after-gowning",
      "name": "After Gowning",
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
        "yaw": 0.0779845527298697,
        "pitch": 0.0014421977411913645,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 3.092801986672546,
          "pitch": -0.11130416583222669,
          "rotation": 0,
          "target": "1-gowning-area"
        },
        {
          "yaw": -0.4695722090414609,
          "pitch": -0.043812968463122104,
          "rotation": 0,
          "target": "3-main-surface"
        },
        {
          "yaw": 0.48845827689268084,
          "pitch": -0.178794454751376,
          "rotation": 0,
          "target": "4-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0899272653231495,
          "pitch": -0.4282627352996826,
          "title": "Gowning Area",
          "text": "Once done with experiments and everything has been put back into place and you've cleaned your work spaces you can leave and get back to data analysis"
        },
        {
          "yaw": -0.4534365050739275,
          "pitch": -0.31868942951104984,
          "title": "Main Surface Lab",
          "text": "The main part of the surface lab where both microscopes, the stacker, the pulsed laser depositioning, and the x-ray diffraction equipment are placed"
        },
        {
          "yaw": 0.4597865532711367,
          "pitch": -0.49306612444495457,
          "title": "SEM and Fume Hoods",
          "text": "Towards the scanning electron microscopy equipment and the fume hoods in which we do our wet procedures"
        }
      ]
    },
    {
      "id": "3-main-surface",
      "name": "Main Surface",
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
        "yaw": -0.4188790204786237,
        "pitch": 0.0220964205273404,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 0.5715130064426734,
          "pitch": 0.08724623220966699,
          "rotation": 0,
          "target": "4-hallway-1"
        },
        {
          "yaw": 0.16182827894332874,
          "pitch": 0.013417317588711342,
          "rotation": 0,
          "target": "6-mid-pld"
        },
        {
          "yaw": -1.5813443304834855,
          "pitch": 0.022975085335723122,
          "rotation": 0,
          "target": "10-stacker-and-microscope"
        },
        {
          "yaw": -0.5241719551317203,
          "pitch": 0.008432626317102176,
          "rotation": 0,
          "target": "12-pld-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5795214284814545,
          "pitch": -0.1316550718432481,
          "title": "Stacker and Microscope",
          "text": "The stacker is an instrument used to stack nanoscale samples on top of each other. Standard optical microscopes are also present"
        }
      ]
    },
    {
      "id": "4-hallway-1",
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
        "yaw": -0.10927278795093542,
        "pitch": -0.015783157519528856,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 0.38878001577888277,
          "pitch": -0.12894144562680587,
          "rotation": 0,
          "target": "5-fume-hoods"
        },
        {
          "yaw": -0.7601279647278147,
          "pitch": -0.041330870018507326,
          "rotation": 0,
          "target": "9-first-view-sem-2"
        },
        {
          "yaw": -1.0294032557767423,
          "pitch": -0.030739709672829463,
          "rotation": 0,
          "target": "13-sem-1"
        },
        {
          "yaw": 1.9943995130027776,
          "pitch": -0.09278660515769843,
          "rotation": 0,
          "target": "3-main-surface"
        },
        {
          "yaw": 1.393300689021471,
          "pitch": -0.0607239638913839,
          "rotation": 0,
          "target": "2-after-gowning"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.39373807338846234,
          "pitch": -0.3854054936610325,
          "title": "Fume Hoods",
          "text": "Fume Hoods for wet chemistry and other procedures in which fume hoods are required"
        },
        {
          "yaw": -1.0176542716000903,
          "pitch": -0.21855304590064506,
          "title": "SEM 1",
          "text": "The first of the scanning electron microscopes"
        },
        {
          "yaw": -0.7481198882691817,
          "pitch": -0.23887661574520536,
          "title": "SEM 2",
          "text": "The second of the scanning electron microscopes"
        },
        {
          "yaw": 2.005255413880727,
          "pitch": -0.3165607883431747,
          "title": "Main Surface Lab",
          "text": "The Main surface lab where the microscopes, the stacker, and pulsed laser depositioning, and x-ray diffraction equipment is located"
        },
        {
          "yaw": 1.3952009503658562,
          "pitch": -0.27166533413938687,
          "title": "After Gowning",
          "text": "Towards the gowning area"
        }
      ]
    },
    {
      "id": "5-fume-hoods",
      "name": "Fume Hoods",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-mid-pld",
      "name": "Mid PLD",
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
          "yaw": 1.5334431101816275,
          "pitch": -0.02660206610057614,
          "rotation": 0,
          "target": "7-end-of-pld"
        },
        {
          "yaw": -1.3928152463026056,
          "pitch": -0.07900495881654557,
          "rotation": 0,
          "target": "3-main-surface"
        },
        {
          "yaw": -1.7173552839831743,
          "pitch": -0.06207267583847198,
          "rotation": 0,
          "target": "4-hallway-1"
        },
        {
          "yaw": -0.4006515550700591,
          "pitch": -0.06692177256582355,
          "rotation": 0,
          "target": "12-pld-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.34352417130423163,
          "pitch": -0.31208299019165864,
          "title": "Main PLD Line",
          "text": "The various chambers and lines used to grow atomically layered crystals"
        }
      ]
    },
    {
      "id": "7-end-of-pld",
      "name": "End of PLD",
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
          "yaw": -0.23596858872079451,
          "pitch": -0.08399429548816961,
          "rotation": 0,
          "target": "6-mid-pld"
        },
        {
          "yaw": 1.0534022734010744,
          "pitch": -0.11268630768057974,
          "rotation": 0,
          "target": "14-xrd"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.774080113905141,
          "pitch": -0.31400373148301597,
          "title": "A busy researcher",
          "text": "Researcher likely doing some data-analysis on their current experiments"
        }
      ]
    },
    {
      "id": "8-end-view-sem-2",
      "name": "End View SEM 2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-first-view-sem-2",
      "name": "First view SEM 2",
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
          "yaw": -0.29217318057786557,
          "pitch": -0.12552256289030872,
          "rotation": 0,
          "target": "8-end-view-sem-2"
        },
        {
          "yaw": 0.9421821947002194,
          "pitch": -0.11469264684593483,
          "rotation": 0,
          "target": "11-large-view-sem-2"
        },
        {
          "yaw": -1.173357508090671,
          "pitch": 0.015513286179960062,
          "rotation": 0,
          "target": "4-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1868785919113662,
          "pitch": -0.20894784110548414,
          "title": "Hallway",
          "text": "Towards the main surface lab, fume hoods, and the other SEM"
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
        "yaw": -0.30050016686509196,
        "pitch": -0.07891578759764428,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 1.144279283769709,
          "pitch": -0.024524478378101122,
          "rotation": 0,
          "target": "4-hallway-1"
        },
        {
          "yaw": 1.699279226085138,
          "pitch": -0.030345884529996425,
          "rotation": 0,
          "target": "3-main-surface"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.85439447219043,
          "pitch": -0.3636962300115094,
          "title": "Stacker",
          "text": "The stacker is a microscope that has micro-manipulators attached allowing researchers to be incredibly precise when placing nano-sized samples on top of each other"
        },
        {
          "yaw": 0.3874943742153185,
          "pitch": -0.25500253053067823,
          "title": "Plasma Asher",
          "text": "The plasma asher is a cleaning instrument used to clean organic and carbon-based materials off semi-conductor substrates using a gas-based plasma, usually either argon or oxygen."
        },
        {
          "yaw": 1.9667831742569062,
          "pitch": -0.4093851361969527,
          "title": "Optical Microscope",
          "text": "A standard microscope used for optical inspection of your samples"
        }
      ]
    },
    {
      "id": "11-large-view-sem-2",
      "name": "Large view SEM 2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-pld-control-room",
      "name": "PLD Control Room",
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
        "yaw": 0.6374245963805336,
        "pitch": 0.059975998574209655,
        "fov": 1.3678736838034153
      },
      "linkHotspots": [
        {
          "yaw": 1.3416212041029514,
          "pitch": -0.006782290356966314,
          "rotation": 0,
          "target": "3-main-surface"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03511702904757463,
          "pitch": 0.013471331018214627,
          "title": "PLD Control",
          "text": "The equipment used to control the PLD chamber"
        }
      ]
    },
    {
      "id": "13-sem-1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-xrd",
      "name": "XRD",
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
          "yaw": -0.3737190482167314,
          "pitch": -0.1289234810279929,
          "rotation": 0,
          "target": "7-end-of-pld"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.559154560497575,
          "pitch": -0.4811679726356992,
          "title": "X-ray diffraction",
          "text": "X-ray diffraction is used to investigate the material composition of the surface you're interested in"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
