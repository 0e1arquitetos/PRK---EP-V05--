var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "SALA",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33476609652418077,
          "pitch": 0.07475883744339384,
          "rotation": 0,
          "target": "2-corredor"
        },
        {
          "yaw": 1.0355095916020325,
          "pitch": 0.10832532943155826,
          "rotation": 0,
          "target": "3-cozinha"
        },
        {
          "yaw": 2.391913634004469,
          "pitch": 0.08571866573208275,
          "rotation": 0,
          "target": "1-lavabo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lavabo",
      "name": "LAVABO",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8808039045950924,
          "pitch": 0.5215623010494301,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corredor",
      "name": "CORREDOR",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9331530200823055,
          "pitch": 0.283615729416816,
          "rotation": 0,
          "target": "0-sala"
        },
        {
          "yaw": 2.29321375594166,
          "pitch": 0.36254421129915926,
          "rotation": 0,
          "target": "4-office"
        },
        {
          "yaw": -0.5771417662915166,
          "pitch": 0.3389613156067046,
          "rotation": 0,
          "target": "5-quarto-sofia"
        },
        {
          "yaw": 0.21639517524080887,
          "pitch": 0.24646479537621246,
          "rotation": 0,
          "target": "7-quarto-casal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cozinha",
      "name": "COZINHA",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1927355336571743,
          "pitch": 0.1840259049096744,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office",
      "name": "OFFICE",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8950384398643365,
          "pitch": 0.26390860799279103,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quarto-sofia",
      "name": "QUARTO SOFIA",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23327657358497333,
          "pitch": 0.2516417274607008,
          "rotation": 0,
          "target": "6-banho-sofia"
        },
        {
          "yaw": 0.9479292844004537,
          "pitch": 0.3464889950455472,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-banho-sofia",
      "name": "BANHO SOFIA",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0052157998236178,
          "pitch": 0.5070530035648453,
          "rotation": 0,
          "target": "5-quarto-sofia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quarto-casal",
      "name": "QUARTO CASAL",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.33679146942902,
          "pitch": 0.2192586234489724,
          "rotation": 0,
          "target": "8-banho-casal"
        },
        {
          "yaw": 2.952845354542836,
          "pitch": 0.2071607449231685,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-banho-casal",
      "name": "BANHO CASAL",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.868988110401574,
          "pitch": 0.545045508283577,
          "rotation": 0,
          "target": "7-quarto-casal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PRK - V05",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
