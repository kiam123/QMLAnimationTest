# UC9020 SocketIO Events (Draft)

#### This document describes available SocketIO events.

## History

| Version   | Date        | Description
|-----------|-------------|----------------------------------------------
| 0.0.0     | 2018-11-06  | **Add Category :** <br> *Audio*, *Channel*
| 0.0.1     | 2018-11-23  | **Add Category :** <br> *Streamer*, *Source*
| 0.0.2     | 2018-12-20  | **Add Category :** <br> *Config*<br>**Modify :** <br>*Audio* - /audio/input<br>*Audio* - /audio/output
| 0.0.3     | 2019-01-10  | **Add :** <br>*Audio* - /audio/level
| 0.0.4     | 2019-02-26  | **Remove :** <br>*Audio* - /audio/input/level <br>*Audio* - /audio/output/level <br> **Add :** <br>*Source* - /source/video <br>**Add Category :** <br>*Asset*, *Overlay*, *Layout*, *Scene*, <br>*Codec*, *Stream*, *Network*, *Profile*
||| **Integrate to Web API Docs**


## Usage

SocketIO Connected Path : `http://{device_address}`

## Supported method category
 * [Config](#config)
    * demo mode


## Supported events category

 * [Profile](#profile)
    * /profile

 * [Network](#network)
    * /network/interfaces
    * /network/dns

 * [Audio](#audio)
    * /audio/level
    * /audio/input
    * /audio/output

 * [Streamer](#streamer)
    * /streamer/status
    * /streamer/transition

 * [Source](#source)
    * /source/video
    * /source/audio

 * [Asset](#asset)
    * /assets/upload
    * /assets/remove
    * /assets/pause_screen

 * [Overlay](#overlay)
    * /overlays

 * [Layout](#layout)
    * /layouts

 * [Scene](#scene)
    * /scenes

 * [Channel](#channel)
    * /channels

 * [Codec](#codec)
    * /codec/video
    * /codec/audio

 * [Stream](#stream)
    * /streams
    * /streams/remove

--------------------

### Config
*Method :* `demo_mode`

*Send Data :*
```json
{
    "enable": ture
}
```

*Description :*

To change `/audio/level` to emit demo information.


--------------------

### Profile

*Event :* `/profile`

*Data :*
```json
{
    "name": "Default Profile"
}
```


[`Top`](#supported-events-category)
### Network

*Event :* `/network/interfaces`

*Data :*
```json
{
    "id": "eth0",
    "sender": "web",
    "macAddr": "02:3a:00:3a:20:0a",
    "ip4Mask": "255.255.254.0",
    "ip4Addr": "10.3.56.201",
    "ip4Gateway": "10.3.57.254",
    "ip6Addr": "fe80::3a:ff:fe3a:200a",
    "ip6Mask": "64",
    "ip6Gateway": "",
    "mode": {
        "valid": [
            0,
            1,
            2,
            3,
            4
        ],
        "value": 0
    }
}
```


*Event :* `/network/dns`

*Data :*
```json
{
    "sender": "web",
    "mode": {
        "valid": [
            0,
            1
        ],
        "value": 0
    },
    "servers": [
        "10.0.1.7",
        "10.0.1.6"
    ]
}
```


[`Top`](#supported-events-category)
### Audio

*Event :* `/audio/level`

*Data :*
```json
{
    "count": 5,
    "period": 1000,
    "data": [
        {
            "input": [
                {
                    "L": -8000,
                    "R": -8000,
                    "id": 4,
                    "name": "HDMI1 Audio"
                },
                {
                    "L": -8000,
                    "R": -8000,
                    "id": 3,
                    "name": "HDMI2 Audio"
                },
                {
                    "L": -8000,
                    "R": -8000,
                    "id": 2,
                    "name": "Mic. In"
                },
                {
                    "L": -8000,
                    "R": -8000,
                    "id": 1,
                    "name": "Line-In"
                }
            ],
            "output": [
                {
                    "L": -8000,
                    "R": -8000,
                    "id": 3,
                    "name": "Stream Out Audio"
                }
            ]
        },
        ...
    ]
}
```


*Event :* `/audio/input`

*Data :*
```json
{
    "id": 1,
    "sender": "web",
    "name": "Line-In",
    "type": "analog",
    "pan": 100,
    "gain": 100,
    "isMute": true,
    "capability": {
        "gain": {
            "max": 2000,
            "min": -8000,
            "step": 50
        },
        "pan": {
            "max": 10000,
            "min": -10000,
            "step": 100
        }
    }
}
```


*Event :* `/audio/output`

*Data :*
```json
{
    "id": 1,
    "sender": "web",
    "name": "Line-Out",
    "type": "analog",
    "pan": 100,
    "gain": 100,
    "isMute": true,
    "capability": {
        "gain": {
            "max": 2000,
            "min": -8000,
            "step": 50
        },
        "pan": {
            "max": 10000,
            "min": -10000,
            "step": 100
        }
    }
}
```


[`Top`](#supported-events-category)
### Streamer

*Event :* `/streamer/status`

*Data :*
```json
{
  "egnId": 1,
  "egnStatus": "start",
  "time": 0,
  "stream": [
    {
      "id": 2,
      "name": "youtube",
      "bitrate": 0,
      "statusIdx": 4,
      "statusMsg": "disconnect cdn"
    },
    {
      "id": 3,
      "name": "facebook",
      "bitrate": 0,
      "statusIdx": 0,
      "statusMsg": "disconnect cdn"
    }
  ]
}
```


*Event :* `/streamer/transition`

*Data :*
```json
{
    "direction": 1,
    "position": 255
}
```

[`Top`](#supported-events-category)
### Source

*Event :* `/source/video`

*Data :*
```json
{
    "id": 1,
    "type": "video",
    "name": "HDMI1 Video",
    "address": "port://video/1/1",
    "category": "capture",
    "isEditable": false,
    "isForPad": true,
    "isForPgm": true,
    "isForPrv": true
}
```


*Event :* `/source/audio`

*Data :*
```json
{
    "id": 2,
    "name": "Mic. In",
    "type": "analog",
    "category": "capture",
    "address": "port://audio/22",
    "micGain": 0,
    "isFollowVideo": false
}
```

[`Top`](#supported-events-category)
### Asset

*Event :* `/assets/upload`

*Data :*
```json
{
    "id": 1,
    "name": "html-css-js.png",
    "type": "image",
    "fileName": "html-css-js.png",
    "datetime": "2000-01-01T02:30:32Z",
    "md5": "abbe3147e4cf21a2bbb98f1cf1fb39d5",
    "sender": "web"
}
```

*Event :* `/assets/remove`

*Data :*
```json
{
    "id": [1,2,3],
    "sender": "web"
}
```

*Event :* `/assets/pause_screen`

*Data :*
```json
{
    "isUseColor": true,
    "color": "#FF000000",
    "name": "html-css-js.png",
    "sender": "web"
}
```

[`Top`](#supported-events-category)
### Overlay

*Event :* `/overlays`

*Data :*
```json
{
    "id": 1,
    "group": "",
    "type": "",
    "name": "Overlay 1",
    "assetIdArr": [
        2,
        3
    ],
    "assetConfig": [
        {
            "qmlId": 2,
            "properties": {
                "width": 0.17000000000000001,
                "height": 0.12,
                "source": 3,
                "fillMode": 1,
                "y": 0,
                "x": 0.41499999999999998,
                "z": 1
            },
            "isVisible": true
        }
    ],
    "sender": "web"
}
```

[`Top`](#supported-events-category)
### Layout

*Event :* `/layouts`

*Data :*
```json
{
    "id": 1,
    "type": "other",
    "group": "",
    "name": "Layout 1",
    "isUseColor": true,
    "bgAssetId": null,
    "bgColor": "#000000",
    "windowInfo": [
        {
            "renderMode": "manual",
            "srcId": 1,
            "location": {
                "w_ratio": 1,
                "z_order": 1,
                "y_ratio": 0,
                "h_ratio": 1,
                "x_ratio": 0
            },
            "srcMap": {
                "w_ratio": 1,
                "y_ratio": 0,
                "h_ratio": 1,
                "x_ratio": 0
            }
        }
    ],
    "sender": "web"
}
```

[`Top`](#supported-events-category)
### Scene

*Event :* `/scenes`

*Data :*
```json
{
    "id": 1,
    "name": "Scene 1",
    "layoutId": 1,
    "overlayId": 1,
    "sender": "web"
}
```

[`Top`](#supported-events-category)
### Channel

*Event :* `/channels`

*Data :*
```json
{
    "id": 1,
    "name": "Preview",
    "sceneId": 1
}
```

[`Top`](#supported-events-category)
### Codec

*Event :* `/codec/video`

*Data :*
```json
{
    "id": 1,
    "level": 40,
    "name": "Stream Out Codec",
    "profile": "baseline",
    "rateControl": "CBR",
    "format": "H264",
    "bitrate": 4096,
    "keyframes": 16,
    "frameRate": 30,
    "resolutionIdx": 0,
    "resolutionRef": [],
    "quality": "quality",
    "qualityRef": [],
    "sender": "web"
}
```

*Event :* `/codec/audio`

*Data :*
```json
{
    "id": 1,
    "delay": 0,
    "format": "AAC",
    "bitrate": 128,
    "rateControl": "CBR",
    "samplerate": 48000,
    "sender": "web"
}
```

[`Top`](#supported-events-category)
### Stream

*Event :* `/streams`

*Data :*
```json
{
    "id": 2,
    "type": "",
    "category": "",
    "name": "Youtube Test1",
    "channelId": 2,
    "authentication": "uwxj-uqh1-dj0w-434g",
    "destination": "rtmp://x.rtmp.youtube.com/live2",
    "audioCodecId": 1,
    "videoCodecId": 1,
    "isEnabled": false,
    "sender": "web"
}
```

*Event :* `/streams/remove`

*Data :*
```json
{
    "id": 1,
    "sender": "web"
}
```

[`Top`](#supported-events-category)
