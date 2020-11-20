# **Video Engine Controller - Application DBus API** #



**History**

| version | date         | description                                  |
|---------|--------------|----------------------------------------------|
| 1.0     | 2018 Aug. 16 | Initial version                              |
|         |              | Add Echo channel                             |
|         | 2018 Oct. 18 | Add Background Color Support                 |
|         | 	         | Change auto alpha mode from step to time     |
|         |              | Add keep layout capabilities                 |
| 1.1     | 2018 Dec. 13 | Add draw colored area capabilities           |
| 1.2     | 2019 Jan. 19 | Add ABPortImage capabilities                 |
| 1.3     | 2019 Jun.  3 | Add pause and resume virtual channels        |
| 1.4     | 2019 Oct. 22 | Add supported video output resolution        |

* * * * *
## [System Controller DBus API](#video-engine-controller-dbus-api)

* [1. Keepalive Functions](#1-keepalive-functions)

* [2. System Event](#2-system-event)

* * * * *

### **1. Keepalive Functions** ###

**Method: SetKeepalive**

Brief: Set keepalive setting to system

Input:
```json
{
    "Action" : "on",
	"Time" : 15,
}
```
| value                    | type                     | note                                                        |
|--------------------------|--------------------------|-------------------------------------------------------------|
| Action              	   | string                   | "on"\|"off", "on": start keepalive, "off": stop keepalive.  |
| Time                     | int                      | unit: second, keepalive time.                               |

Return:
```json
{
    "result" : true,
    "error" : "",
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false	         |
| error                    | string                   | Error message            |

error:
	"MSG_JSONFAIL"	: parse jason string fail.
	"MSG_INVALID" 	: set invalid parameter.

**Method: GetKeepalive**

Brief: Get keepalive setting from system

Input:
```<none>
```

Return:
```json
{
    "result" : true,
	"error" : "",
	"Action" : "on",
    "Time" : 15,
}
```

| value                    | type                     | note                                                     |
|--------------------------|--------------------------|----------------------------------------------------------|
| result                   | bool                     | true\|false                                              |
| error                    | string                   | Error message                                            |
| Action                   | string                   | "on"\|"off", "on": start keepalive, "off": stop keepalive.  |
| Time                     | int                      | unit: second, keepalive time.                            |

### **2. System Event** ###

**Signal: SystemEvent**
Brief: system event
Result:
```json
{
	"EventMsg" : "system keepalive",
	"EventId" : 0
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| EventMsg             	   | string                   | "system keepalive"       |
| EventId                  | int                      | event id                 |

**EVENT: system event id table**

| event message                         | event id number          | note                     |
|---------------------------------------|--------------------------|--------------------------|
| "system keepalive"                    | 0                        |                          |


* * * * *
## [Video Engine Controller DBus API](#video-engine-controller-dbus-api)


* [1. Video Input Functions](#1-video-input-functions)

* [2. Virtual Video Input Functions](#2-virtual-video-input-functions)

* [3. Streaming Video Input Functions](#3-streaming-video-input-functions)

* [4. Video Output Functions](#4-video-output-functions)

* [5. Video Route Functions](#5-video-route-functions)

* [6. Video Event](#6-video-event)

* [7. Streaming Video Output Functions](#7-streaming-video-output-functions)

* [8. Video System Functions](#8-video-system-functions)
* * * * *
### **1. Video Input Functions** ###

**Method: GetVinInfo**

Brief: Get video input information, include video input capture device, streaming, virtual channel, write back, ...

Input:
```<none>
```

Return:
```json
{
    "result" : true,
	"error" : "",
	"VinNum" : 6,
    "VinInfo" : [
	    {"VinIndex" : 0, "Type" : "Capture","Name" : "capture0"},
	    {"VinIndex" : 1, "Type" : "Capture","Name" : "capture1"},
	    {"VinIndex" : 2, "Type" : "WriteBack","Name" : "write back0"},
	    {"VinIndex" : 3, "Type" : "VirtualChannel","Name" : "vch-2d0:preview"},
	    {"VinIndex" : 4, "Type" : "VirtualChannel", "Name" : "vch-2d0:program"},
	    {"VinIndex" : 5, "Type" : "VirtualChannel", "Name" : "vch-vpe0:ipad"}
    ]
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false              |
| error                    | string                   | Error message            |
| VinNum                   | int                      | Number of Vin  	         |
| VinInfo                  | array                    | Array of Vin information |
| VinIndex                 | int                      | Vin Index                |
| Type                     | string                   |"Capture"\|"Streaming"\|"VirtualChannel"\|"WriteBack" |
| Name                     | string                   | video input name         |

**Method: GetVinEgnInfo**

Brief: Get Vin Engine Information

Input:
	```<none>
	```
Return:

```json
{
    "result" : true,
    "error" : "",
    "VinEgnNum" : 2,
    "VinEgn" : [
	    { "VinEgnIndex":0,"Type":"Capture","Name":"capture0","VinSrcNum":1, "CurrVinSrcIndex":0, "Format":"YUYV"},
	    { "VinEgnIndex":1,"Type":"Capture","Name":"capture1","VinSrcNum":2, "CurrVinSrcIndex":0, "Format":"YUYV"}
	]
}
```

| value                    | type                     | note                            |
|--------------------------|--------------------------|---------------------------------|
| result                   | bool                     | true\|false                     |
| error                    | string                   | Error message                   |
| VinEgnNum                | int                      | Number of Video capture engine 	|
| VinEgn                   | Array                    | Array of Vin Engine Information |
| VinEgnIndex              | int                      | Vin engine index number         |
| Type                     | string                   | "Capture"                       |
| Name                     | string                   | video input name                |
| VinSrcNum                | int                      | Number of vin source            |
| CurrVinSrcIndex          | int                      | current vin source index        |
| Format           	   | string                   | "YUYV"\|"NV12"\|"RG24"\|"RG32" 	|

**Method: GetVinSrcInfo**

Brief: Get Vin Source Information from Vin Engine

Input:
```json
{
    "VinEgnIndex" : 0
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VinEgnIndex              | int                      | Vin Engine Index                |

Return:
```json
{
    "result" : true,
    "error" : "",
	"IsSupportAutoDetect" : 1,
	"VinSrcNum" : 2,
	"CurrVinSrcIndex" : 0,
    "VinSrc" : [
	    {"VinSrcIndex" : 0, "Type" : "HDMI", "Status" : "Lock", "Width" : 1280, "Height" : 720, "ScanType" : "Progressive", "HDCP" : true},
	    {"VinSrcIndex" : 1, "Type" : "VGA", "Status" : "Unlock", "Width" : 0, "Height" : 0, "ScanType" : "Unknown", "HDCP" : false},
    ]
}
```

| value                    | type                     | note                     				 |
|--------------------------|--------------------------|------------------------------------------|
| result                   | bool                     | true\|false			 				 |
| error                    | string                   | Error message            				 |
| IsSupportAutoDetect	   | bool 					  | Is support AutoDetect, false or true.	 |
| VinSrcNum                | int                      | Number of Vin source  					 |
| CurrVinSrcIndex          | int                      | current vin source index     		     |
| VinSrc                   | array                    | Array of Vin Source infromation			 |
| VinSrcIndex              | int                      | Index of Vin Source in the Vin Engine    |              |
| Type                     | string                   | "HDMI"\|"HDBT"\|"DISPLAY PORT"\|"VGA"\|"SDI"\|"Component" |
| Status                   | string                   | "Lock"\|"Unlock" 						 |
| Width                    | int                   	  | source width 							 |
| Height                   | int                   	  | source height 							 |
| ScanType		           | string                   |	"Unknown"\|"Interlace"\|"Progressive"  |
| HDCP                     | bool                     | true, false 							 |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VinEgnIndex.

**Method: SetVinSrc**

Brief: Set Vin Source to Vin Engine

Input:
```json
{
    "VinEgnIndex" : 0,
	"VinSrcIndex" : 1,
	"AutoDetect"  : 0,
}
```
| value                    | type                     | note                     			  						|
|--------------------------|--------------------------|-------------------------------------------------------------|
| VinEgnIndex              | int                      | Vin Engine Index.	                      					|
| VinSrcIndex              | int                      | Index of Vin Source in the Vin Engine.	 					|
| AutoDetect               | bool                      | true\|false			|
|						   |						  |	if true then VinSrcIndex setting not work.					|

Return:
```json
{
    "result" : true,
    "error" : "",
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VinEgnIndex or VinSrcIndex.

**Method: GetCurrentVinSrc**

Brief: Get Current Vin Source from Vin Engine

Input:
```json
{
    "VinEgnIndex" : 0
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VinEgnIndex              | int                      | Vin Engine Index         |


Return:
```json
{
    "result" : true,
    "error" : "",
	"VinSrcIndex" : 0,
	"AutoDetect"  : 0,
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |
| VinSrcIndex              | int                      | Index of Vin Source in the Vin Engine
| AutoDetect               | bool                      | true\|false |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VinEgnIndex.

**Method: SetVinSrcEdidMode**

Brief: Set Vin Source Edid Mode

Input:
```json
{
    "VinEgnIndex" : 0,
	"VinSrcIndex" : 1,
	"EdidMode" : 0,
	"VoutIndex" : 0,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VinEgnIndex              | int                      | Vin Engine Index         |
| VinSrcIndex              | int                      | Vin Source Index         |
| EdidMode                 | int                      | 0:default, 1:port1, 2:portN, 3:customized |
| VoutIndex				   | int                      | if Edid Mode is portN or nothing |
| EdidData                 | string                   | if Edid Mode is customized or nothing|

Return:
```json
{
    "result" : true,
    "error" : "",
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VinEgnIndex, VinSrcIndex, EdidMode.

**Method: GetVinSrcEdidMode**

Brief: Get Vin Source Edid Mode

Input:
```json
{
    "VinEgnIndex" : 0,
	"VinSrcIndex" : 1,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VinEgnIndex              | int                      | Vin Engine Index         |
| VinSrcIndex              | int                      | Vin Source Index         |

Return:
```json
{
    "result" : true,
    "error" : "",
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |
| EdidMode                 | int                      | 0:default, 1:port1, 2:portN, 3:customized |
| VoutIndex				   | int                      | if Edid Mode is portN or nothing |
| EdidData                 | string                   | if Edid Mode is customized or nothing|

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VinEgnIndex, VinSrcIndex.

### **2. Virtual Video Input Functions** ###

**Method: GetVirtualVinInfo**

Brief: Get Virtual Channel Video Input Information

Input:
```<none>
```

Return:

```json
{
    "result" : true,
    "error" : "",
    "VirtualVinNum": 1,
    "VirtualVin" :
    [
		{
			"VirtualVinIndex": 0,
			"MaxSubChannelNum" : 4,
			"CurrentCanvasW" : 1920,
			"CurrentCanvasH" : 1080,
			"CanvasNum" : 3,
			"Effect" : 1,
			"Echo" : "yuyv",
			"Input" : [{"VinIndex" : 0, "Type" : "Capture", "Name" : "capture0"},
				   {"VinIndex" : 1, "Type" : "Capture", "Name" : "capture1"},
				   {"VinIndex" : 3, "Type" : "VirtualChannel", "Name" : "vch-2d0:preview"}]
			"Canvas" : [
				{"CanvasW" : 1920, "CanvasH" : 1080},
				{"CanvasW" : 1600, "CanvasH" : 1200},
				{"CanvasW" : 1280, "CanvasH" : 720}
			],
			"Input":[
				{"VinIndex" : 0, "Type" : "Capture","Name" : "capture0"},
				{"VinIndex" : 1, "Type" : "Capture","Name" : "capture1"},
				{"VinIndex" : 2, "Type" : "WriteBack","Name" : "write back0"}
			]
		}
     ]
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |
| VirtualVinNum	           | int                      | Number of virtual video input |
| VirtualVin               | array                    | array of virtual video input information |
| VirtualVinIndex          | int                      | index of virtual video input |
| MaxSubChannelNum         | int                      | Max number of sub-channels |
| CurrentCanvasW           | int                      | current virtual input canvas width |
| CurrentCanvasH           | int                      | current virtual input canvas height|
| CanvasNum                | int                      | number of virtual input canvas |
| Effect                   | int                      | effect capability        |
|                          |                          | bit0: dest-transparency  |
|                          |                          | bit1: alpha blending     |
|                          |                          | bit2: border             |
|                          |                          | bit3: background image   |
| Echo                     | string                   | If present, it mean this |
|                          |                          | is to duplicate the      |
|                          |                          | content of specified     |
|                          |                          | channel and no settings  |
|                          |                          | accepted                 |
| Canvas                   | array                    | virtual input canvas 	 |
| CanvasW                  | int                      | virtual input canvas width |
| CanvasH                  | int                      | virtual input canvas height|
| Input | array | input source list |

**Name: GetVirtualVinLayout**

Brief: Get current virtual input layout

Input:
```json
{
    "VirtualVinIndex" : 0,
    "VinIndex" : 101,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VirtualVinIndex          | int                      |                          |
| VinIndex                 | int                      | effect query             |
| X                        | int                      | transparency only        |
| Y                        | int                      | transparency only        |

Notes of VinIndex:
   1. It is used to query information of specific effect. If missing, all layout
      returned.

Return:
```json
{
    "result" : true,
    "error" : "",
    "CanvasW" : 1920,
    "CanvasH" : 1080,
    "SubChannelNum" : 4,
    "ImageFullPath" : "/full/path"
    "SubChannelLayout" :
	[
		{
			"VinIndex" : 0,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 0, "ComposeY" : 0, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 1,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 960, "ComposeY" : 0, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 2,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 0, "ComposeY" : 540, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 3,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 960, "ComposeY" : 540, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
	]
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |
| CanvasW                  | int                      | Canvas width             |
| CanvasH                  | int                      | Canvas height            |
| SubChannelNum            | int                      | number of subchannel in virtual channel |
| ImageFullPath            | string                   | full path of image       |
| SubChannelLayout         | array                    | detail subchannel layout array|
| VinIndex                 | int                      | Vin index 				 |
| CropX                    | int                      | Vin crop x position      |
| CropY                    | int                      | Vin crop y position      |
| CropW                    | int                      | Vin crop width    		 |
| CropH                    | int                      | Vin crop height			 |
| ComposeX                 | int                      | Vin compose x position   |
| ComposeY                 | int                      | Vin compose y position   |
| ComposeW                 | int                      | Vin compose width 		 |
| ComposeH                 | int                      | Vin compose height       |
| BorderX                  | int                      | reserved                 |
| BorderY                  | int                      | reserved                 |
| BorderW                  | int                      | reserved                 |
| BorderH                  | int                      | reserved                 |
| RenderMode               | string                   | "auto"\|"autocut"\|"full"\|"manual"|

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VirtualVinIndex.

   2. If VinIndex = 101, X, Y are x, y coordernation in destination video (ppt).
Return:
```json
{
    "result" : true,
    "error" : "",
    "value": 212324
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false           |
| error                    | string                   | Error message            |
| value                    | int                      | R << 24 | G << 16 | B    |

error:
	"MSG_JSONFAIL"	: parse jason string fail, X or Y missing
	"MSG_OUTOFRANGE" : X, Y out of canvas range
	"MSG_INVALID" 	: set invalid VirtualVinIndex, effect not support or not activated

    3. If VinIndex = 102,
Return:
```json
{
    "result" : true,
    "error" : "",
    "value": 24
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | "true"|"false"           |
| error                    | string                   | Error message            |
| value                    | int                      | 0 - 255                  |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid VirtualVinIndex, effect not support or not activated

	

**Method: SetVirtualVinLayout**

Brief: Set virtual video input layout

Input:
```json
{
    "VirtualVinIndex" : 0,
    "CanvasW" : 1920,
    "CanvasH" : 1080,
	"SubChannelNum" : 4,
	"ImageFullPath" : "/full/path",
	"Color": 255,
    "SubChannelLayout" :
	[
		{
			"VinIndex" : 0,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 0, "ComposeY" : 0, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 1,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 960, "ComposeY" : 0, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 2,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 0, "ComposeY" : 540, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
		{
			"VinIndex" : 3,
			"CropX" : 0, "CropY" : 0, "CropW": 1920, "CropH" : 1080,
			"ComposeX" : 960, "ComposeY" : 540, "ComposeW" : 960, "ComposeH" : 540,
			"BorderX" : 0, "BorderY" : 0, "BorderW" : 0, "BorderH" : 0,
			"RenderMode" : "manual",
		},
	]
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VirtualVinIndex          | int                      |                          |
| CanvasW                  | int                      | Canvas width             |
| CanvasH                  | int                      | Canvas height            |
| SubChannelNum            | int                      | number of subchannel in virtual channel |
|						   |                          | 0: change bg image or other settings only without setting layout |
| ImageFullPath            | string                   | full path of image       |
| Color                    | int                      | background color         |
|                          |                          | R << 16, G << 8, B       |
| SubChannelLayout         | array                    | detail subchannel layout array|
| VinIndex                 | int                      | Vin index                |
|                          |                          | 100: border              |
|                          |                          | 101: dest-transparency   |
|                          |                          | 102: alpha blending      |
| CropX                    | int                      | Vin crop x position      |
| CropY                    | int                      | Vin crop y position      |
| CropW                    | int                      | Vin crop width           |
| CropH                    | int                      | Vin crop height          |
| ComposeX                 | int                      | Vin compose x position   |
|                          |                          | R of transparency low    |
|                          |                          | mode of alpha            |
|                          |                          | left side border         |
| ComposeY                 | int                      | Vin compose y position   |
|                          |                          | G of transparency low    |
|                          |                          | time (ms) for auto mode or     |
|                          |                          | value of manual mode     |
|                          |                          | top side border          |
| ComposeW                 | int                      | Vin compose width        |
|                          |                          | B of transparency low    |
|                          |                          | right side border        |
| ComposeH                 | int                      | Vin compose height       |
|                          |                          | bottom side border       |
| BorderX                  | int                      | R of border and transparency high |
| BorderY                  | int	              | G of border and transparency high |
| BorderW                  | int                      | B of border and transparency high |
| BorderH                  | int                      | reserved                 |
| RenderMode               | string                   | "auto"\|"autocut"\|"full"\|"manual" |
| ABPortImage              | string                   | full path of image replaceing the source |

Notes on SubChannelNum:
   1. 0 means change only background image or canvas etc without changing current layout
   2. 1 with compose(x, y, w, h) = (0, 0, 0, 0) and VinIndex != 100, 101, or 102 will clear layout 

Notes on Color (background color):
   1. Setting background color will be ignored if background image already exists
   2. Setting background image will clear background color back to 0 (black)
   3. Not setting background color means it will keep previous background color. default is 0 (black)
   4. Color is encoded with R << 16, G << 8, B, e.g. 16776960 is (R, G, B) = (0xff, 0xff, 0)

Notes on cropping(x, y ,w, h):
   1. Cropping is applied to source.
   2. Setting crop(x, y, w, h) to (0, 0, 0, 0) means always full crop and this is default setting.
   3. If any one of the values exceed the capabilities of source, full crop will be set without 
      error messages.

Notes of background image:
   1. With this field absent means ignore and kept previous background settings.
      If empty string or invalid file provided, the background is removed.

Notes of border:
   1. Border index always precedes its target video.
   2. It carries border width in Compose fields and RGB color in Border fields.
   3. It just support full layout setting and not just change parameter of specific border.
   4. In order to draw a colored area, the next subchannel should have composeX and composeY as the coordinates
	  of the center of the area, and composeW = 0, composeH = 0. BorderX and BorderW should be 1/2 of the width of
	  of the area, and BorderY and BorderH should be 1/2 of the height

Notes of transparency:
   1. Destination transparency support is reported by channel capability of virtual input source.
   2. The destination transparency input (101) carries RGB range. The last input is the source
      input (video) and all the others excluding 101 are treated as destination input
      (ppt or anchor).
   3. So normal sequence for input0 as ppt follows although [101, 0, 1, 0] is not rejected.
       vch0 = [0]            ... video
       vch1 = [101, 1, 2]    ... GetVirtualVinLayout(vch1, x, y) reports RGB color of 1 at pixel (x, y) 
      For input1 as ppt:
       vch0 = [1]
       vch1 = [101, 0, 2]
   4. The source input of destination transparency MUST be of RGB format and it is always rendered
      to full canvas.
   5. NO OTHER EFFECTS available when transparency involved.
   6. Color of destination transparency can be queried through 'GetVirtualVinLayout(vch1, x, y)'
      and vch1 = [101] to alter color range when transparency takes effect.

Notes of alpha blending:
   1. Alpha blending support is reported by channel capability of virtual input source.
   2. The alpha blending (102) supports either auto- or manual- mode. The meaning of value y:
      param x  |  auto bit0
      up bit1  |   0       1    
      ---------+--------------------
           0   |  value    step
      ---------+--------------------
           1   |  value    step
      
   3. For manual mode, the alpha value ranges from 0 to 255.
   4. For auto-mode, the layout auto-swap when it reaches the boundary limit of value
   5. The last input MUST be of RGB format.
   6. A possible alpha setting is:
       vch0 = [0, 1]           ... PIP
       vch1 = [102, 1, 0, 2]   ... SBS
   7. Use vch1 = [102] to start alpha transition with current vch0/vch1 layout.

Notes on ABPortImage:
   1. If attribute exists, VinIndex for this subchannel is ignored
   2. If attribute does not exist, use VinIndex for subchannel source
   3. Compose(x, y, w, h) specifies location of ABPortImage if attribute exists
   4. Other attributes aside from compose(x, y, w, h) are ignored when ABPortImage attribute exists
   
Return:

```json
{
	"result" : true,
	"error" : ""
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                    | string                   | Error message            |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid parameter.

**Name: SetVirtualVinCanvasAspectRatio**

Brief: Set virtual video input canvas aspect ratio

Input:
```json
{
    "VirtualVinIndex" : 0,
    "Aspect" : "16_9"
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VirtualVinIndex          | int                      |                          |
| Aspect                   | string                   | canvas apect ration "16_9" and "4_3"   |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |


**Method: GetVirtualVinCanvasAspectRatio**

Brief: Set virtual video input canvas aspect ratio

Input:
```json
{
    "VirtualVinIndex" : 0
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VirtualVinIndex          | int                      |                          |

Return:

```json
{
	"result" : true,
	"error" : "",
	"Aspect" : "16_9"
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |  true\|false                        |
| error                    | string                   | Error message            |
| Aspect                   | string                   | canvas apect ration "16_9" and "4_3"   |

**Method: PauseVirtualChannel**

Brief: Pause virtual channels

Input:
```<none>
```
Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       | 0: success, -1: fail     |
| ErrMsg       | string    | Error message            |


**Method: ResumeVirtualChannel**

Brief: Resume virtual channels

Input:
```<none>
```
Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       | 0: success, -1: fail     |
| ErrMsg       | string    | Error message            |

### **3. Streaming Video Input Functions** ###

**Method: GetStreamingVinInformation**

Brief: Get streaming video input information

Return:

```json
{
	"result" : true,
	"error" : "",
	"StreamingVinNum" : 1,
	"StreamingVin" : 
	[
		{
			"StreamingVinIndex": 0,  
			"SupportMaxResW": 1920,
			"SupportMaxResH": 1080,
			"SupportMaxBitrate" : 10000,
			"SupportMaxFramerate" : 30
		},
	 ]
}
```
| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVinNum          | int                      | Streaming video input number  |
| StreamingVin             | array                    |                          	  |
| StreamingVinIndex        | int    	              |                          	  |
| SupportMaxResW	       | int                      |                          	  |
| SupportMaxResH    	   | int           	          |                          	  |
| SupportMaxBitrate	       | int                      |                          	  |
| SupportMaxFramerate  	   | int           	          |                          	  |

**Method: StartStreamingVinEgn**

Brief: Start streaming video input engine

Input:
```json
{
    "StreamingVinIndex" : 0,
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVinIndex        | int    	              |                          	  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: StopStreamingVinEgn**

Brief: Stop streaming video input engine

Input:
```json
{
    "StreamingVinIndex" : 0,
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVinIndex        | int    	              |                          	  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: GetStreamingVinEgnProperty**

Brief: Get streaming video input engine property

Input:
```json
{
    "StreamingVinIndex" : 0,
}
```

Return:

```json
{
	"result" : true,
	"error" : "",
	"port" : 9001,
	"latency" : 100
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVinIndex        | int    	              | streaming vin index        	  |
| port			           | int    	              | listen port			      	  |
| latency		           | int    	              | jitter buffer latency (ms)	  |

**Method: SetStreamingVinEgnProperty**

Brief: Set streaming video input engine property

Input:
```json
{
    "StreamingVinIndex" : 0,
	"port" : 9001,
	"latency" : 100
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| StreamingVinIndex        | int    	              | streaming vin index        	  |
| port			           | int    	              | listen port 		     	  |
| latency		           | int    	              | jitter buffer latency (ms)	  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |


**Signal: StmVinEvent**
Brief: video source event
Result:
```json
{
	"StmVinIndex" : 0,
	"EventMsg" : "streaming video input start, normal",
	"EventId" : 0
}
```

| value                    | type                     | note                     				|
|--------------------------|--------------------------|-----------------------------------------|	
| VinEgnIndex              | int                      | video engine index		 				|
| EventMsg             	   | string                   | "streaming video input start"			|
|						   | 						  | "streaming video input stop"			|
|						   | 						  | "streaming video input stream start"	|
|						   | 						  | "streaming video input stream stop"		|
| EventId				   | 						  | event id      			 				|


### **4. Video Output Functions ** ###

**Method: GetVoutCount**

Brief: Get video output count

Return:

```json
{
	"result" : true,
	"error" : "",
	"VoutCount" : 3
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |
| VoutCount                | int                      | Vout count              |


**Name: GetVoutMode**

Brief: Get Video output Modes
Input:
```json
{
	"VoutIndex" : 1,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VoutIndex                | int                      | Vout index               |

Return:

```json
{
	"result" : true,
	"error" : "",
	"VoutIndex" : 1,
	"VoutModeCount" : 22,
	"CurrVoutModeIndex" : 1,
	"VoutIdentValue" : "09d1d978455400002b1a",
	"VoutModes" : [
		{"ModeIndex":0, "W":1920, "H":1080, "RefreshRate": 60, },
		{"ModeIndex":1, "W":1920, "H":1080, "RefreshRate": 60, "prefferred": true},
		...
	]
}
```
| value                    | type                     | note                      |
|--------------------------|--------------------------|---------------------------|
| result                   | bool                     |                           |
| error                    | string                   | Error message             |
| VoutIndex                | int                      | video output index        |
| VoutIdentValue           | string                   | unique edid value         |
| VoutModeCount            | int                      | video output mode count   |
| VoutModes                | array                    | Array for vout modes      |
| ModeIndex                | int                      | Mode index                |
| W                        | int                      | width                     |
| H                        | int                      | height                    |
| RefreshRate              | int                      | vertical refresh * 1000   |
| prefferred               | bool                     | vout prefer mode          |



**Method: SetVoutMode**

Brief: Set video output mode
Input:
```json
{
	"VoutIndex" : 1,
	"ModeIndex" : 2,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VoutIndex             | int                      | Vout index            |
| ModeIndex                | int                      | Mode index  		     |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: SetVoutAttr**

Brief: Set video output properties
Input:
```json
{
	"VoutIndex" : 1,
	"Saturation" : 50,
	"Brightness" : 50,
	"Contrast" : 50,
	"Hue" : 50,
	"BackgroundColor" : 0x0,
	"HDCP" : false,
	"Blank" : false,
	"Freeze" : false,
	"Capture": false,
	"CapturePathName": "/var/run/default.jpg",
	"Quality": 100
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VoutIndex                | int                      | Vout index               |
| Saturation               | int                      | Saturation value         |
| Brightness               | int                      | Brightness  value        |
| Contrast                 | int                      | Contrast value           |
| Hue                      | int                      | Hue value                |
| BackgroundColor          | int                      | Background  color        |
| HDCP                     | bool                     | enable HDCP              |
| Blank                    | bool                     | Blank output             |
| Freeze                   | bool                     | Freeze output            |
| Capture                  | bool                     | Capture to file          |
| CapturePathName          | string                   | Capture file path & name |
| Quality                  | int                      | 1 <= quality <= 100      |


Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |


**Method: GetVoutAttr**

Brief: Get video output properties
Input:
```json
{
    "VoutIndex" : 1,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VoutIndex                | int                      | Vout index               |

Return:

```json
{
	"result" : true,
	"error" : "",
	"VoutIndex" : 1,
	"Saturation" : 50,
	"Brightness" : 50,
	"Contrast" : 50,
	"Hue" : 50,
	"BackgroundColor" : 0x0,
	"HDCP" : false,
	"Blank" : false,
	"Freeze" : false,
	"Capture" : false
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |
| VoutIndex                | int                      | Vount index              |
| Saturation               | int                      | Saturation value         |
| Brightness               | int                      | Brightness  value        |
| Contrast                 | int                      | Contrast value           |
| Hue                      | int                      | Hue value                |
| BackgroundColor          | int                      | Background  color        |
| HDCP                     | bool                     | enable HDCP              |
| Blank                    | bool                     | Blank output             |
| Freeze                   | bool                     | Freeze output            |
| Capture                  | bool                     | Capture to file          |

**Method: GetVoutSptList**

Brief: Get supporting video output resolution

Input:
```<none>
```
Return:

```json
{
    "result" : true,
    "error" : "",
    "VoutSptCnt" : 3,
    "VoutSptList" : [
        {
            "height":480,  
            "width":720,
        },
        {
            "height":576,
            "width":720,
        },
        {
            "height":720,
            "width":1280,
    },
    ]
}
```
| value                    | type                     | note                      |
|--------------------------|--------------------------|---------------------------|
| result                   | bool                     |                           |
| error                    | string                   | Error message             |
| VoutSptCnt               | int                      | count for supporting list |
| VoutSptList              | arrary                   | resolution list           |
| height                   | int                      | video image height        |
| width                    | int                      | video image width         |

**Method: SetVoutStreamGo**

Brief: Set video output stream go
Input:
```json
{
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: SetVoutMultiFreeze**

Brief: Set multiple display freeze
Input:
```json
{
	"MajorVout" : 0,
	"unFreezeVout" : 2,
	"Freeze" : 1
}
```
| value                    | type                     | note                        |
|--------------------------|--------------------------|-----------------------------|
| MajorVout                | int                      | Which vout capture frame    |
| Freeze                   | int                      | Freeze or not               |
| unFreezeVout             | int                      | Which vout still in play    |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

### **5. Video Route Functions** ###

**Method: GetVideoRouteTableInfo**
Brief: Get video route table information
Input:
```
<none>
```

Return:
```json
{
	"result" : true,
	"error" : "",
	"VideoRouteTableInfo": [
		{
			"source":[
				{"VinIndex": 4,"Type":"VirtualChannel","Name":"vch-2d0:program"} 		
			],
			"sink":[
				{"VoutIndex":1,"Type":"display","Name":"display1"} 
			]
		},
		{
			"source":[
				{"VinIndex": 0,"Type": "Capture","Name":"capture0"},
				{"VinIndex": 1,"Type": "Capture", Name": "capture1"},
				{"VinIndex": 2,"Type": "WriteBack","Name":"write back0"},
				{"VinIndex": 3,"Type": "VirtualChannel", "Name":"vch-2d0:preview"},
				{"VinIndex": 5,"Type": "VirtualChannel", "Name":"vch-vpe0:ipad"}	
			],
			"sink":[
				{"VoutIndex":0,"Type":"display","Name":"display0"}
			]
		}
	]
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                	   | string    		          | Error message 			 |
| VideoRouteTableInfo          | array                    | array of video route table information |
| source | array | array of video input information |
| VinIndex                 | int                      | video input index 			     |
| VoutIndex                | int                      | video out index               |
| Type | string | |
| Name | string | |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid parameter.

**Method: SetVideoRouteTable**
Brief: Set the route table for video input and video output  
Input:
(extend mode: Split vip 1 to Vout 0 and Vout 1)
```json
{
	"VideoRouteTable": [
		{
			"VoutIndex" : 0,
			"VinIndex" : 1,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"SrcX" : 0,
				"SrcY" : 0,
				"SrcW" : 960,
				"SrcH" : 1080,
				"DstX" : 0,
				"DstY" : 0,
				"DstW" : 1920,
				"DstH" : 1080,
				"Rotation" : 0,
				"RenderMode" : "manual"
			}
		},
		{
			"VoutIndex" : 1,
			"VinIndex" : 1,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"SrcX" : 960,
				"SrcY" : 0,
				"SrcW" : 960,
				"SrcH" : 1080,
				"DstX" : 0,
				"DstY" : 0,
				"DstW" : 1920,
				"DstH" : 1080,
				"Rotation" : 0,
				"RenderMode" : "manual"
			}
		}
	]
}
```
or (clone mode: streaming video input to Vout 0 and Vout 1)
```json
{
	"VideoRouteTable": [
		{
			"VoutIndex" : 0,
			"VinIndex" : 0,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"RenderMode" : "auto"
			}
		},
		{
			"VoutIndex" : 1,
			"VinIndex" : 0,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"RenderMode" : "auto"
			}
		}
	]
}
```
or (standard mode: virtual channel to Vout 1)
```json
{
	"VideoRouteTable": [
		{
			"VoutIndex" : 1,
			"VinIndex" : 0,
			"VinSrcIndex" : 0,
		}
	]
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VideoRouteTable          | array                    | array of video route table |
| VoutIndex                | int                      | Vout index               |
| VinIndex                 | int                      | vin index 			     |
| VinSrcIndex              | int                      | vin source index   		 |
| OutputLayout             | object                   | vout layout              |
| SrcX             		   | int                      | source X                 |
| SrcY             		   | int                      | source Y                 |
| SrcW             		   | int                      | source width             |
| SrcH             		   | int                      | source height            |
| DstX             		   | int                      | destination X            |
| DstY             		   | int                      | destination Y            |
| DstW             		   | int                      | destination width        |
| DstH             		   | int                      | destination height       |
| Rotation         		   | int                      | rotation angle 0/90/180/270           |
| RenderMode               | string                   | "auto"\|"autocut"\|"full"\|"manual"|


Return:

```json
{
	"result" : true,
	"error" : ""
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false			 |
| error                	   | string    		          | Error message 			 |

error:
	"MSG_JSONFAIL"	: parse jason string fail
	"MSG_INVALID" 	: set invalid parameter.

**Method: GetVideoRouteTable**
Brief: Get the route table for video input and video output

Input:
```
<none>
```

Return:
```json
{
	"result" : true,
	"error" : "",
	"VideoRouteTable": [
		{
			"VoutIndex" : 0,
			"VinIndex" : 0,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"SrcX" : 0,
				"SrcY" : 0,
				"SrcW" : 0,
				"SrcH" : 0,
				"DstX" : 0,
				"DstY" : 0,
				"DstW" : 0,
				"DstH" : 0,
				"Rotation" : 0,
				"RenderMode" : "auto"
			}
		},
		{
			"VoutIndex" : 1,
			"VinIndex" : 1,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"SrcX" : 0,
				"SrcY" : 0,
				"SrcW" : 0,
				"SrcH" : 0,
				"DstX" : 0,
				"DstY" : 0,
				"DstW" : 0,
				"DstH" : 0,
				"Rotation" : 0,
				"RenderMode" : "auto"
			}
		},
		{
			"VoutIndex" : 2,
			"VinIndex" : 2,
			"VinSrcIndex" : 0,
			"OutputLayout" :
			{
				"SrcX" : 0,
				"SrcY" : 0,
				"SrcW" : 0,
				"SrcH" : 0,
				"DstX" : 0,
				"DstY" : 0,
				"DstW" : 0,
				"DstH" : 0,
				"Rotation" : 0,
				"RenderMode" : "auto"
			}
		}
	]
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     | true\|false           |
| error                	   | string    		          | Error message            |
| VideoRouteTable          | array                    | array of video route table|
| VoutIndex                | int                      | vout index               |
| VinIndex                 | int                      | vin index                |
| VinSrcIndex              | int                      | vin source index         |
| OutputLayout             | object                   | video output layout      |
| SrcX             		   | int                      | source X                 |
| SrcY             		   | int                      | source Y                 |
| SrcW             		   | int                      | source width             |
| SrcH             		   | int                      | source height            |
| DstX             		   | int                      | destination X            |
| DstY             		   | int                      | destination Y            |
| DstW             		   | int                      | destination width        |
| DstH             		   | int                      | destination height       |
| Rotation         		   | int                      | rotation angle           |
| RenderMode               | string                   | "auto"\|"autocut"\|"full"\|"manual"|

### **6. Video Event** ###

**Signal: VinSrcEvent**
Brief: video source event
Result:
```json
{
	"VinEgnIndex" : 0,
	"VinSrcIndex" : 0,
	"Event" : "signal lock",
	"EventId" : 1
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| VinEgnIndex              | int                      | video engine index		 |
| VinSrcIndex              | int                      | video source index       |
| EventMsg             	   | string                   | "signal lock"			 |
|						   | 						  | "signal lost"			 |
|						   | 						  | "format change"			 |
| EventId				   | 						  | event id      			 |

**Signal: EVENT_VIDEO_ROUTE_CHANGED**
Brief: Someone change video route table

**Signal: VoutEvent**
Brief: display plug status/format change/HDCP status
Result:
```json
{
	"VoutIndex" : 0,
	"Event": "signal lock",
	"EventId" : 0,
}
```

| value                    | type                     | note                     		|
|--------------------------|--------------------------|---------------------------------|
| VoutIndex                | int                      | video output index       		|
| EventMsg                 | string                   | "singal lock"            		|
|                          |                          | "signal lost"            		|
|                          |                          | "format change"         	 	|
|                          |                          | "hdcp on"                		|
|                          |                          | "hdcp off"               		|
|                          |                          | "hdcp blanking display"  		|
|                          |                          | "capture fail"                  |
|                          |                          | "capture done"                  |
| EventId                  |                          | event id                 		|

**EVENT: event id table**

| event message            				| event id number          | note                     |
|---------------------------------------|--------------------------|--------------------------|
| "signal lock"            				| 0                        |                          |
| "signal lost"            				| 1                        |                          |
| "format change"          				| 2                        |                          |
| "hdcp on"                				| 3                        |                          |
| "hdcp off"               				| 4                        |                          |
| "hdcp blanking display"  				| 5                        |                          |
| "capture fail"                        | 6                        |                          |
| "capture done"                        | 7                        |                          |

### **7. Streaming Video Output Functions** ###

**Method: GetStreamingVoutEgnInfo**

Brief: Get streaming video output engine information

Return:

```json
{
	"result" : true,
	"error" : "",
	"StreamingVoutNum" : 1,
	"StreamingVout" : 
	[
		{
			"StreamingVoutIndex": 0,
			"SupportProtocol": "RTMP",
			"SupportMaxResW": 1920,
			"SupportMaxResH": 1080,
			"SupportMaxBitrate": 10240,
			"SupportMaxFramerate": 30,
		},
    ]
}
```
| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVoutNum         | int                      | Streaming video output number |
| StreamingVout            | array                    |                          	  |
| StreamingVoutIndex       | int    	              | streaming video output index  |
| SupportProtocol | string | "UDP"\|"TCP"\|"RTP"\|"RTMP" | 
| SupportMaxResW	       | int                      | support max resolution width  |
| SupportMaxResH	       | int                      | support max resolution height |
| SupportMaxBitrate	       | int                      | support max bitrate       	  |
| SupportMaxFramerate	       | int                      | support max frame rate       	  |

**Method: StartStreamingVoutEgn**

Brief: Start streaming video output engine

Input:
```json
{
    "StreamingVoutIndex" : 0,
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVoutIndex       | int    	              | streaming video output index  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: StopStreamingVoutEgn**

Brief: Stop streaming video output engine

Input:
```json
{
    "StreamingVoutIndex" : 0,
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| result                   | bool                     |                          	  |
| error                    | string                   | Error message            	  |
| StreamingVoutIndex       | int    	              | streaming video output index  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: PauseStreamingVoutEgn**
					
Brief: Pause streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
	"active":true,
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| active | bool | |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: GetStreamingVoutEgnProperty**

Brief: Get streaming video output engine property

Input:
```json
{
	"StreamingVoutIndex" : 0,
}
```

Return:

```json
{
	"result" : true,
	"error" : "",
	"encode" :
	{
		"video encode":
		{
			"foramt": "H264",
			"ratecontrol": "CBR",
			"bitrate" : 2048,
			"width" : 1920,
			"height" : 1080,
			"profile" : "main",
			"level" : 40,
			"keyframes" : 16,
			"framerate" : 30
		},
		"audio encode":
		{
			"foramt": "AAC",
			"ratecontrol":"CBR",
			"bitrate": 128,
			"samplerate": 48000
		}
	},
	"streaming":
	{
		"streaminglist":[
			{
				"name":"youtube",
				"protocol": "rtmp",
				"security": false,
				"stream url": "rtmp://a.rtmp.youtube.com/live2/",
				"stream key": "xxx"
			},
			{
				"name":"ipad",
				"protocol": "rtp",
				"host": "xxx.xxx.xxx.xxx",
				"port": 1234
			},
		]
	},
	"record":
	{
		"recordlist":[
			{
				"name":"rec",
				"format":"mp4",
				"folder":"/home/root/",
				"filename":"test.mp4"
			}
		]
	}
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| result                   | bool                     |                          	  		|
| error                    | string                   | Error message            	  		|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| source | object | video and audio source parameter  |
| video source | object | video source parameter |
| VoutIndex                | int    	              | video out index, not set if -1  |
| VinIndex | int | video input index, not set if -1 |
| audio source | object | audio source parameter |
| AinIndex | int | audio input index, not set if -1 |
| encode		           | object    	              | encode parameter	      	  		|
| video encode  | object | |
| foramt | string | "H264"\|"MPEG4" |
| ratecontrol | string | "CBR"\|"VBR" |
| bitrate		           | int    	              | Bitrate in kbit/sec, range: [256, 10240] |
| width			           | int    	              | video width, range: [32, 1920]			  					|
| height		           | int    	              | video height, range: [32, 1080]			 					|
| profile		           | string    	              | "baseline"\|"main"\|"high"	 		|
| level			           | int    	              | 20\|21\|22\|30\|31\|32\|40\|41\|42\|40\|50\|51	|
| keyframes           	   | int    	              | Interval between intra frames (keyframes), range: [16, 30]	|
| framerate | int | |
| audio encode | object | |
| foramt | string | "AAC"\|"OPUS" |
| ratecontrol | string | "CBR"\|"VBR" |
| bitrate		           | int    	              | Bitrate in kbit/sec, range: [32, 512] |
| samplerate | int | 44100\|48000 |
| streaming | object | |
| protocol | string | "rtmp"\|"rtp" |
| name | string | |
| cdn | array | |
| security | bool | true\|false |
| stream url | string | rtmp  stream url |
| stream key | string | rtmp stream key |
| client		           | array    	              | rtp client array    	      	  		|
| host			           | string    	              | rtp client host	    	      	  		|
| port			           | int    	              | rtp client port			      	  		|

**Method: SetStreamingVoutEgnProperty**

Brief: Set streaming video output engine property

Input:
```json
{
	"StreamingVoutIndex" : 0,
	"encode" :
	{
		"video encode":
		{
			"foramt": "H264",
			"ratecontrol": "CBR",
			"bitrate" : 5000,
			"width" : 1920,
			"height" : 1080,
			"profile" : "high",
			"level" : 41,
			"keyframes" : 30,
			"qpI" : 15,
			"qpP" : 28,
			"qpoffsetb": 4,
			"qpmaxi": 18,
			"qpmaxp": 40,
			"qpmaxb": 44,
			"qpmini": 10,
			"qpminp": 10,
			"qpminb": 10,
			"ipquality": 2,
			"entropy": 2,
			"preset" : 3,
			"scenario" : 1	
		},
		"audio encode":
		{
			"foramt": "AAC",
			"ratecontrol":"CBR",
			"bitrate": 128,
			"samplerate": 48000
		}
	},
	"streaming":
	{
		"streaminglist":[
			{
				"name":"youtube",
				"protocol": "rtmp",
				"security": false,
				"stream url": "rtmp://a.rtmp.youtube.com/live2/",
				"stream key": "xxx"
			},
			{
				"name":"ipad",
				"protocol": "rtp",
				"host": "xxx.xxx.xxx.xxx",
				"port": 1234
			},
		]
	},
	"record":
	{
		"recordlist":[
			{
				"name":"rec",
				"format":"mp4",
				"folder":"/home/root/",
				"filename":"test.mp4"
			}
		]
	}
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| encode		           | object    	              | encode parameter	      	  		|
| video encode  | object | |
| foramt | string | "H264"\|"MPEG4" |
| ratecontrol | string | "CBR"\|"VBR" |
| bitrate		           | int    	              | Bitrate in kbit/sec, range: [256, 10240] |
| width			           | int    	              | video width, range: [32, 1920]			  					|
| height		           | int    	              | video height, range: [32, 1080]			 					|
| profile		           | string    	              | "baseline"\|"main"\|"high"	 		|
| level			           | int    	              | 20\|21\|22\|30\|31\|32\|40\|41\|42\|40\|50\|51	|
| keyframes           	   | int    	              | Interval between intra frames (keyframes), range: [16, 30]	|
| qpi       | int | qp for I frame, range : [-1,51] |
| qpp       | int | qp for P frame, range : [-1,51] |
| qpoffsetb | int | qp offset for B frame, qpP + qpoffsetb should be in range of [0,51] |
| qpmaxi    | int | qp maximum for I frame, range : [0,51] |
| qpmaxp    | int | qp maximum for P frame, range : [0,51] |
| qpmaxb    | int | qp maximum for B frame, range : [0,51] |
| qpmini    | int | qp minimum for I frame, range : [0,51] |
| qpminp    | int | qp minimum for P frame, range : [0,51] |
| qpminb    | int | qp minimum for B frame, range : [0,51] |
| ipquality    | int | Higher quality factor means I frame quality is given higher importance compared to P frame, range : [1,3] |
| entropy   | int | 1 : CAVLC coding type, 2: CABAC coding type, range : [1,2] |
| preset    | int | 1\|2\|3\|4\|6\|, 1:XDM_HIGH_QUALITY, 2:XDM_HIGH_SPEED, 3:XDM_USER_DEFINED, 4:XDM_HIGH_SPEED_MED_QUALITY, 6:XDM_MED_SPEED_HIGH_QUALITY |
| scenario    | int |  range : [1,10], 1:normal 1920x1080, 2:static 1920x1080, 3:animation 1920x1080, 4:normal 1280x720, 5:static 1280x720, 6:animation 1280x720, 7:normal 864x480, 8: static 864x480, 9: animation 864x480, 10: user define|
| framerate | int | |
| audio encode | object | |
| foramt | string | "AAC"\|"OPUS" |
| ratecontrol | string | "CBR"\|"VBR" |
| bitrate		           | int    	              | Bitrate in kbit/sec, range: [32, 512] |
| samplerate | int | 44100\|48000 |
| streaming | object | |
| streaminglist| array | |
| name | string | the max string length is 32 |
| protocol | string | "rtmp"\|"rtp" |
| security | bool | true\|false |
| stream url | string | rtmp  stream url |
| stream key | string | rtmp stream key |
| host			           | string    	              | rtp client host	    	      	  		|
| port			           | int    	              | rtp client port			      	  		|
| record | object | |
| recordlist| array | |
| name | string | the max string length is 32 |
| format| string | record container format, "mp4"\|"flv" | 
| folder| string | record folder path |
| filename| string | record file name|

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: GetStreamingVoutEgnStatus**

Brief: Get streaming video output engine status

Input:
```json
{
	"StreamingVoutIndex" : 0,
}
```

Return:

```json
{
	"result" : true,
	"error" : "",
	"streaming":
	{
		"streaminglist":[
			{
				"name":"youtube",
				"protocol": "rtmp",
				"Streaming StatusId":0,
				"Streaming StatusMsg":"streaming",
				"bitrate":4000
			},
			{
				"name":"ipad",
				"protocol": "rtp",
				"Streaming StatusId":0,
				"Streaming StatusMsg":"streaming",
				"bitrate":4000
			},
		]
	},
	"record":
	{
		"recordlist":[
			{
				"name":"rec",
				"format": "mp4",
				"Record StatusId":0,
				"Record StatusMsg":"recording",
				"bitrate":4000
			}
		]
	}
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |
| streaming | object | |
| protocol | string | "rtmp"\|"rtp" |
| cdn | array | |
| name | string | |
| protocol | string | "rtmp"\|"rtp" |
| Streaming StatusId | int |
| Streaming StatusMsg | string | |
| bitrate | int | streaming out bitrate |
| Record StatusId | int |
| Record StatusMsg | string | |
**Method: AddStreaming**

Brief: Add streaming task to streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
### RTMP protocol	
	"streaming":
	{
		"name":"youtube",
		"protocol": "rtmp",
		"security": false,
		"stream url": "rtmp://a.rtmp.youtube.com/live2/",
		"stream key": "xxx",
	},
### RTP protocol	
	"streaming":
	{
		"name":"ipad",
		"protocol": "rtp",
		"host": "xxx.xxx.xxx.xxx",
		"port": 1234
	}	
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| streaming | object | |
| protocol | string | "rtmp"\|"rtp" |
| cdn | array | |
| name | string | the max string length is 32  |
| security | bool | true\|false |
| stream url | string | rtmp  stream url |
| stream key | string | rtmp stream key |
| client		           | array    	              | rtp client array    	      	  		|
| host			           | string    	              | rtp client host	    	      	  		|
| port			           | int    	              | rtp client port			      	  		|

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: RemoveStreaming**

Brief: Remove streaming task from streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
### RTMP protocol	
	"streaming":
	{
		"name":"youtube",
		"protocol": "rtmp
	},
### RTP protocol	
	"streaming":
	{
		"name":"ipad",
		"protocol": "rtp",
	}	
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| streaming | object | |
| protocol | string | "rtmp"\|"rtp" |
| name | string | the max string length is 32  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: StartStreaming**

Brief: Start streaming from streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
### RTMP protocol	
	"streaming":
	{
		"name":"youtube",
		"protocol": "rtmp
	},
### RTP protocol	
	"streaming":
	{
		"name":"ipad",
		"protocol": "rtp",
	}	
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| streaming | object | |
| name | string | the max string length is 32  |
| protocol | string | "rtmp"\|"rtp" |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: StopStreaming**

Brief: Stop streaming from streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
### RTMP protocol	
	"streaming":
	{
		"name":"youtube",
		"protocol": "rtmp
	},
### RTP protocol	
	"streaming":
	{
		"name":"ipad",
		"protocol": "rtp",
	}	
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| streaming | object | |
| name | string | the max string length is 32  |
| protocol | string | "rtmp"\|"rtp" |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: PauseStreaming**

Brief: Pause streaming from streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
### RTMP protocol	
	"streaming":
	{
		"name":"youtube",
		"protocol": "rtmp
	},
### RTP protocol	
	"streaming":
	{
		"name":"ipad",
		"protocol": "rtp",
	}
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| streaming | object | |
| name | string | the max string length is 32  |
| protocol | string | "rtmp"\|"rtp" |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: AddRecord**

Brief: Add record task to streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,	
	"record":
	{
		"name":"rec",
		"format": "mp4",
		"folder": "/run/media/sda1",
		"filename": "test"
	},
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| record | object | |
| name | string | the max string length is 32  |
| format | string | record container format, "mp4"\|"flv" |
| folder | string | record folder |
| filename | string | record file name |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: RemoveRecord**

Brief: Remove record task from streaming video output engine

Input:
```json
{
	"StreamingVoutIndex" : 0,
	"record":
	{
		"name":"rec",
	},	
}
```

| value                    | type                     | note                     	  		|
|--------------------------|--------------------------|-------------------------------------|
| StreamingVoutIndex       | int    	              | streaming video output index		|
| record | object | |
| name | string | the max string length is 32  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |


**Signal: StmVoutEvent**
Brief: streaming video output event
Result:
```json
{
	"StreamingVoutIndex" : 0,
	"EventMsg" : "streaming video output engine information",
	"EventId" : 2,	
	"streaming":
	{
		"streaminglist":[
			{
				"name":"youtube",
				"protocol": "rtmp",
				"Streaming StatusId":0,
				"Streaming StatusMsg":"streaming",
				"bitrate":4000,
				"NetworkStatus":0
			},
			{
				"name":"ipad",
				"protocol": "rtp",
				"Streaming StatusId":0,
				"Streaming StatusMsg":"streaming",
				"bitrate":4000,
				"NetworkStatus":0
			},
		]
	},
	"record":
	{
		"recordlist":[
			{
				"name":"rec",
				"format": "mp4",
				"Record StatusId":0,
				"Record StatusMsg":"recording",
				"bitrate":4000
			}
		]
	}
}
```

| value                                | type                     | note                     				|
|--------------------------|--------------------------|-----------------------------------------|	
| StreamingVoutIndex             | int                      | streaming video output engine index		|
| EventMsg             	   | string                   | "streaming video output engine start"	|
|						   | 						  | "streaming video output engine stop"	|
|						   | 						  | "streaming video output engine information"	|
| EventId				   | 						  | event id      			 				|
| bitrate | int | streaming bitrate (kbps)|

| EventId | EventMsg |
|--------|------------------------|
| 0 | "streaming video output engine start"	|
| 1 | "streaming video output engine stop"	|
| 2 | "streaming video output engine streaming"	|
| 3 | "streaming video output engine information"	|
| 4 | "streaming video output engine pause"	|


|Streaming StatusId | Streaming StatusMsg |
|-------------------------|--------------------------|
| 0 | "streaming"	|
| 1 | "connecting cdn"	|
| 2  | "connect cdn success"	|
| 3  | "connect cdn fail"	|
| 4  | "disconnect cdn"	|
| 5  | "pause"	|
| 6  | "stop"	|

| NetworkStatus | message |
| 0 | "good" |
| 1 | "ordinary" |
| 2 | "bad" |

| Record StatusId | Record StatusMsg |
|-------------------------|--------------------------|
| 0 | "recording"	|
| 1 | "split file"	|
| 2 | "record fail"	|
| 3 | "stop"	|

* * * * *
### **8. Video System Functions** ###

**Method: SetVideoSystem**

Brief: Set video system

Input:
```json
{
    "VideoSystem" : 0,
}
```

| value                    | type                     | note                     	  |
|--------------------------|--------------------------|-------------------------------|
| VideoSystem       | int    	              | 0: NTSC, 1: PAL  |

Return:

```json
{
	"result" : true,
	"error" : "",
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |

**Method: GetVideoSystem**

Brief: Get video system

Input:
```
<none>
```

Return:

```json
{
	"result" : true,
	"error" : "",
	"VideoSystem": 0,
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| result                   | bool                     |                          |
| error                    | string                   | Error message            |
| VideoSystem       | int    	              | 0: NTSC, 1: PAL  |

**Method: SetVinColor**

Brief: Set video input brightness, contrast, saturation, and hue value

Input:
```json
{
	"VinEgnIndex":0,
	"type":1,
	"value":128
}
```
| value                    | type                     |   note               |
|--------------------------|--------------------------|-------------------------|
| VinEgnIndex   | int   | Vin Engine Index. |
| type   | int  | 0: brightness, 1: contrast, 2: saturation, 3: hue            |
| value  | int  | value of the type you choose [0:128]  |


Return:
```json
{
   "error" : "",
   "result" : true
}
```
| value                    | type                     |   note               |
|--------------------------|--------------------------|-------------------------|
| result  | bool    | true\|false		 |
| error   | string  | Error message      |

**Method: GetVinColor**

Brief: Get video input brightness, contrast, saturation, and hue value

Input:
```json
{
	"VinEgnIndex":0,
}
```
| value                    | type                     |   note               |
|--------------------------|--------------------------|-------------------------|
| VinEgnIndex   | int   | Vin Engine Index. |

Return:
```json
{
   "brightness" : 0,
   "contrast" : 128,
   "error" : "",
   "hue" : 0,
   "result" : true,
   "saturation" : 128
}
```
| value                    | type                     |   note               |
|--------------------------|--------------------------|-------------------------|
| brightness  | int    | brightness of capture, [0,128] |
| contrast    | int    | contrast of capture, [0,128] |
| hue         | int    | hue of capture, [0,128] |
| saturation  | int    | saturation of capture, [0,128] |
| result      | bool   | true\|false		 |
| error       | string | Error message      |