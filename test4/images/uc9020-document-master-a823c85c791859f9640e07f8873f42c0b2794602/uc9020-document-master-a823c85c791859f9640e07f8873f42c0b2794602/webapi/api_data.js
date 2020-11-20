define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1.0/assets/:id",
    "title": "04. Delete Asset",
    "group": "AssetGroup",
    "name": "DeleteAsset",
    "version": "0.0.0",
    "filename": "../resources/asset.py",
    "groupTitle": "Asset",
    "groupDescription": "<h4> Asset group APIs are for handling assets management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/assets/:id",
    "title": "03. Get Asset",
    "group": "AssetGroup",
    "name": "GetAsset",
    "version": "0.0.0",
    "filename": "../resources/asset.py",
    "groupTitle": "Asset",
    "groupDescription": "<h4> Asset group APIs are for handling assets management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Used purpose type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Upload file name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>Upload file real storage name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>Upload file md5 encode string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The asset's access url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isDeletable",
            "description": "<p>The asset is deletable or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>The asset's upload date and time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\"            : 5,\n    \"type\"          : \"image\"\n    \"name\"          : \"avatar.jpeg\",\n    \"fileName\"      : \"avatar.jpeg\",\n    \"url\"           : \"http://<access file path>\",\n    \"datetime\"      : \"2018-02-15T15:17:27\",\n    \"isDeletable\"   : true,\n    \"md5\"           : \"1b397c44d006dfb76a15f258583fd366\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/assets",
    "title": "01. List All Assets",
    "group": "AssetGroup",
    "name": "GetAssets",
    "version": "0.0.0",
    "filename": "../resources/asset.py",
    "groupTitle": "Asset",
    "groupDescription": "<h4> Asset group APIs are for handling assets management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assets",
            "description": "<p>The asset information list. <a href=\"#api-AssetGroup-GetAsset\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"assets\" : [\n        {\n            \"id\"            : 5,\n            \"type\"          : \"image\"\n            \"name\"          : \"avatar.jpeg\",\n            \"filename\"      : \"avatar.jpeg\",\n            \"url\"           : \"http://<access file path>\",\n            \"datetime\"      : \"2018-02-15T15:17:27\",\n            \"isDeletable\"   : true,\n            \"md5\"           : \"1b397c44d006dfb76a15f258583fd366\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/assets/upload",
    "title": "02. Upload Asset",
    "group": "AssetGroup",
    "name": "UploadAsset",
    "version": "0.0.0",
    "filename": "../resources/asset.py",
    "groupTitle": "Asset",
    "groupDescription": "<h4> Asset group APIs are for handling assets management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "form-data-text",
            "allowedValues": [
              "\"image\"",
              "\"qml\"",
              "\"font\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Uploaded file type.</p>"
          },
          {
            "group": "Request",
            "type": "form-data-file",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "POST <api path> HTTP/1.1\nHost: <server address>\nAuthorization: {credential}\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name=\"type\"\n\nimage\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name=\"file\"; filename=\"test.png\"\nContent-Type:\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
          "type": "multipart/form-data"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Used purpose type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Upload file name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>Upload file real storage name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>Upload file md5 encode string.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The asset's access url.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isDeletable",
            "description": "<p>The asset is deletable or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "datetime",
            "description": "<p>The asset's upload date and time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\"            : 5,\n    \"type\"          : \"image\"\n    \"name\"          : \"avatar.jpeg\",\n    \"fileName\"      : \"avatar.jpeg\",\n    \"url\"           : \"http://<access file path>\",\n    \"datetime\"      : \"2018-02-15T15:17:27\",\n    \"isDeletable\"   : true,\n    \"md5\"           : \"1b397c44d006dfb76a15f258583fd366\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/audio/input",
    "title": "02. List All Input",
    "group": "AudioGroup",
    "name": "GetAllInput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "input",
            "description": "<p>Input audio data list. <a href=\"#api-AudioGroup-GetOneInput\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"input\": [\n        {\n            \"id\": 1,\n            \"name\": \"Line-In\",\n            \"type\": \"analog\"\n            \"pan\": 100,\n            \"gain\": 100,\n            \"isMute\": true,\n            \"capability\": {\n                \"gain\": {\n                    \"max\": 2000,\n                    \"min\": -8000,\n                    \"step\": 50\n                },\n                \"pan\": {\n                    \"max\": 10000,\n                    \"min\": -10000,\n                    \"step\": 100\n                }\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/audio/output",
    "title": "05. List All Output",
    "group": "AudioGroup",
    "name": "GetAllOutput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "output",
            "description": "<p>Output audio data list. <a href=\"#api-AudioGroup-GetOneOutput\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"output\": [\n        {\n            \"id\": 1,\n            \"name\": \"Line-Out\",\n            \"type\": \"analog\"\n            \"pan\": 100,\n            \"gain\": 100,\n            \"isMute\": true,\n            \"capability\": {\n                \"gain\": {\n                    \"max\": 2000,\n                    \"min\": -8000,\n                    \"step\": 50\n                },\n                \"pan\": {\n                    \"max\": 10000,\n                    \"min\": -10000,\n                    \"step\": 100\n                }\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/audio",
    "title": "01. Get All Audio",
    "group": "AudioGroup",
    "name": "GetAudioList",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "audio",
            "description": "<p>All audio information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "audio.input",
            "description": "<p>Input audio data list. <a href=\"#api-AudioGroup-GetAllInput\"> &lt;more.&gt; </a></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "audio.output",
            "description": "<p>Output audio data list. <a href=\"#api-AudioGroup-GetAllOutput\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"audio\": {\n        \"input\": [...],\n        \"output\": [...]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/audio/input/:id",
    "title": "03. Get One Input",
    "group": "AudioGroup",
    "name": "GetOneInput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The audio interface name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The audio interface type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "gain",
            "description": "<p>The volume setting. <code>Unit is db * 100.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "pan",
            "description": "<p>Balance sound setting between left and right channel. <code>Unit is percentage * 100.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isMute",
            "description": "<p>The mute turn on or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "capability",
            "description": "<p>Settings scope and limit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Audio Name\",\n    \"type\": \"analog\",\n    \"pan\": 100,\n    \"gain\": 100,\n    \"isMute\": true,\n    \"capability\": {\n        \"gain\": {\n            \"max\": 2000,\n            \"min\": -8000,\n            \"step\": 50\n        },\n        \"pan\": {\n            \"max\": 10000,\n            \"min\": -10000,\n            \"step\": 100\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/audio/output/:id",
    "title": "06. Get One Output",
    "group": "AudioGroup",
    "name": "GetOneOutput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The audio interface name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The audio interface type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "gain",
            "description": "<p>The volume setting. <code>Unit is db * 100.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "pan",
            "description": "<p>Balance sound setting between left and right channel. <code>Unit is percentage * 100.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isMute",
            "description": "<p>The mute turn on or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "capability",
            "description": "<p>Settings scope and limit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Audio Name\",\n    \"type\": \"analog\"\n    \"pan\": 100,\n    \"gain\": 100,\n    \"isMute\": true,\n    \"capability\": {\n        \"gain\": {\n            \"max\": 2000,\n            \"min\": -8000,\n            \"step\": 50\n        },\n        \"pan\": {\n            \"max\": 10000,\n            \"min\": -10000,\n            \"step\": 100\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/audio/input/:id",
    "title": "04. Set One Input",
    "group": "AudioGroup",
    "name": "SetOneInput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "description": "<p><code>This is asynchronous setting function</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "gain",
            "description": "<p>The volume setting. <code>Unit is db * 100.</code></p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "pan",
            "description": "<p>Balance sound setting between left and right channel. <code>Unit is percentage * 100.</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "isMute",
            "description": "<p>The mute turn on or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"gain\": 100,\n    \"pan\": 100,\n    \"isMute\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/audio/output/:id",
    "title": "07. Set One Output",
    "group": "AudioGroup",
    "name": "SetOneOutput",
    "version": "0.0.0",
    "filename": "../resources/audio.py",
    "groupTitle": "Audio",
    "groupDescription": "<h4> Audio group APIs are for handling audios' I/O sound control management. </h4><br> P.S.<br> The name of audio input are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> } <br> The name of audio output are fixed in { <code>\"Line-Out\"</code>, <code>\"DisplayA Audio\"</code>, <code>\"Stream Out Audio\"</code> }",
    "description": "<p><code>This is asynchronous setting function</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "gain",
            "description": "<p>The volume setting. <code>Unit is db * 100.</code></p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "pan",
            "description": "<p>Balance sound setting between left and right channel. <code>Unit is percentage * 100.</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": true,
            "field": "isMute",
            "description": "<p>The mute turn on or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"gain\": 100,\n    \"pan\": 100,\n    \"isMute\": false\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/auth/login/authentication",
    "title": "04. Modify Authentication",
    "group": "AuthGroup",
    "name": "ModifyAuthentication",
    "permission": [
      {
        "name": "login",
        "title": "User login required.",
        "description": "<p>Only logged in users can access this.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/auth.py",
    "groupTitle": "Authentication",
    "groupDescription": "<h4> Authentication group APIs are for handling APIs access control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authentication code and encoded by 'username:password' in base64.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"authorization\": base64('username:password')\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>This user's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>This user's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of this user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"administrator\",\n    \"role\": \"administrator\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/auth/token",
    "title": "01. Query Token",
    "description": "<p>Token Based Authentication</p>",
    "group": "AuthGroup",
    "name": "QueryToken",
    "permission": [
      {
        "name": "None"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/auth.py",
    "groupTitle": "Authentication",
    "groupDescription": "<h4> Authentication group APIs are for handling APIs access control management. </h4>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authentication code and encoded by 'username:password' in base64.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"authorization\": base64('username:password')\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "credential",
            "description": "<p>To access APIs, a credential is required in the http header of APIs request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"credential\": \"6249a9bbdb3ec7072a1ee8752ba47f30567135c\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect username or password.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 401",
          "content": "{\n    \"code\": 101,\n    \"message\": \"Incorrect username or password.\"\n}",
          "type": "json"
        },
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/auth/login",
    "title": "02. User Login",
    "description": "<p>Cookie Based Authentication - Login</p>",
    "group": "AuthGroup",
    "name": "UserLogin",
    "permission": [
      {
        "name": "None"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/auth.py",
    "groupTitle": "Authentication",
    "groupDescription": "<h4> Authentication group APIs are for handling APIs access control management. </h4>",
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Authentication code and encoded by 'username:password' in base64.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"authorization\": base64('username:password')\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>This user's id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>This user's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of this user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"administrator\",\n    \"role\": \"administrator\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Incorrect username or password.</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 401",
          "content": "{\n    \"code\": 101,\n    \"message\": \"Incorrect username or password.\"\n}",
          "type": "json"
        },
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/auth/logout",
    "title": "03. User Logout",
    "description": "<p>Cookie Based Authentication - Logout</p>",
    "group": "AuthGroup",
    "name": "UserLogout",
    "permission": [
      {
        "name": "login",
        "title": "User login required.",
        "description": "<p>Only logged in users can access this.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/auth.py",
    "groupTitle": "Authentication",
    "groupDescription": "<h4> Authentication group APIs are for handling APIs access control management. </h4>",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/auth/verify_credential",
    "title": "05. Verify Credential",
    "group": "AuthGroup",
    "name": "VerifyCredential",
    "version": "0.0.0",
    "filename": "../resources/auth.py",
    "groupTitle": "Authentication",
    "groupDescription": "<h4> Authentication group APIs are for handling APIs access control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/channels/:id",
    "title": "02. Get Channel",
    "group": "ChannelGroup",
    "name": "GetChannel",
    "version": "0.0.0",
    "filename": "../resources/channel.py",
    "groupTitle": "Channel",
    "groupDescription": "<h4> Channel group APIs are for handling APIs access control management. </h4> <br> P.S.<br> <code> Only by setting channels can change shown content on display relative with configuration; Means, this will invoke configuration. </code> <br><br> The name of channel are fixed in { <code>\"Preview\"</code>, <code>\"Program\"</code>, <code>\"iPad\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The channel's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sceneId",
            "description": "<p>The source's data index number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Preview\",\n    \"sceneId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/channels",
    "title": "01. List All Channels",
    "group": "ChannelGroup",
    "name": "GetChannelList",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Must at least has high level permission be able to access this.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/channel.py",
    "groupTitle": "Channel",
    "groupDescription": "<h4> Channel group APIs are for handling APIs access control management. </h4> <br> P.S.<br> <code> Only by setting channels can change shown content on display relative with configuration; Means, this will invoke configuration. </code> <br><br> The name of channel are fixed in { <code>\"Preview\"</code>, <code>\"Program\"</code>, <code>\"iPad\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": "<p>The channel data list. <a href=\"#api-ChannelGroup-GetChannel\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"channels\": [\n        {\n            \"id\": 1,\n            \"name\": \"Preview\",\n            \"sceneId\": 1\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/channels/:id",
    "title": "03. Set Channel",
    "group": "ChannelGroup",
    "name": "SetChannel",
    "version": "0.0.0",
    "filename": "../resources/channel.py",
    "groupTitle": "Channel",
    "groupDescription": "<h4> Channel group APIs are for handling APIs access control management. </h4> <br> P.S.<br> <code> Only by setting channels can change shown content on display relative with configuration; Means, this will invoke configuration. </code> <br><br> The name of channel are fixed in { <code>\"Preview\"</code>, <code>\"Program\"</code>, <code>\"iPad\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The channel's name.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "sceneId",
            "description": "<p>The scene's data index number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"name\": \"Preview\",\n    \"sceneId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The channel's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sceneId",
            "description": "<p>The source's data index number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Preview\",\n    \"sceneId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/codec",
    "title": "01. Get All",
    "group": "CodecGroup",
    "name": "GetAllCodecs",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "codec",
            "description": "<p>Codec data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "codec.video",
            "description": "<p>All video codecs. <a href=\"#api-CodecGroup-GetVideoCodecList\"> &lt;more.&gt; </a></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "codec.audio",
            "description": "<p>All audio codecs. <a href=\"#api-CodecGroup-GetAudioCodecList\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"codec\": {\n        \"video\": [...],\n        \"audio\": [...]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/codec/audio/:id",
    "title": "06. Get Audio",
    "group": "CodecGroup",
    "name": "GetAudioCodec",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>The audio format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The audio bitrate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rateControl",
            "description": "<p>The audio rate control mode.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "samplerate",
            "description": "<p>The audio samplerate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "delay",
            "description": "<p>The audio delay setting in millisecond.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"foramt\": \"AAC\",\n    \"ratecontrol\":\"CBR\",\n    \"bitrate\": 128,\n    \"samplerate\": 48000,\n    \"delay\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/codec/audio",
    "title": "05. List All Audios",
    "group": "CodecGroup",
    "name": "GetAudioCodecList",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "audio",
            "description": "<p>The video data list. <a href=\"#api-CodecGroup-GetAudioCodec\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"audio\" : [\n        {\n            \"id\": 1,\n            \"foramt\": \"AAC\",\n            \"ratecontrol\":\"CBR\",\n            \"bitrate\": 128,\n            \"samplerate\": 48000,\n            \"delay\": 0\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/codec/video/:id",
    "title": "03. Get Video",
    "group": "CodecGroup",
    "name": "GetVideoCodec",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>The video format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>The video resolution width.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "height",
            "description": "<p>The video resolution height.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The video bitrate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "frameRate",
            "description": "<p>The video frame rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "keyframes",
            "description": "<p>The video key frames.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "level",
            "description": "<p>The video level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rateControl",
            "description": "<p>The video rate  control mode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile",
            "description": "<p>The video profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"format\": \"H264\",\n    \"width\": 1920,\n    \"height\": 1080,\n    \"bitrate\": 4096,\n    \"frameRate\": 30,\n    \"keyframes\": 16,\n    \"level\": 40,\n    \"rateControl\": \"CBR\",\n    \"profile\": \"baseline\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/codec/video",
    "title": "02. List All Videos",
    "group": "CodecGroup",
    "name": "GetVideoCodecList",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "video",
            "description": "<p>The video data list. <a href=\"#api-CodecGroup-GetVideoCodec\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"video\" : [\n        {\n            \"id\": 1,\n            \"format\": \"H264\",\n            \"width\": 1920,\n            \"height\": 1080,\n            \"bitrate\": 4096,\n            \"frameRate\": 30,\n            \"keyframes\": 16,\n            \"level\": 40,\n            \"rateControl\": \"CBR\",\n            \"profile\": \"baseline\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/codec/audio/:id",
    "title": "07. Set Audio",
    "group": "CodecGroup",
    "name": "SetAudioCodec",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "description": "<p><code>This API is not implemented</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The audio bitrate.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "delay",
            "description": "<p>The audio delay setting in millisecond.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"bitrate\": 128,\n    \"delay\": 100\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>The audio format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The audio bitrate.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rateControl",
            "description": "<p>The audio rate control mode.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "samplerate",
            "description": "<p>The audio samplerate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "delay",
            "description": "<p>The audio delay setting in millisecond.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"foramt\": \"AAC\",\n    \"ratecontrol\":\"CBR\",\n    \"bitrate\": 128,\n    \"samplerate\": 48000,\n    \"delay\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/codec/video/:id",
    "title": "04. Set Video",
    "group": "CodecGroup",
    "name": "SetVideoCodec",
    "version": "0.0.0",
    "filename": "../resources/codec.py",
    "groupTitle": "Codec",
    "groupDescription": "<h4> Codec group APIs are for handling streaming encode configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "width",
            "description": "<p>The video resolution width.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "height",
            "description": "<p>The video resolution height.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The video bitrate.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"width\": 1920,\n    \"height\": 1080,\n    \"bitrate\": 4096\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>The video format.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": "<p>The video resolution width.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "height",
            "description": "<p>The video resolution height.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bitrate",
            "description": "<p>The video bitrate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "frameRate",
            "description": "<p>The video frame rate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "keyframes",
            "description": "<p>The video key frames.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "level",
            "description": "<p>The video level.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rateControl",
            "description": "<p>The video rate  control mode.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profile",
            "description": "<p>The video profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"format\": \"H264\",\n    \"width\": 1920,\n    \"height\": 1080,\n    \"bitrate\": 4096,\n    \"frameRate\": 30,\n    \"keyframes\": 16,\n    \"level\": 40,\n    \"rateControl\": \"CBR\",\n    \"profile\": \"baseline\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/firmware/upload",
    "title": "3. Upgrade Firmware",
    "group": "FirmwareGroup",
    "name": "DoFWUpgrade",
    "version": "0.0.0",
    "filename": "../resources/firmware.py",
    "groupTitle": "Firmware",
    "groupDescription": "<h4> Firmware group APIs are for handling firmware control management. </h4>",
    "description": "<p><code>This API is not implemented</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "form-data-file",
            "optional": false,
            "field": "file",
            "description": "<p>Uploaded file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "POST <api path> HTTP/1.1\nHost: <server address>\nAuthorization: {credential}\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name=\"file\"; filename=\"\"\nContent-Type:\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
          "type": "multipart/form-data"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/firmware",
    "title": "1. Get Upgrade Status",
    "group": "FirmwareGroup",
    "name": "GetFWUpgradeStatus",
    "version": "0.0.0",
    "filename": "../resources/firmware.py",
    "groupTitle": "Firmware",
    "groupDescription": "<h4> Firmware group APIs are for handling firmware control management. </h4>",
    "description": "<p><code>This API is not implemented</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/firmware",
    "title": "2. Notify Uploading Start",
    "group": "FirmwareGroup",
    "name": "StartUpload",
    "version": "0.0.0",
    "filename": "../resources/firmware.py",
    "groupTitle": "Firmware",
    "groupDescription": "<h4> Firmware group APIs are for handling firmware control management. </h4>",
    "description": "<p><code>This API is not implemented</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "Null",
            "description": "<p>No content response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 204",
          "content": "\"\"",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/layouts/:id",
    "title": "02. Get Layout",
    "group": "LayoutGroup",
    "name": "GetLayout",
    "version": "0.0.0",
    "filename": "../resources/layout.py",
    "groupTitle": "Layout",
    "groupDescription": "<h4> Layout group APIs are for handling video layout configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/layouts",
    "title": "01. List All Layouts",
    "group": "LayoutGroup",
    "name": "GetLayouts",
    "version": "0.0.0",
    "filename": "../resources/layout.py",
    "groupTitle": "Layout",
    "groupDescription": "<h4> Layout group APIs are for handling video layout configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "layouts",
            "description": "<p>The layout object list. <a href=\"#api-LayoutGroup-GetLayout\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"layouts\" : [\n        {\n            \"id\": 1,\n            \"name\": \"\",\n            \"type\": \"\",\n            \"group\": \"\",\n            \"bgAssetId\": null,\n            \"windowInfo\":[\n                {\n                    \"srcId\": 1,\n                    \"srcMap\": {\n                        \"x_ratio\": 1,\n                        \"y_ratio\": 1,\n                        \"w_ratio\": 1,\n                        \"h_ratio\": 1\n                    },\n                    \"location\": {\n                        \"z_order\": 1,\n                        \"x_ratio\": 1,\n                        \"y_ratio\": 1,\n                        \"w_ratio\": 1,\n                        \"h_ratio\": 1\n                    },\n                    \"border\": {\n                        \"left_ratio\": 0.02,\n                        \"right_ratio\": 0.02,\n                        \"top_ratio\": 0.02,\n                        \"bottom_ratio\": 0.02,\n                        \"colorR\": 100,\n                        \"colorG\": 100,\n                        \"colorB\": 100\n                    }\n                    // special case\n                    \"transparency\": {\n                        \"colorR_Low\": 0,\n                        \"colorR_High\": 50,\n                        \"colorG_Low\": 0,\n                        \"colorG_High\": 50,\n                        \"colorB_Low\": 0,\n                        \"colorB_High\": 50\n                    }\n                },\n                ...\n            ]\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/layouts/:id",
    "title": "03. Set Layout",
    "group": "LayoutGroup",
    "name": "SetLayout",
    "version": "0.0.0",
    "filename": "../resources/layout.py",
    "groupTitle": "Layout",
    "groupDescription": "<h4> Layout group APIs are for handling video layout configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The location layout of layout's range to the window's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings. <br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\":[\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/observer/layout",
    "title": "04. Get Layout",
    "group": "ObserverGroup",
    "name": "GetLayout",
    "version": "0.0.0",
    "filename": "../resources/observer.py",
    "groupTitle": "Observer",
    "groupDescription": "<h4> Observer group APIs are special purpose APIs, for handling Pad streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/observer/layout",
    "title": "05. Set Layout",
    "group": "ObserverGroup",
    "name": "SetLayout",
    "version": "0.0.0",
    "filename": "../resources/observer.py",
    "groupTitle": "Observer",
    "groupDescription": "<h4> Observer group APIs are special purpose APIs, for handling Pad streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The location layout of layout's range to the window's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings. <br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\":[\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/observer/start",
    "title": "02. Start Streaming",
    "group": "ObserverGroup",
    "name": "Start",
    "version": "0.0.0",
    "filename": "../resources/observer.py",
    "groupTitle": "Observer",
    "groupDescription": "<h4> Observer group APIs are special purpose APIs, for handling Pad streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/observer/status",
    "title": "01. Get Status",
    "group": "ObserverGroup",
    "name": "Status",
    "version": "0.0.0",
    "filename": "../resources/observer.py",
    "groupTitle": "Observer",
    "groupDescription": "<h4> Observer group APIs are special purpose APIs, for handling Pad streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "egnId",
            "description": "<p>The streaming engine ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"start\"",
              "\"stop\""
            ],
            "optional": false,
            "field": "egnStatus",
            "description": "<p>The streaming engine status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"egnId\"     : 1,\n    \"egnStatus\" : \"stop\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/observer/stop",
    "title": "03. Stop Streaming",
    "group": "ObserverGroup",
    "name": "Stop",
    "version": "0.0.0",
    "filename": "../resources/observer.py",
    "groupTitle": "Observer",
    "groupDescription": "<h4> Observer group APIs are special purpose APIs, for handling Pad streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/overlays/:id",
    "title": "02. Get Overlay",
    "group": "OverlayGroup",
    "name": "GetOverlay",
    "version": "0.0.0",
    "filename": "../resources/overlay.py",
    "groupTitle": "Overlay",
    "groupDescription": "<h4> Overlay group APIs are for handling overlay content configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.isVisible",
            "description": "<p>Text area is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.imgObj.isVisible",
            "description": "<p>Image is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/overlays",
    "title": "01. List All Overlays",
    "group": "OverlayGroup",
    "name": "GetOverlays",
    "version": "0.0.0",
    "filename": "../resources/overlay.py",
    "groupTitle": "Overlay",
    "groupDescription": "<h4> Overlay group APIs are for handling overlay content configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "overlays",
            "description": "<p>The overlay object list. <a href=\"#api-OverlayGroup-GetOverlay\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"overlays\" : [\n        {\n            \"id\": 1,\n            \"name\": \"Scene1\",\n            \"type\": \"overlay\",\n            \"group\": \"Scene1\",\n            \"assetIdArr\": [3,5],\n            \"assetConfig\" [\n                {\n                    \"qmlId\": 1,\n                    \"isVisible\": true,\n                    \"properties\":{\n                        \"z\":3,\n                        \"x\":0.2,\n                        \"y\":0.5,\n                        \"width\":0.2,\n                        \"height\":0.5,\n                        \"text\":\"Test String\",\n                        \"color\":\"#FF0000\",\n                        \"pixelSize\":0.3,\n                        \"family\":5,\n                        \"bold\":true,\n                        \"textColor\":\"#00FF00\",\n                        \"textOpacity\":0.1,\n                        \"textStyle\":0,\n                        \"textOutlineColor\":\"#0000FF\"\n                    }\n                },\n                {\n                    \"qmlId\": 2,\n                    \"isVisible\": true,\n                    \"properties\":{\n                        \"z\":3,\n                        \"x\":0.2,\n                        \"y\":0.5,\n                        \"width\":0.02,\n                        \"height\":0.06,\n                        \"source\":1,\n                        \"fillMode\":0\n                    }\n                }\n                ...\n            ]\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/overlays/:id",
    "title": "03. Set Overlay",
    "group": "OverlayGroup",
    "name": "SetOverlay",
    "version": "0.0.0",
    "filename": "../resources/overlay.py",
    "groupTitle": "Overlay",
    "groupDescription": "<h4> Overlay group APIs are for handling overlay content configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [1,3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.isVisible",
            "description": "<p>Text area is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.imgObj.isVisible",
            "description": "<p>Image is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/previewer/layout",
    "title": "03. Get Layout",
    "group": "PreviewerGroup",
    "name": "GetLayout",
    "version": "0.0.0",
    "filename": "../resources/previewer.py",
    "groupTitle": "Previewer",
    "groupDescription": "<h4> Previewer group APIs are special purpose APIs, for handling previews streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/previewer/overlay",
    "title": "01. Get Overlay",
    "group": "PreviewerGroup",
    "name": "GetOverlay",
    "version": "0.0.0",
    "filename": "../resources/previewer.py",
    "groupTitle": "Previewer",
    "groupDescription": "<h4> Previewer group APIs are special purpose APIs, for handling previews streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.isVisible",
            "description": "<p>Text area is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.imgObj.isVisible",
            "description": "<p>Image is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/previewer/layout",
    "title": "04. Set Layout",
    "group": "PreviewerGroup",
    "name": "SetLayout",
    "version": "0.0.0",
    "filename": "../resources/previewer.py",
    "groupTitle": "Previewer",
    "groupDescription": "<h4> Previewer group APIs are special purpose APIs, for handling previews streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The location layout of layout's range to the window's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings. <br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\":[\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/previewer/overlay",
    "title": "02. Set Overlay",
    "group": "PreviewerGroup",
    "name": "SetOverlay",
    "version": "0.0.0",
    "filename": "../resources/previewer.py",
    "groupTitle": "Previewer",
    "groupDescription": "<h4> Previewer group APIs are special purpose APIs, for handling previews streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [1,3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.isVisible",
            "description": "<p>Text area is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.imgObj.isVisible",
            "description": "<p>Image is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/scenes/:id/commit",
    "title": "04. Commint Setting",
    "group": "SceneGroup",
    "name": "CommintScene",
    "version": "0.0.0",
    "filename": "../resources/scene.py",
    "groupTitle": "Scene",
    "groupDescription": "<h4> Scene group APIs are for handling scene configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The scene's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "name",
            "description": "<p>The scene's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "overlayId",
            "description": "<p>Overlay config's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layoutId",
            "description": "<p>Layout config's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene 1\",\n    \"overlayId\": 1,\n    \"layoutId\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/scenes/:id",
    "title": "02. Get Scene",
    "group": "SceneGroup",
    "name": "GetScene",
    "version": "0.0.0",
    "filename": "../resources/scene.py",
    "groupTitle": "Scene",
    "groupDescription": "<h4> Scene group APIs are for handling scene configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The scene's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "name",
            "description": "<p>The scene's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "overlayId",
            "description": "<p>Overlay config's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layoutId",
            "description": "<p>Layout config's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene 1\",\n    \"overlayId\": 1,\n    \"layoutId\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/scenes",
    "title": "01. List All Scenes",
    "group": "SceneGroup",
    "name": "GetScenes",
    "version": "0.0.0",
    "filename": "../resources/scene.py",
    "groupTitle": "Scene",
    "groupDescription": "<h4> Scene group APIs are for handling scene configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "scenes",
            "description": "<p>The scene's object list. <a href=\"#api-SceneGroup-GetScene\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"scenes\" : [\n        {\n            \"id\": 1,\n            \"name\": \"Scene 1\",\n            \"overlayId\": 1,\n            \"layoutId\":1\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/scenes/:id/revoke",
    "title": "05. Revoke Setting",
    "group": "SceneGroup",
    "name": "RevokeScene",
    "version": "0.0.0",
    "filename": "../resources/scene.py",
    "groupTitle": "Scene",
    "groupDescription": "<h4> Scene group APIs are for handling scene configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The scene's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "name",
            "description": "<p>The scene's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "overlayId",
            "description": "<p>Overlay config's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layoutId",
            "description": "<p>Layout config's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene 1\",\n    \"overlayId\": 1,\n    \"layoutId\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/scenes/:id",
    "title": "03. Set Scene",
    "group": "SceneGroup",
    "name": "SetScene",
    "version": "0.0.0",
    "filename": "../resources/scene.py",
    "groupTitle": "Scene",
    "groupDescription": "<h4> Scene group APIs are for handling scene configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Scene's name.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "overlayId",
            "description": "<p>Overlay config's ID.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "layoutId",
            "description": "<p>Layout config's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"name\": \"Scene 1\",\n    \"overlayId\": 1,\n    \"layoutId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The scene's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "name",
            "description": "<p>The scene's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "overlayId",
            "description": "<p>Overlay config's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "layoutId",
            "description": "<p>Layout config's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene 1\",\n    \"overlayId\": 1,\n    \"layoutId\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/source",
    "title": "01. Get All",
    "group": "SourceGroup",
    "name": "GetAllSources",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "source",
            "description": "<p>Source data.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "source.video",
            "description": "<p>All video sources. <a href=\"#api-SourceGroup-GetVideoSourceList\"> &lt;more.&gt; </a></p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "source.audio",
            "description": "<p>All audio sources. <a href=\"#api-SourceGroup-GetAudioSourceList\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"source\": {\n        \"video\": [...],\n        \"audio\": [...]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/source/audio/:id",
    "title": "06. Get Audio",
    "group": "SourceGroup",
    "name": "GetAudioSource",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Audio Source's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"digital\"",
              "\"analog\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"capture\""
            ],
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The URI of source address. <br></p> <ul>     <li>         Read from device port, used address like         <code>             <br>\"port://audio/{parameter}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowVideo",
            "description": "<p>Is this audio follow the relative video to play ? <br> <code>If no relative video, then always is false.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "micGain",
            "description": "<p>The microphone gain value. <code>Unit is db * 100.</code> <br> <code>If not microphone, then always is 0.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "capability",
            "description": "<p>The microphone gain value setting scope and limit. <br> <code> If this is not microphone, then will not shown.</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 2,\n    \"type\": \"analog\"\n    \"name\": \"Mic. In\",\n    \"category\": \"capture\",\n    \"address\": \"port://audio/21\",\n    \"isFollowVideo\": false,\n    \"micGain\": 0,\n    // If this is microphone\n    \"capability\": {\n        \"gain\": {\n            \"max\": 3525,\n            \"min\": -1200,\n            \"step\": 75\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/source/audio",
    "title": "05. List All Audios",
    "group": "SourceGroup",
    "name": "GetAudioSourceList",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "audio",
            "description": "<p>Audio Source data list. <a href=\"#api-SourceGroup-GetAudioSource\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"audio\": [\n        {\n            \"id\": 1,\n            \"type\": \"analog\",\n            \"name\": \"Line-In\",\n            \"category\": \"capture\",\n            \"address\": \"port://audio/20\",\n            \"isFollowVideo\": false\n        },\n        {\n            \"id\": 2,\n            \"type\": \"analog\"\n            \"name\": \"Mic. In\",\n            \"category\": \"capture\",\n            \"address\": \"port://audio/21\",\n            \"isFollowVideo\": false,\n            \"micGain\": 0,\n            \"capability\": {\n                \"gain\": {\n                    \"max\": 3525,\n                    \"min\": -1200,\n                    \"step\": 75\n                }\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/source/video/:id",
    "title": "04. Get Video",
    "group": "SourceGroup",
    "name": "GetVideoSource",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The source's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"video\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"capture\""
            ],
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The URI of source address. <br></p> <ul>     <li>         Read from device port, used address like         <code>             <br>\"port://video/{parameter}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isEditable",
            "description": "<p>Is this config editable ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isForPad",
            "description": "<p>Is this config used for Pad's layout settings ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isForPgm",
            "description": "<p>Is this config used for Program's layout settings ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isForPrv",
            "description": "<p>Is this config used for Preview's layout settings ?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "snapshot",
            "description": "<p>This video snapshot download path. <br> <code> If snapshot not exist, then will not shown.</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"HDMI1\",\n    \"type\": \"capture\",\n    \"category\": \"capture\",\n    \"address\": \"port://video/0\",\n    \"isEditable\": true,\n    \"isForPad\": false,\n    \"isForPgm\": false,\n    \"isForPrv\": false,\n    // If snapshot exist.\n    \"snapshot\": \"http://127.0.0.1/static/snapshots/snapshot0.png\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/source/video",
    "title": "03. List All Videos",
    "group": "SourceGroup",
    "name": "GetVideoSourceList",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "video",
            "description": "<p>Video Source data list. <a href=\"#api-SourceGroup-GetVideoSource\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"video\": [\n        {\n            \"id\": 1,\n            \"name\": \"HDMI1\",\n            \"type\": \"video\",\n            \"category\": \"capture\",\n            \"address\": \"port://video/0\",\n            \"isEditable\": true,\n            \"isForPad\": false,\n            \"isForPgm\": false,\n            \"isForPrv\": false,\n            \"snapshot\": \"http://127.0.0.1/static/snapshots/snapshot0.png\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/source/video/:id",
    "title": "07. Set Audio",
    "group": "SourceGroup",
    "name": "SetAudioSource",
    "version": "0.0.0",
    "filename": "../resources/source.py",
    "groupTitle": "Source",
    "groupDescription": "<h4> Source group APIs are for handling video's and audio's source configuration management. </h4><br> P.S.<br> The name of video are fixed in { <code>\"HDMI1 Video\"</code>, <code>\"HDMI2 Video\"</code>, <code>\"WriteBack\"</code>, <code>\"Preview\"</code> } <br> The name of audio are fixed in { <code>\"Line-In\"</code>, <code>\"Mic. In\"</code>, <code>\"HDMI2 Audio\"</code>, <code>\"HDMI1 Audio\"</code> }",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowVideo",
            "description": "<p>Is this audio follow the relative video to play ?</p>"
          },
          {
            "group": "Request",
            "type": "Intger",
            "optional": false,
            "field": "micGain",
            "description": "<p>The microphone gain value. <code>Unit is db * 100.</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"isFollowVideo\": false,\n    \"micGain\": 0,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Audio Source's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"digital\"",
              "\"analog\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"capture\""
            ],
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>The URI of source address. <br></p> <ul>     <li>         Read from device port, used address like         <code>             <br>\"port://audio/{parameter}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowVideo",
            "description": "<p>Is this audio follow the relative video to play ? <br> <code>If no relative video, then always is false.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "micGain",
            "description": "<p>The microphone gain value. <code>Unit is db * 100.</code> <br> <code>If not microphone, then always is 0.</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "capability",
            "description": "<p>The microphone gain value setting scope and limit. <br> <code> If this is not microphone, then will not shown.</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 2,\n    \"type\": \"analog\"\n    \"name\": \"Mic. In\",\n    \"category\": \"capture\",\n    \"address\": \"port://audio/21\",\n    \"isFollowVideo\": false,\n    \"micGain\": 0,\n    // If this is microphone\n    \"capability\": {\n        \"gain\": {\n            \"max\": 3525,\n            \"min\": -1200,\n            \"step\": 75\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/streams",
    "title": "02. Add Stream",
    "group": "StreamGroup",
    "name": "AddStream",
    "version": "0.0.0",
    "filename": "../resources/stream.py",
    "groupTitle": "Stream",
    "groupDescription": "<h4> Stream group APIs are for handling video and audio stream out configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The source's name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>The URI of source destination. <br></p> <ul>     <li>         Read from network, used destination like         <code>             <br>\"rtp://{source path}\"             <br>\"rtmp://{source path}\"         </code>     </li> </ul>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>The authentication content.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>Is enabled this setting or not ?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Streaming\",\n    \"type\": \"video\",\n    \"category\": \"\",\n    \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n    \"authentication\": \"\",\n    \"isEnabled\": true,\n    \"channelId\": 2,\n    \"videoCodecId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Stream's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>The URI of source destination. <br></p> <ul>     <li>         Read from network, used destination like         <code>             <br>\"rtp://{source path}\"             <br>\"rtmp://{source path}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>The authentication content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>Is enabled this setting or not ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videoCodecId",
            "description": "<p>The videoCodec's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Streaming\",\n    \"type\": \"video\",\n    \"category\": \"\",\n    \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n    \"authentication\": \"\",\n    \"isEnabled\": true,\n    \"channelId\": 2,\n    \"videoCodecId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streams/:id",
    "title": "03. Get Stream",
    "group": "StreamGroup",
    "name": "GetStream",
    "version": "0.0.0",
    "filename": "../resources/stream.py",
    "groupTitle": "Stream",
    "groupDescription": "<h4> Stream group APIs are for handling video and audio stream out configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Stream's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>The URI of source destination. <br></p> <ul>     <li>         Read from network, used destination like         <code>             <br>\"rtp://{source path}\"             <br>\"rtmp://{source path}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>The authentication content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>Is enabled this setting or not ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videoCodecId",
            "description": "<p>The videoCodec's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Streaming\",\n    \"type\": \"video\",\n    \"category\": \"\",\n    \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n    \"authentication\": \"\",\n    \"isEnabled\": true,\n    \"channelId\": 2,\n    \"videoCodecId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streams",
    "title": "01. List All Streams",
    "group": "StreamGroup",
    "name": "GetStreamList",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access rights needed.",
        "description": "<p>Must at least has high level permission be able to access this.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "../resources/stream.py",
    "groupTitle": "Stream",
    "groupDescription": "<h4> Stream group APIs are for handling video and audio stream out configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Stream data list. <a href=\"#api-StreamGroup-GetStream\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"streams\": [\n        {\n            \"id\": 1,\n            \"name\": \"Streaming\",\n            \"type\": \"video\",\n            \"category\": \"\",\n            \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n            \"authentication\": \"\",\n            \"isEnabled\": true,\n            \"channelId\": 2,\n            \"videoCodecId\": 1\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/streams/:id",
    "title": "04. Set Stream",
    "group": "StreamGroup",
    "name": "SetStream",
    "version": "0.0.0",
    "filename": "../resources/stream.py",
    "groupTitle": "Stream",
    "groupDescription": "<h4> Stream group APIs are for handling video and audio stream out configuration management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ],
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The source's name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>The URI of source destination. <br></p> <ul>     <li>         Read from network, used destination like         <code>             <br>\"rtp://{source path}\"             <br>\"rtmp://{source path}\"         </code>     </li> </ul>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>The authentication content.</p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>Is enabled this setting or not ?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Streaming\",\n    \"type\": \"video\",\n    \"category\": \"\",\n    \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n    \"authentication\": \"\",\n    \"isEnabled\": true,\n    \"channelId\": 2,\n    \"videoCodecId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Stream's name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of source type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category of source come from where.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>The URI of source destination. <br></p> <ul>     <li>         Read from network, used destination like         <code>             <br>\"rtp://{source path}\"             <br>\"rtmp://{source path}\"         </code>     </li> </ul>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>The authentication content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isEnabled",
            "description": "<p>Is enabled this setting or not ?</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videoCodecId",
            "description": "<p>The videoCodec's ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Streaming\",\n    \"type\": \"video\",\n    \"category\": \"\",\n    \"destination\": \"rtmp://a.rtmp.youtube.com/live2\",\n    \"authentication\": \"\",\n    \"isEnabled\": true,\n    \"channelId\": 2,\n    \"videoCodecId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streamer/layout",
    "title": "10. Get Layout",
    "group": "StreamerGroup",
    "name": "GetLayout",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streamer/overlay",
    "title": "08. Get Overlay",
    "group": "StreamerGroup",
    "name": "GetOverlay",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "overlays",
            "description": "<p>The overlay object list. <a href=\"#api-OverlayGroup-GetOverlay\"> &lt;more.&gt; </a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"overlays\" : [\n        {\n            \"id\": 1,\n            \"name\": \"Scene1\",\n            \"type\": \"overlay\",\n            \"group\": \"Scene1\",\n            \"assetIdArr\": [3,5],\n            \"assetConfig\" [\n                {\n                    \"qmlId\": 1,\n                    \"isVisible\": true,\n                    \"properties\":{\n                        \"z\":3,\n                        \"x\":0.2,\n                        \"y\":0.5,\n                        \"width\":0.2,\n                        \"height\":0.5,\n                        \"text\":\"Test String\",\n                        \"color\":\"#FF0000\",\n                        \"pixelSize\":0.3,\n                        \"family\":5,\n                        \"bold\":true,\n                        \"textColor\":\"#00FF00\",\n                        \"textOpacity\":0.1,\n                        \"textStyle\":0,\n                        \"textOutlineColor\":\"#0000FF\"\n                    }\n                },\n                {\n                    \"qmlId\": 2,\n                    \"isVisible\": true,\n                    \"properties\":{\n                        \"z\":3,\n                        \"x\":0.2,\n                        \"y\":0.5,\n                        \"width\":0.02,\n                        \"height\":0.06,\n                        \"source\":1,\n                        \"fillMode\":0\n                    }\n                }\n                ...\n            ]\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streamer/transition",
    "title": "06. Get Transition Info",
    "group": "StreamerGroup",
    "name": "GetTransition",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "allowedValues": [
              "-1",
              "1"
            ],
            "optional": false,
            "field": "direction",
            "description": "<p>Spectial value, represent change direction.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "position",
            "description": "<p>Special value, represent absolute position.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"direction\": -1,\n    \"position\": 100\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streamer/transparency",
    "title": "14. Get Transparency Status",
    "group": "StreamerGroup",
    "name": "GetTransparency",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isInTransparencyMode",
            "description": "<p>It represent is in transparency mode or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"isInTransparencyMode\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/streamer/pause",
    "title": "04. Pause Streaming",
    "group": "StreamerGroup",
    "name": "Pause",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/streamer/resume",
    "title": "05. Resume Streaming",
    "group": "StreamerGroup",
    "name": "Resume",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/streamer/layout",
    "title": "11. Set Layout",
    "group": "StreamerGroup",
    "name": "SetLayout",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Request",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Request",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Request",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The location layout of layout's range to the window's bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Request",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings. <br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\":[\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The layout name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The layout type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The layout group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "bgAssetId",
            "description": "<p>The background asset's data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "windowInfo",
            "description": "<p>The layout setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj",
            "description": "<p>Layout layout description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.srcId",
            "description": "<p>Source's data index number. <code>Only can use hardware source</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "windowInfo.obj.altPort",
            "description": "<p>Apply alternative source. false : use A, ture : use B</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.srcMap",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.srcMap.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by source's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.location",
            "description": "<p>The mapping layout of source's range to the layout's bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.location.z_order",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.x_ratio",
            "description": "<p>X coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.y_ratio",
            "description": "<p>Y coordinate ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.w_ratio",
            "description": "<p>Width ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.location.h_ratio",
            "description": "<p>Height ratio value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.border",
            "description": "<p>The location layout border.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "windowInfo.obj.border.left_ratio",
            "description": "<p>Left border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.right_ratio",
            "description": "<p>Right border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.top_ratio",
            "description": "<p>Top border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "windowInfo.obj.border.bottom_ratio",
            "description": "<p>Bottom border width setting, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorR",
            "description": "<p>RGB color value setting, this represent R color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorG",
            "description": "<p>RGB color value setting, this represent G color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.border.colorB",
            "description": "<p>RGB color value setting, this represent B color.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "windowInfo.obj.transparency",
            "description": "<p>The special case used settings.<br> <code> Cannot used with border settings, and only can use SrcId = 1 or 2, and location.z_order must be minimum </code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_Low",
            "description": "<p>Color key value setting, this represent R color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorR_High",
            "description": "<p>Color key value setting, this represent R color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_Low",
            "description": "<p>Color key value setting, this represent G color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorG_High",
            "description": "<p>Color key value setting, this represent G color upper bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_Low",
            "description": "<p>Color key value setting, this represent B color lower bound.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-255",
            "optional": false,
            "field": "windowInfo.obj.transparency.colorB_High",
            "description": "<p>Color key value setting, this represent B color upper bound.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"\",\n    \"type\": \"\",\n    \"group\": \"\",\n    \"bgAssetId\": null,\n    \"windowInfo\": [\n        {\n            \"srcId\": 1,\n            \"altPort\": false,\n            \"srcMap\": {\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"location\": {\n                \"z_order\": 1,\n                \"x_ratio\": 1,\n                \"y_ratio\": 1,\n                \"w_ratio\": 1,\n                \"h_ratio\": 1\n            },\n            \"border\": {\n                \"left_ratio\": 0.02,\n                \"right_ratio\": 0.02,\n                \"top_ratio\": 0.02,\n                \"bottom_ratio\": 0.02,\n                \"colorR\": 100,\n                \"colorG\": 100,\n                \"colorB\": 100\n            }\n            // special case\n            \"transparency\": {\n                \"colorR_Low\": 0,\n                \"colorR_High\": 50,\n                \"colorG_Low\": 0,\n                \"colorG_High\": 50,\n                \"colorB_Low\": 0,\n                \"colorB_High\": 50\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/api/v1.0/streamer/overlay",
    "title": "09. Set Overlay",
    "group": "StreamerGroup",
    "name": "SetOverlay",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "URL": [
          {
            "group": "URL",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Access data index number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The unique index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The overlay name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The overlay type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group",
            "description": "<p>The overlay group.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer[]",
            "optional": false,
            "field": "assetIdArr",
            "description": "<p>The <b>assetConfig</b> used asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "assetConfig",
            "description": "<p>The overlay setting, and it structed by JSON format.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj",
            "description": "<p>Text area overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.qmlId",
            "description": "<p>Text area qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.isVisible",
            "description": "<p>Text area is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.txtObj.properties",
            "description": "<p>Text qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.txtObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.color",
            "description": "<p>Text area color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.text",
            "description": "<p>Text content.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.txtObj.properties.pixelSize",
            "description": "<p>Text pixel size value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.family",
            "description": "<p>Font style file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.txtObj.properties.bold",
            "description": "<p>Bold font or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textColor",
            "description": "<p>Font color setting. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-3",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textStyle",
            "description": "<p>Font style with enumeration.<br> { <br>      Text.Normal, <br>      Text.Outline, <br>      Text.Raised, <br>      Text.Sunken <br> }</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.txtObj.properties.textOutlineColor",
            "description": "<p>Outline color of font. Used in hexadecimal colors. <br> Like &quot;#FF0000&quot; or &quot;#800000FF&quot;. It mean <code>RGB</code> or <code>ARGB</code> settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj",
            "description": "<p>Image overlay object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.qmlId",
            "description": "<p>Image qml asset's ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "assetConfig.imgObj.isVisible",
            "description": "<p>Image is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assetConfig.imgObj.properties",
            "description": "<p>Image qml properties object definition.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "assetConfig.imgObj.properties.z",
            "defaultValue": "0\n",
            "description": "<p>Z coordinate order value, and minimum value mean it on the bottom of layer order.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.x",
            "description": "<p>X coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.y",
            "description": "<p>Y coordinate value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.width",
            "description": "<p>Width value, but it is a ratio value in 0 ~ 1 relative by bound's <code>width</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "size": "0-1",
            "optional": false,
            "field": "assetConfig.imgObj.properties.height",
            "description": "<p>Height value, but it is a ratio value in 0 ~ 1 relative by bound's <code>height</code>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assetConfig.imgObj.properties.source",
            "description": "<p>Image file name, and it must in the asset table.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "size": "0-6",
            "optional": false,
            "field": "assetConfig.imgObj.properties.fillMode",
            "description": "<p>Image fill mode with enumeration. <br> { <br>      Image.Stretch - the image is scaled to fit, <br>      Image.PreserveAspectFit - the image is scaled uniformly to fit without cropping, <br>      Image.PreserveAspectCrop - the image is scaled uniformly to fill, cropping if necessary, <br>      Image.Tile - the image is duplicated horizontally and vertically, <br>      Image.TileVertically - the image is stretched horizontally and tiled vertically, <br>      Image.TileHorizontally - the image is stretched vertically and tiled horizontally, <br>      Image.Pad - the image is not transformed <br> }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"id\": 1,\n    \"name\": \"Scene1\",\n    \"type\": \"overlay\",\n    \"group\": \"Scene1\",\n    \"assetIdArr\": [3,5],\n    \"assetConfig\" [\n        {\n            \"qmlId\": 1,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.2,\n                \"height\":0.5,\n                \"text\":\"Test String\",\n                \"color\":\"#FF0000\",\n                \"pixelSize\":0.3,\n                \"family\":5,\n                \"bold\":true,\n                \"textStyle\":0,\n                \"textColor\":\"#00FF00\",\n                \"textOutlineColor\":\"#0000FF\"\n            }\n        },\n        {\n            \"qmlId\": 2,\n            \"isVisible\": true,\n            \"properties\":{\n                \"z\":3,\n                \"x\":0.2,\n                \"y\":0.5,\n                \"width\":0.02,\n                \"height\":0.06,\n                \"source\":1,\n                \"fillMode\":0\n            }\n        }\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/streamer/start",
    "title": "02. Start Streaming",
    "group": "StreamerGroup",
    "name": "Start",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/streamer/transition",
    "title": "07. Start Transition",
    "group": "StreamerGroup",
    "name": "StartTransition",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Request": [
          {
            "group": "Request",
            "type": "String",
            "allowedValues": [
              "\"cut\"",
              "\"auto\"",
              "\"manual\""
            ],
            "optional": false,
            "field": "mode",
            "description": "<p>Transition mode defined.</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "optional": true,
            "field": "duration",
            "description": "<p>Special value, represent position change duration, when <b>mode</b> == <code>&quot;auto&quot;</code>, and it defined in millisecond</p>"
          },
          {
            "group": "Request",
            "type": "Integer",
            "size": "0-255",
            "optional": true,
            "field": "position",
            "description": "<p>Special value, represent absolute position, when <b>mode</b> == <code>&quot;manual&quot;</code>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "{\n    \"mode\": \"auto\",\n    \"duration\": 500\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/v1.0/streamer/status",
    "title": "01. Get Status",
    "group": "StreamerGroup",
    "name": "Status",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "egnId",
            "description": "<p>The streaming engine ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"start\"",
              "\"stop\""
            ],
            "optional": false,
            "field": "egnStatus",
            "description": "<p>The streaming engine status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stream",
            "description": "<p>The streaming task information list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stream.obj",
            "description": "<p>The streaming information object.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stream.obj.id",
            "description": "<p>The stream data index number.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stream.obj.name",
            "description": "<p>The stream data name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Intger",
            "optional": false,
            "field": "stream.obj.bitrate",
            "description": "<p>The streaming bitrate.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stream.obj.statusIdx",
            "description": "<p>Streaming status index number. <br> <code> 0 : &quot;streaming&quot;<br> 1 : &quot;connecting cdn&quot;<br> 2 : &quot;connect cdn success&quot;<br> 3 : &quot;connect cdn fail&quot;<br> 4 : &quot;disconnect cdn&quot; </code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stream.obj.statusMsg",
            "description": "<p>Streaming status description messages. <br> <code> 0 : &quot;streaming&quot;<br> 1 : &quot;connecting cdn&quot;<br> 2 : &quot;connect cdn success&quot;<br> 3 : &quot;connect cdn fail&quot;<br> 4 : &quot;disconnect cdn&quot; </code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 200",
          "content": "{\n    \"egnId\": 1,\n    \"egnStatus\": \"stop\",\n    \"stream\": [\n        {\n            \"id\": 2,\n            \"name\": \"youtube\",\n            \"bitrate\": 0,\n            \"statusIdx\": 4,\n            \"statusMsg\": \"disconnect cdn\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/v1.0/streamer/stop",
    "title": "03. Stop Streaming",
    "group": "StreamerGroup",
    "name": "Stop",
    "version": "0.0.0",
    "filename": "../resources/streamer.py",
    "groupTitle": "Streamer",
    "groupDescription": "<h4> Streamer group APIs are special purpose APIs, for handling programs streaming control management. </h4>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The special credential value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Header",
          "content": "Authorization:  {credential}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Internal server error occur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response 500",
          "content": "{\n    \"code\": 50000,\n    \"message\": \"System error.\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
