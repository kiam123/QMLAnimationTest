# **Watchdog DBus interface API** #

**History**

| version | date        | description                     |
|---------|-------------|---------------------------------|
| 0.1     | 2018 Jun. 5 | Initial version                 |

* * * * *
## [Watchdog Service DBus API](#watchdog-dbus-api)
* [1. DBus Interface](#1-dbus-interface)
* [2. Report Format](#2-report-format)
* [3. Module List](#3-module-list)
* * * * *
### **1. DBus Interface** ###

**Destination : com.aten.aph.watchdog**
**Path : com/aten/aph/watchdog**

### **2. Report format** ###
**Method: report**
Brief: Report module status or request

Input:
```json
{
    "Module" : "MediaEngine",
    "Reset"  : 0,
    "Restart": 0,
    "Reason" : ""
}
```
| value      | type         | note                           |
|------------|--------------|--------------------------------|
| Module     | string       | name of module                 |
| Reset      | int          | request reset                  |
| Restart    | int          | request restart                |
| Reason     | string       | reason for reset or restart    |

Return:
```json
{
    "result" : true,
    "error"  : ""
}
```
| value       | type      | note               |
|-------------|-----------|--------------------|
| result      | bool      | "true" or "false"  |
| error       | string    | Error message      |

### **3. Module List** ###
**a. MediaEngine**
**b. FWService**