# Controller DBus API #

**History**

| version | date         | discription                     |
|---------|--------------|---------------------------------|
| 0.1     | 2018 Jul. 10 | Initial version                 |
| 0.2     | 2019 Jan. 10 | Add gif function                |
| 0.3     | 2019 Mar. 7  | Add Cut Transition function

* * * * *
## [UC9020GUI DBus API](#gui-dbus-api)

* [1. GUI functions](#1-gui-functions)
    * [1-1 Create object](#1-1-create-object)
    * [1-2 Set new OSD object](#1-2-set-new-osd-object)
    * [1-3 Set Auto transition](#1-3-set-auto-transition)
    * [1-4 Set Manual transition](#1-4-set-manual-transition)
    * [1-5 Set Cut transition](#1-5-set-cut-transition)
    * [1-6 Delete object](#1-6-delete-object)
    * [1-7 Clean object](#1-7-clean-object)
    * [1-8 Update object](#1-8-update-object)
    * [1-9 Read object](#1-9-read-object)
    * [1-10 Set Full Screen](#1-10-set-full-screen)
    * [1-11 Reset Full Screen](#1-11-reset-full-screen)
    * [1-12 Set PGM](#1-12-set-pgm)
    * [1-13 Set Preview](#1-13-set-preview)
* * * * *

## APH Deamon API ##

Dbus Communicate between APH daemon and GUI

Service Name: **`com.aten.aph.guiservice`**

Object Path: **`/com/aten/aph/guiservice`**

Interface Name: **`com.aten.aph.guiservice`**

### **1. GUI functions** ###
-----------
### **1-1 Create object** ###
**Method: CreateObject**

Brief:

Input:
```json
{
    "targetIdx":0,
    "OSD":[
        {
            "id" : "text1234",
            "root":"/usr/share",
            "fileName": "text.qml",
            "properties":{
                "width":0.2,
                "height":0.5,
                "color":"red",
                "x":0,
                "y":0.5,
                "z":3,
                "text":"program",
                "pixelSize":0.3,
                "family":"FrutigerLT47LightCondensed.ttf",
                "bold":true,
                "textColor":"blue",
                "textOpacity":0.1,
                "textStyle":0,
                "textOutlineColor":"yellow"
            }
        },
        {
            "id" : "image1234",
            "root":"/usr/share",
            "fileName": "image.qml",
            "properties":{
                "width":0.02,
                "height":0.06,
                "x":0,
                "y":0.5,
                "z":3,
                "source":"1.png",
                "fillMode":0
            }
        },
        {
	        "id": "gif",
	        "root": "/usr/share",
	        "fileName": "image.qml",
	        "properties": {
		        "width": 0.2,
		        "height": 0.3,
		        "x": 0.8,
	        	"y": 0.2,
		        "z": 3,
	        	"source": "2.gif"
	        }
        }
    ]
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| id                                   | string                   | object unique ID         |
| fileName                             | string                   | file name                |
| root                                 | string                   | file initial path        |
| [Text properties](#text-properties)  | object                   |                          |
| [image properties](#image-properties)| object                   |                          |

### **Text properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |width of rectangle        |
| height                   | int                      |height of rectangle       |
| color                    | int                      |rectangle color           |
| x                        | var                      |rectangle x-axis position |
| y                        | var                      |rectangle y-axis position |
| z                        | int                      |rectangle z-order         |
| text                     | string                   |text content
| pixelSize                | int                      |font pixelsize            |
| family                   | string                   |font family               |
| bold                     | bool                     |                          |
| textColor                | string                   |font color                |
| textOpacity              | int                      |opacity of font           |
| textStyle                | int                      |Text.Normal/ Text.Outline/ Text.Raised / Text.Sunken  |
| textOutlineColor         | string                   |outline color of font     |


### **Image properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |                          |
| height                   | int                      |                          |
| color                    | int                      |                          |
| x                        | var                      |                          |
| y                        | var                      |                          |
| z                        | int                      |                          |
| source                   | url                      | GIF Source / Image Source                         |
| fillMode                 | int                      | Image.Stretch / Image.PreserveAspectFit/ Image.PreserveAspectCrop                       | 

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |

### **1-2 Set New OSD Object** ###
**Method: SetNewOSDObject**

Brief:

Input:
```json
{
    "targetIdx":0,
    "OSD":[
        {
            "id" : "text5678",
            "root":"/usr/share",
            "fileName": "text.qml",
            "properties":{
                "width":0.2,
                "height":0.5,
                "color":"yellow",
                "x":0.5,
                "y":0.5,
                "z":3,
                "text":"preview",
                "pixelSize":0.3,
                "family":"FrutigerLT47LightCondensed.ttf",
                "bold":true,
                "textColor":"green",
                "textOpacity":0.05,
                "textStyle":0,
                "textOutlineColor":"gray"
            }
        },
        {
            "id" : "image5678",
            "root":"/usr/share",
            "fileName": "image.qml",
            "properties":{
                "width":0.02,
                "height":0.06,
                "x":0.5,
                "y":0.5,
                "z":3,
                "source":"2.png",
                "fillMode":0
            }
        }
    ]
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| id                                   | string                   | object unique ID         |
| fileName                             | string                   | file name                |
| root                                 | string                   | file initial path        |
| [Text properties](#text-properties)  | object                   |                          |
| [image properties](#image-properties)| object                   |                          |

### **Text properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |width of rectangle        |
| height                   | int                      |height of rectangle       |
| color                    | int                      |rectangle color           |
| x                        | var                      |rectangle x-axis position |
| y                        | var                      |rectangle y-axis position |
| z                        | int                      |rectangle z-order         |
| text                     | string                   |text content
| pixelSize                | int                      |font pixelsize            |
| family                   | string                   |font family               |
| bold                     | bool                     |                          |
| textColor                | string                   |font color                |
| textOpacity              | int                      |opacity of font           |
| textStyle                | int                      |Text.Normal/ Text.Outline/ Text.Raised / Text.Sunken  |
| textOutlineColor         | string                   |outline color of font     |


### **Image properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |                          |
| height                   | int                      |                          |
| color                    | int                      |                          |
| x                        | var                      |                          |
| y                        | var                      |                          |
| z                        | int                      |                          |
| source                   | url                      |                          |
| fillMode                 | int                      | Image.Stretch / Image.PreserveAspectFit/ Image.PreserveAspectCrop                      | 

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |

### **1-3 Set Auto Transition** ###
**Method: SetAutoTransition**

Brief:

Input:
```json
{  
    "millisecond": 3000
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| milisecond                           | int                      | (int of 0~any)duration of transition         |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |

### **1-4 Set Manual Transition** ###
**Method: SetManualTransition**

Brief:

Input:
```json
{  
    "step": "0.7"
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| step                                 | string                   | (string of 0~1) opacity of object         |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |


### **1-5 Set Cut Transition** ###
**Method: SetCutTransition**

Brief:

Input:
```json
{  
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| {}                                   | null                     | empty value to operate   |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |


### **1-6 Delete object** ###
**Method: DeleteObject**

Brief:

Input:
```json
{
    "targetIdx":0,
    "OSD":[
        {
            "id": "text1234"
        },
        {
            "id": "image1234"
        }
    ]
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| id                                   | string                   | object unique ID         |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |



### **1-7 Clean object** ###
**Method: CleanObject**

Brief:

Input:
```json
{  
    "targetIdx":0,
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| {}                                   | null                     | empty value to operate   |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |


### **1-8 Update object** ###
**Method: UpdateObject**

Brief:

Input:
```json
{
    "targetIdx":0,
    "OSD":[
        {
            "id" : "text1234",
            "root":"/usr/share",
            "fileName": "text.qml",
            "properties":{
                "width":0.2,
                "height":0.5,
                "color":"orange",
                "x":0.2,
                "y":0.5,
                "z":3,
                "text":"Test String",
                "pixelSize":0.4,
                "family":"FrutigerLT47LightCondensed.ttf",
                "bold":false,
                "textColor":"blue",
                "textOpacity":0.1,
                "textStyle":0,
                "textOutlineColor":"white"
            }
        },
        {
            "id" : "image1234",
            "root":"/usr/share",
            "fileName": "image.qml",
            "properties":{
                "width":0.02,
                "height":0.06,
                "x":0.2,
                "y":0.5,
                "z":3,
                "source":"1.png",
                "fillMode":0
            }
        }
    ]
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| id                                   | string                   | object unique ID         |
| fileName                             | string                   | file name                |
| root                                 | string                   | file initial path        |
| [Text properties](#text-properties)  | object                   |                          |
| [image properties](#image-properties)| object                   |                          |

### **Text properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |width of rectangle        |
| height                   | int                      |height of rectangle       |
| color                    | int                      |rectangle color           |
| x                        | var                      |rectangle x-axis position |
| y                        | var                      |rectangle y-axis position |
| z                        | int                      |rectangle z-order         |
| pixelSize                | int                      |font pixelsize            |
| family                   | string                   |font family               |
| bold                     | bool                     |                          |
| textColor                | string                   |font color                |
| textOpacity              | int                      |opacity of font           |
| textStyle                | int                      |Text.Normal/ Text.Outline/ Text.Raised / Text.Sunken  |
| textOutlineColor         | string                   |outline color of font     |

### **Image properties** ###
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| width                    | int                      |                          |
| height                   | int                      |                          |
| color                    | int                      |                          |
| x                        | var                      |                          |
| z                        | int                      |                          |
| y                        | var                      |                          |
| source                   | url                      |                          |
| fillMode                 | enumeration              | Image.Stretch / Image.PreserveAspectFit/ Image.PreserveAspectCrop                      | 

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |`


### **1-9 Read object** ###
**Method: ReadQmlObject**

Brief:

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```

### **1-10 Set full screen** ###
**Method: SetFullScreen**

Brief:

Input:
```json
{
	"material": "color",
	"color": "gray"
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| material                             | string                   | color or image           |
| color                                | string                   | color of fullscreen if material is color     |
| path                                 | string                   | path of fullscreen image if material is image|

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |



### **1-11 Reset full screen** ###
**Method: ResetFullScreen**

Brief:

Input:
```json
{  
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| {}                                   | null                     | empty value to operate   |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |

### **1-12 Set PGM** ###
**Method: SetPGM**

Brief:

Input:
```json
{  
    "targetIdx":0
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| {}                                   | null                     | empty value to operate   |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |

### **1-13 Set Preview** ###
**Method: SetPreview**

Brief:

Input:
```json
{  
    "index":0
}
```
| value                                | type                     | note                     |
|--------------------------------------|--------------------------|--------------------------|
| {}                                   | null                     | empty value to operate   |

Output:
```json
{
    "errorCode" : 0,
    "errorMessage" : "Function PASS."
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| errorCode                | int                      | Error code               |
| errorMessage             | string                   | Error message            |