# **Firmware Service - Application DBus API**

**History**

| version | date         | description                     |
|---------|--------------|---------------------------------|
| 0.1     | 2018 Oct. 12 | Initial version                 |
| 0.2     | 2018 Oct. 16 | Update LED/Volume Meter/        |
|         |              |  Key/Broadcast Interface        | 
| 0.3     | 2018 Nov. 1  | Modify volume meter data broadcast |
|         |              | message format                  |
| 0.4     | 2018 Nov. 5  | Volume meter rate is specified by |
|         |              | time and samples                |
| 0.5     | 2018 Nov. 14 | Get_led_info spilt into get_led_ability |
|         |              | and get_led_status, upgrade led json format |
| 0.6     | 2019 Apr. 15 | update signal |
| 0.7     | 2019 Nov. 5  | Modify Get Hardware information  |
| 0.8     | 2019 Nov. 7  | Add usb plug in & out and        |
|         |              | usb format success & fail in signal |
|         |              | ,add method USBFORMAT |
| 0.9     | 2019 Nov. 8  | Add method MountSmb and UmountSmb        |
| 1.0     | 2019 Nov. 14 | Add method GetStorageInfo       |
* * * * *

## [Firmware Service DBus API](#firmware-service-dbus-api)
* [1. Get Hardware information](#1-get-hardware-information)
* [2. Get Firmware information](#2-get-firmware-information)
* [3. Get Net information](#3-get-net-information)
* [4. Get USB information](#4-get-usb-information)
* [5. Check Firmware File](#5-check-firmware-file)
* [6. Start Firmware Upgrade](#6-start-firmware-upgrade)
* [7. Get Mac Address](#7-get-mac-address)
* [8. Set Mac Address](#8-set-mac-address)
* [9. Get OutMonitor Name](#9-get-outmonitor-name)
* [10. Get Serial Num](#10-get-serial-num)
* [11. Set Serial Num](#11-set-serial-num)
* [12. Set SPI](#12-set-spi)
* [13. Set CECDISP](#13-set-cecdisp)
* [14. Get CPU Thermal](#14-get-cpu-thermal)
* [15. Image File Format Translate](#15-image-file-format-translate)
* [16. Get LED Ability](#16-get-led-ability)
* [17. Get LED Status](#17-get-led-status)
* [18. Set LED Color](#18-set-led-color)
* [19. Set Volume Meter Rate](#19-set-volume-meter-rate)
* [20. Get Volume Meter Rate](#20-get-volume-meter-rate)
* [21. Get Slider Value](#21-get-slider-value)
* [22. Signal](#22-signal)
* [23. Set Ether Gadget](#23-set-ether-gadget)
* [24. Set Usb Format](#24-set-usb-format)
* [25. Mount Smb](#25-mount-smb)
* [26. Umount Smb](#26-umount-smb)
* [27. Get Storage Information](#27-get-storage-information)

* * * * *

### **1. Get Hardware information**
**Method: GetHWInfo**

Brief: Get hardware infomation

Input:
```<none>
```

Output:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "BoardVer" : "A-01",
        "ModelName" : "uc9020",
        "SN" : "0000000000",
        "Security" : "0",
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| BoardVer                 | string                   |                          |
| ModelName                | string                   |                          |
| SN                       | string                   |                          |
| Security                 | int                      |                          |

| Security                 | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 0                        | int                      | key ready                |
| 1                        | int                      | key need programming     |
| 2                        | int                      | key not match            |

* * * * *

### **2. Get Firmware information**
**Method: GetFWInfo**

Brief: Get firmware infomation

Input:
```<none>
```

Output:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "BootType" : "Normal",
        "BuildVersion" : "17083157",
        "FWVersion" : "V1.0.061",        
        "LEDVersion" : "V1.0.61",
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| BootType                 | string                   |                          |
| FWVersion                | string                   |                          |
| LEDVersion               | string                   |                          |
| BuildVersion             | string                   |                          |

| BootType                 | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| Rescue                   | string                   | Rescue partition         |
| Normal                   | string                   | Normal Partition         |
| NFS                      | string                   | Network Booting          |
| RW                       | string                   | Deprecated Booting       |
| N/A                      | string                   |                          |

* * * * *

### **3. Get Net information**
**Method: GetNETInfo**

Brief: Get net infomation

Input:
```json
{
    "Name":"eth0"
}
```

Output:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "Carrier" : "1",
        "Duplex" : "full",
        "NetSpeed" : "1000"
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| Carrier                  | string                   |                          |
| Duplex               	   | string                   |                          |
| NetSpeed      		   | string                   |                          |


* * * * *

### **4. Get Usb information**
**Method: GetUSBInfo**

Brief: Get usb infomation

Input:
```json
{
    "Num": 0
}
```

| Num	                   | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 0		                   | int                      |usb3.0, usb2.0		     |
| 1		                   | int                      |usb2.0				     |
| 2		                   | int                      |usb2.0				     |

Output:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "USBSpeed" : 480
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| USBSpeed                 | int                      |                          |


* * * * *

### **5. Check Firmware File**
**Method: CheckFWFile**

Brief: Check firmware file

Input:
```json
{
    "filePath" : "/full/path/to/the/file"
}
```

Output:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "ETC" : "250",
        "TargetFWVersion" : "V1.0.063",
        "TargetLEDVersion" : "V1.0.0.2",
        "TargetBuildVersion" : "17090167"
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| ETC                      | int                      |                          |
| TargetFWVersion          | string                   |                          |
| TargetLEDVersion         | string                   |                          |
| TargetBuildVersion       | string                   |                          |

* * * * *

### **6. Start Firmware Upgrade**
**Method: StartFWUpgrade**

Brief: Start firmware upgrade

Input:
```json
{
    "filePath" : "/full/path/to/the/file"
}
```

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |

* * * * *

### **7. Get Mac Address**
**Method: GetMacAddress**

Brief: Get Mac Address

Input:
```json
{
    "Index" : 0
}
```

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
	"result" : {
        "MacAddress" : "12:34:54:78:AB:CD"
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| MacAddress               | string                   | 			             |

* * * * *

### **8. Set Mac Address**
**Method: SetMacAddress**

Brief: Set Mac Address

Input:
```json
{
    "Index" : 0,
    "NMADR" : "12:34:54:78:AB:CD"
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| Index                    | int                      | 		                 |
| NMADR                    | string                   |New Mac Address           |

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |

* * * * *

### **9. Get OutMonitor Name**
**Method: GetOutMonitorName**

Brief: Get Output Monitor Name

Input:
```json
{
    "Index" : 0
}
```
| Index	                   | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 0		                   | int                      |Output HDMI1		         |
| 1		                   | int                      |Output HDMI2			     |
| 2		                   | int                      |Output HDBASET		     |


Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "NAME" : "BNQ"
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| NAME                     | string                   | Output Monitor Name      |

* * * * *

### **10. Get Serial Num**
**Method: GetSerialNum**

Brief: Get Serial Num

Input:
```<none>
```

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "SerialNum" : "132456789abcde"
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| SerialNum                | string                   | Serial Number   	     |


* * * * *

### **11. Set Serial Num**
**Method: SetSerialNum**

Brief: Set Serial Num

Input:
```json
{
    "Num" : "12345678912345678912345678912345678"
}
```
| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| Num      		           | string                   | size:35 			     |


Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |

<br>

| ErrCode                  | value                    | note                     |
|--------------------------|--------------------------|--------------------------|
| 0          	           | PASS                     | 		                 |
| 1     	               | FAIL                     | 			             |
| 2		                   | PASS                     | Serial Number too long   |


* * * * *

### **12. Set SPI**
**Method: SetSPI**

Brief: Set SPI

Input:
```json
{
    "Index" : 1
}
```
| Index                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 1                 	   | int            	      | USB-hub			         |

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |



* * * * *

### **13. Set CECDISP**
**Method: SetCECDISP**

Brief: Set CECDISP

Input:
```json
{
    "CECIndex" : 1,
    "DispIndex" : 1
}
```
| CECIndex                 | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 1		                   | int                      | only Hybird            	 |
| 2                  	   | int            	      | Hybird + 4K 	         |

<br>

| DispIndex                | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| 2                  	   | int            	      | HDMI1			         |

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |

* * * * *
### **14. Get CPU Thermal**
**Method: GetTemp**

Brief: Get CPU realtime thermal value

```<none>
```

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "Temp" : 50
    }
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| Temp                     | int                      | Thermal value            |

<br>

| ErrCode                  | ErrMsg                   | note                     |
|--------------------------|--------------------------|--------------------------|
| 0                        | PASS                     |                          |
| 1                        | FAIL                     |                          |

* * * * *

### **15-image-file-format-translate**
**Method: ImageFileFormatTranslate**

Brief: Image file format translation

Input:
```json
{
    "Opcode" : 0,
    "SrcPath": "Full/Path/With/File/Name",
    "DstPath": "Full/Path/With/File/Name"
}
```
| value                    | type                     | note                      |
|--------------------------|--------------------------|---------------------------|
| Opcode                   | int                      | 0: BMP to YUY2            |
|                          |                          | 1: JPG to YUY2            |
|                          |                          | 2: PNG to YUY2            |
| SrcPath                  | string                   | source filename with path |
| DstPath                  | string                   | dest. filename with path  |

Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
}
```

| value        | type      | note      				 |
|--------------|-----------|-------------------------|
| ErrCode      | int       |                         |
| ErrMsg       | string    | Error message           |

<br>

| ErrCode      | ErrMsg                            | note          |
|--------------|-----------------------------------|---------------|
| 0            | PASS                              |               |
| 1            | Unsupported File                  |               |
| 2            | Translation Error                 |               |
| 3            | SRC File Not Found                |               |
| 4            | Opcode out of range               |               |
| 5            | Weight of SRC File is Odd Number  |               |
* * * * *

### **16-get-led-ability**
**Method: GetLedAbility**

Brief: Get led board led ability

Input:
```json

```
Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
    "result" : {
        "LedAbility": [
        { "Key": 0, "Colors": 3, "Name": "SCENE1" },
        { "Key": 1, "Colors": 3, "Name": "SCENE2" },        
        ]
    },
      
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |
| LedAbility   | array     |                          |
| Key          | int       | key index                |
| Colors       | int       | Num of supporting colors |
| Name         | string    | key name                 |

* * * * *

### **17-get-led-status**
**Method: GetLedStatus**

Brief: Get led board led current status

Input:
```json

```

Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
    "result" : {
        "Autotest" : 0,
        "LedStatus": [
        { "Key": 0, "Twinkling": 0, "Color1": 0 },
        { "key": 1, "Twinkling": 1, "Color1": 0, "Color2": 1, "Time": 3  },
        ]
    },        
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |
| LedStatus    | array     |                          |
| Autotest     | int       | 0: off   1: open         |
| Twinkling    | bool      | 0: led show fixed color  |
|              |           | 1: flash with 2 colors   |
| Color1       | int       | 1st color                |
| Color2       | int       | 2nd color                |
| Time         | int       | twinkling time           |
|              |           | unit:100ms               |

* * * * *

### **18-set-led-color**
**Method: SetLedColor**

Brief: Set led color or twinkling

Input:
```json
{
    "LedColors" : [
        { "Key": 0, "Twinkling": 0, "Color1":1 },
        { "Key": 1, "Twinkling": 0, "Color1":2 },
        { "Key": 2, "Twinkling": 0, "Color1":0 },
        { "Key": 3, "Twinkling": 1, "Color1":1, "Color2": 2 },
        { "Key": 4, "Twinkling": 1, "Color1":1, "Color2": 2, "Time": 3 }
    ]
}
```
| value                    | type                     | note                        |
|--------------------------|--------------------------|-----------------------------|
| LedColors                | Array                    |                             |
| Key                      | int                      | key index                   |
| Twinkling                | bool                     | 0: twinkling                |
|                          |                          | 1: single color             |
| Color1                   | int                      | led color index             |
| Color2                   | int                      | 2nd led color when flashing |
| Time                     | int                      | unit: 100ms                 |
|                          |                          | Default: 3                  |

Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |

* * * * *

### **19-set-volume-meter-rate**
**Method: SetVolumeMeterRate**

Brief: Modify volume meter broadcast rate

Input:
```json
{
    "Time": 1000,
    "Samples": 20
}
```
| value                    | type                     | note                        |
|--------------------------|--------------------------|-----------------------------|
| Time                     | int                      | DBus update rate, unit is ms |
|                          |                          | 0 is disable, default is 1000 |
| Samples                  | int                      | Samples per one DBus message |
|                          |                          | max is 20, default is 20    |

Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |

* * * * *

### **20-get-volume-meter-rate**
**Method: GetVolumeMeterRate**

Brief: Get volume meter broadcast rate setting

Input:
```<none>
```
Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
    "Time": 1000,
    "Samples": 20
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |
| Time         | int       | current update rate in ms |
| Samples      | int       | samples per update message |

* * * * *

### **21-get-slider-value**
**Method: GetSliderValue**

Brief: Get slider value as position

Input:
```<none>
```
Return:
```json
{
    "ErrCode": 0,
    "ErrMsg" : "PASS",
    "Value": 100
}
```

| value        | type      | note      				  |
|--------------|-----------|--------------------------|
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |
| Value        | int       | Current Value            |
|              |           | 0 <= Value <= 255        |

* * * * *

### **22. Signal**
**Signal: FWService**

Brief: Broadcast Event

Result:
```json
{
    "event" : "UPGRADE START",
    "eventcode" : 0,
    "Slider" : 100,
    "Volume Meter" : {
        {
            "HDMI1": [0, 0],
            "HDMI2": [0, 0],
            "MIC"  : [0, 0],
            "LINEIN" : [0, 0],
            "STREAMING": [0, 0],
        },
        {
            "HDMI1": [0, 0],
            "HDMI2": [0, 0],
            "MIC"  : [0, 0],
            "LINEIN" : [0, 0],
            "STREAMING": [0, 0],
        },
    },
    "Usb Plug In Result" : 
	{
		"Status" : 3,
		"StatusMessage" : "USB file not exist",
		"Speed" : 0,
		"UUID" : "",
        "Mount" : "/run/media/sda1",
        "FileSystem"  : "/dev/sda1"
	},
    "Usb Format Success" : 
	{
		"Mount" : "/run/media/sda1",
		"Speed" : 17.326564788818359,
		"UUID"  : "FEDA-AS54",
        "FileSystem"  : "/dev/sda1"
	},
    "Usb Format Fail" : 
	{
		"ErrMsg" : "USB mount fail",
		"Error code" : 8
	},
    "Volume Knob" : 0,
    "Key Code": 0,
    "Key Name": "KEY_SCENSE1"
}

```
| event                    | type                     | note                             |
|--------------------------|--------------------------|----------------------------------|
| event                    | string                   |     			                 |
| eventcode                | int                      |           				         |
| Slider                   | int                      | transition slider level          |
|                          |                          | 0 <= slider <= 255               |
| Volume Meter             | list of dictionary       | volume level for each audio path |
| HDMI1                    | list of int              | [l, r] unit is 100 db            |
| HDMI2                    | list of int              | [l, r] unit is 100 db            |
| MIC                      | list of int              | [l, r] unit is 100 db            |
| LINEIN                   | list of int              | [l, r] unit is 100 db            |
| STREAMING                | list of int              | [l, r] unit is 100 db            |
| Usb Plug In Result       | list of dictionary       | volume level for each audio path |
| Status                   | int                      |    			                     |
| StatusMessage            | string                   |     			                 |
| Mount                    | string                   |    			                     |
| Speed                    | float                    | usb average write speed   MB/s   |
| UUID                     | string                   | usb uuid                         |
| FileSystem               | string                   |  			                     | 
| Usb Format Success       | list of dictionary       | volume level for each audio path |
| Mount                    | string                   |    			                     |
| Speed                    | float                    | usb average write speed  MB/s    |
| UUID                     | string                   |  			                     | 
| FileSystem               | string                   |  			                     | 
| Usb Format Fail          | list of dictionary       | volume level for each audio path |
| Error code               | int                      |    			                     |
| Error message            | string                   |     			                 | 
| Volume Knob              | int                      | delta value                      |
|                          |                          | + value: clockwise               |
|                          |                          | - value: counterclockwise        |
| Key Code                 | int                      | Key code                         |
| Key Name                 | string                   | Key name                         |

**Event Code Table**

| event                           | eventcode         | note                     |
|---------------------------------|-------------------|--------------------------|
| UPGRADE_START                   | 0                 | Firmware Upgrade Event   |
| UPGRADE_UNTAR                   | 1                 |                          |
| UPGRADE_UNTAR_OK                | 2                 |                          |
| UPGRADE_UNTAR_FAIL              | 3                 |                          |
| UPGRADE_SYTEM_UPGRADE           | 4                 |                          |
| UPGRADE_LED_UPGRADE             | 5                 |                          |
| UPGRADE_COMPLETE                | 6                 |                          |
| UPGRADE_FILENOTFOUND            | 7                 |                          |
| UPGRADE_FAIL                    | 8                 |                          |
| UPGRADE_DEVICE_NOT_FOUND        | 9                 |                          |
| UPGRADE_FILE_INVALID            | 10                |                          |
| FACTORY_ON                      | 11                |                          | 
| FACTORY_OFF                     | 12                |                          |
| FACTORY_RESET_DEFAULT           | 13                |                          |
| SLIDEBAR_DATA                   | 14                |   Transition             |
| VOLUMEMETER_DATA                | 15                |                          |
| VOLUME_CHANGE_DATA              | 16                |                          |
| KEY_CODE                        | 17                |                          |
| THERMAL_DATA_LOSS               | 18                |                          |
| THERMAL_HIGH                    | 19                |                          |
| GADGET_ATTACHED                 | 20                |                          |
| GADGET_NOT_ATTACHED             | 21                |                          |
| GADGET_DEFAULT                  | 22                |                          |
| GADGET_ADDRESSED                | 23                |                          |
| GADGET_UNKNOWN                  | 24                |                          |
| PAIRING_ERROR                   | 25                |                          |
| BURN_ON                         | 26                |                          |
| BURN_OFF                        | 27                |                          |
| USB_PLUG_IN                     | 28                |                          |
| USB_PLUG_OUT                    | 29                |                          |
| USB_FORMAT_SUCCESS              | 30                |                          |
| USB_FORMAT_FAIL                 | 31                |                          |

**Key Index Table**

| Key Code                        | key name          | note                     |
|---------------------------------|-------------------|--------------------------|
| 0x00                            | KEY_SCENSE1       |                          |
| 0x01                            | KEY_SCENSE2       |                          |
| 0x02                            | KEY_SCENSE3       |                          |
| 0x03                            | KEY_SCENSE4       |                          |
| 0x04                            | KEY_SCENSE5       |                          |
| 0x05                            | KEY_SCENSE6       |                          |
| 0x06                            | KEY_SCENSE7       |                          |
| 0x07                            | KEY_SCENSE8       |                          |
| 0x10                            | KEY_PGM           |                          |
| 0x11                            | KEY_MUTE          |                          |
| 0x12                            | KEY_HDMI1         |                          |
| 0x13                            | KEY_HDMI2         |                          |
| 0x14                            | KEY_AFV1          |                          |
| 0x15                            | KEY_AFV2          |                          |
| 0x16                            | KEY_MIC           |                          |
| 0x17                            | KEY_LR            |                          |
| 0x20                            | KEY_SRCPGM        |                          |
| 0x21                            | KEY_GO            |                          |
| 0x22                            | KEY_PAUSE         |                          |
| 0x23                            | KEY_AUTO          |                          |
| 0x24                            | KEY_CUT           |                          |


**Usb plug in**

| Usb plug in event                           | error code   | note               |
|---------------------------------------------|--------------|--------------------|
| Pass                                        | 0            |                    |
| USB is not usb3                             | 1            |                    |
| USB is usb3 but filesystem not exfat        | 2            |                    |
| USB file not exist in usb                   | 3            |                    |
| USB not single partition                    | 4            |                    |
| USB file untar fail                         | 5            |                    |
| USB file decode fail                        | 6            |                    |
| USB info file not exist                     | 7            |                    |
| USB speed too slow                          | 8            |                    |
| USB information is NULL                     | 9            |                    |
| USB uuid is different from uuid in file     | 10           |                    |


**Usb format fail**

| Usb format fail event                       | error code   | note               |
|---------------------------------------------|--------------|--------------------|
| USB node is null                            | 1            |                    |
| USB wipe fail                               | 2            |                    |
| USB merge single partition fail             | 3            |                    |
| USB speed test fail                         | 4            |                    |
| USB format exfat fail                       | 5            |                    |
| USB get uuid fail                           | 6            |                    |
| USB make dir fail                           | 7            |                    |
| USB mount fail                              | 8            |                    |
| USB write info fail                         | 9            |                    |
| USB encode fail                             | 10           |                    |
| USB tar fail                                | 11           |                    |
| USB speed too slow                          | 12           |                    |
| USB set label fail                          | 13           |                    |


* * * * *

### **23-set-ether-gadget**
**Method: SetEtherGadget**

Brief: Set Ether Gadget (g_ether) Reload 

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
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |

* * * * *

### **24-set-usb-format**
**Method: USBFORMAT**

Brief: Set Usb Format

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
| ErrCode      | int       |                          |
| ErrMsg       | string    | Error message            |


### **25. Mount Smb**
**Method: MountSmb**

Brief: Mount smb

Input:
```json
{
    "IP" : "10.3.150.127",
    "Path" : "share\uc9020",
    "UserName" : "share",
    "Password" : "asd112233"
}
```
| value                 | type              | note                     |
|-----------------------|-------------------|--------------------------|
| IP                    | string            | smb IP                   |
| Path                  | string            | smb path                 |
| UserName              | string            | smb username             |
| Password              | string            | smb password             |

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "MountPath" : "/media/smb1"
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |
| MountPath                | string                   | smb mount path           |


### **26. Umount Smb**
**Method: UmountSmb**

Brief: Umount smb

Input:
```json
{
    "MountPath" : "/media/smb1"
}
```
| value                 | type              | note                     |
|-----------------------|-------------------|--------------------------|
| MountPath             | string            | smb mount path           |

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
}
```

| value                    | type                     | note                     |
|--------------------------|--------------------------|--------------------------|
| ErrCode                  | int                      | Error code               |
| ErrMsg                   | string                   | Error message            |


### **27. Get Storage Information**
**Method: GetStorageInfo**

Brief: Get Storage Information

Input:
```<none>
```

Return:
```json
{
    "ErrCode" : 0,
    "ErrMsg" : "PASS",
    "result" : {
        "FileSystem" : "/dev/sda1",
        "Mount" : "/run/media/sda1", 
        "Speed" : 17.819999694824219,
        "UUID" : "8D14-00BC",
        "Status" : 0,                                                                        "StatusMessage" : "Pass"
   } 
}
```

| value                    | type                     | note                             |
|--------------------------|--------------------------|----------------------------------|
| ErrCode                  | int                      | Error code                       |
|                          |                          | 0:pass                           |
|                          |                          | 1:fail(plug out)                 |
|                          |                          | 2:busy(when format)              |
| ErrMsg                   | string                   | Error message                    |
| FileSystem               | string                   |  			                     | 
| Mount                    | string                   |    			                     |
| Speed                    | float                    | usb average write speed   MB/s   |
| UUID                     | string                   | usb uuid                         |
| Status                   | string                   | usb plug in event id             |
| StatusMessage            | string                   | usb plug in event message        |

| GetStorageInfo Status                       | Status       | note               |
|---------------------------------------------|--------------|--------------------|
| Pass                                        | 0            |                    |
| USB is not usb3                             | 1            |                    |
| USB is usb3 but filesystem not exfat        | 2            |                    |
| USB file not exist in usb                   | 3            |                    |
| USB not single partition                    | 4            |                    |
| USB file untar fail                         | 5            |                    |
| USB file decode fail                        | 6            |                    |
| USB info file not exist                     | 7            |                    |
| USB speed too slow                          | 8            |                    |
| USB information is NULL                     | 9            |                    |
| USB BUSY                                    | 10           |                    |
| USB PLUGOUT                                 | 11           |                    |
| USB uuid is different from uuid in file     | 12           |                    |
