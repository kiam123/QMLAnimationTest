## Milestone
### 2018/11/12 - 2018/11/16 SQA1
1. the part of iPad first Page (switch profile, audio volumn, streaming bitrate)
2. front panel, LED light

### 2018/12/03 - 2018/12/10 SQA2
1. iPad settings page
2. audio page
3. hamburger menu (import/export)
4. hotplug

### 2018/12/20 - 2018/12/25 SQA3 (Full function)
1. all page
2. editting page (depend on APP, maybe use postman)

### 2018/01/02 - 2018/01/07 SQA5 (Full function + stress)

### 2018/01/12 - 2018/01/13 SQA6 close bug

### 2019/01/14 ETD

---

<br>
<br>
<br>
<br>
<br>

(11/27)

### 3A10

### 3A20

### 3B00

The following information are meomoed for the discussion for next meeting.

#### Settings

1. This API `/api/v1.0/network/interfaces/dns` in the document is different from the actual url `/api/v1.0/network/dns`, 
please update the document or API and notify the changes in the document.

2. Currently, the transition period for `/api/v1.0/streamer/transition` with `{"mode": "auto","duration": 500}` is stored in 
the App, but it will __NEITHER__ save to UC9020 __NOR__ export to bson project file since it is not defined in the bson format.
Storing transition perios is not required since the API provides the value for the App, but storing the value in the __PROJECT FILE__ is necessary.
Please discuss this issue for the next meeting.

3. The video quality section in the API return JSON is String type as followed,

```
{
    "profile": "baseline",
    ...
    "quality": "quality",
```

with the following options,

> Allowed values: "manual", "quality", "normal", "fluent"


However, a list of capibilty should be providied by UC9020 which contains the following information 
since the App do not know what kbps should be referred to by different resolution.

- Resoultion index
- Quality Type
- Kbps which Quality Type should be referred to

eg:

```JSON
[
    {
        "resolutionIdx": 0,
        "quality": xxx,
        "normal": xxx,
        "fluent": xxx,
    },
    ....
]
```

The JSON formation could be any favor format but not limited by the example.

(11/26)

### 3A10

### 3A20

### 3B00

#### Settings

1. Will 3A10 provide further APIs on video quality / audio delays? Or just modify the video / audio codec APIS AS-IS?
2. Will DNS API be ready? 

#### Websocket streaming behavior

The websocket streaming event works since the last QA test, and the information in the event is clear enough to 
integrade with the UI, but the channel names for the event may not consistant between UC9020 and the App and thus 
failed the QA test on streaming speed.

The issues should be discussed as the following,

1. Should we rely the streaming start / stop state based on websocket event? Since we need to synchronize the 
streaming start / stop action from the physical controller, we need to implement this feature; however, it will
lead to the delay (probably 1~2 seconds) after clicking the streaming start (Record) button.
2. Should we also add the checking on the result (200 OK) of streamer start / stop API in the App which removed 
previously to improve the user experience without delay.


(11/12)

### 3A10
1. shapshots sometimes can't get file


### 3A20

### 3B00


(11/05)

#### 3A10

#### 3A20

#### 3B00

Currently the mechanism to deliver the drag event from Transition Bar to RestfulAPI are described as following,

1. While the transition bar is dragging, the controller will collect __unique__ values from the bar for every 50 milliseconds.
2. The controller will bypass the dragged values __directly__ and update the UI.
3. If the controller collects any valid values, which is a list of integers, it will only fire the RESTFul API with the last value in the list.
4. At the same time, it will also update the Transition Bar UI if there is any Transition Bar update event from Websocket.

There will be some side effects on the Transition Bar UI due to the inconsistency of transition bar values between the app and the UC9020 device, and we will discuss abou the issue during the meeting.
Comments and suggestions are welcome during the discussion.

(10/31)

#### 3A10

#### 3A20

#### 3B00

Correction about the last issue : "Channel type value is still MISSIING!!!" means there is still no descrption in API document about how to specify the channel type. By discussion, the Channel type is identified by the JSON Chnannel "name" field.
The values of the Channel name is notified as following:

* "Preview" - preview channel
* "Program" - program channel

Please add this in into API document.


(10/29)

#### 3A10

#### 3A20

#### 3B00

* Please add changelog at the beginning of the document, or no one knows what APIs are added, changed, or modififed.
* In Get All Audio Settings API, the response does not tell what "input" or "output" means.
* In Get One Input Setting API, there is nothing that tells what iput audio id or name means, and there is no way to identify which channel is which. Examples DO NOT COUNT AS DOCUMENTS!!!!! Please explain that maximum and minimum value in the document.
* I think it's better to give a detail description about the paramenters in an API, and just atttach the link to the description if the paramenters are identical. Get Layout API is a good example.
* Please tell which part of the apt matches the following source
   - HDMI IN 1
   - HDMI IN 2
   - MIC
   - LINE IN
   - PGM
   - EAR PHONE
* There is no "Audio Follow Video" in API as well.
* Channel type value is still MISSIING!!!

#### UX

  * only bootup can firmware upgrade combine key trigger (USB dongle upgrade) >>check UX spec CH.7
  * editting page TBD => video + frame (Suzuki) >>check UX spec CH.3
  * timer TBD (reference OBS) (Suzuki) >>OBS also has timer(< >streaming timer)
  * The "unavailable background" image needs multiple language (UX)>>use image without wording
  * can't streaming without ipad (Ethan) >>next stage do a config APP for mobile phone
	* 手動轉場到途中時，按下自動轉場的行為 >>not allowed to use cut/auto when using putt
	* 系統儲存空間有多少？>>according to the rest storage 
	* OSD疊圖可疊多少層？>>please test the ability, than we could set a limit on UI

(10/22)
### question
#### 3A10
* Websocket document is still missing
* __PLEASE inform any changes on API path or data structure AFTER pushing to daily build__, it __WILL IMMIDATELY AFFECT__ the operation of the app.
* Please discuss with 3A20 team about any changes on RestFUL APIs, inconsistency between the real API and the document is a real pain on the ass. It makes the document nothing more but a LIE.


(10/18)
### question
* transition time 0 - 3000 ms (using scroll bar) -- done
* audio delay +- 300 ms (using scroll bar) -- done
* streaming quality
	*  fluent, high, middle, custermize (quality select)
	*  custermize (scroll bar min/max) kbps (using scroll bar)
* bitrate update per sec
*  only bootup can firmware upgrade combine key trigger (USB dongle upgrade)
*  editting page TBD => video + frame (Suzuki)

### Incomplete
*  background color can be set (3A10) -- done
*  without layout setting, only background (3A10) -- done
* timer TBD (reference OBS) (Suzuki)
*  scene name (3A20) 10/17 -- done
*  firmware upgrade API (3A20)  10/18 -- done
	*  (UX) need to stop streaming
	*  (UX) hangon all control
*  file sync use BSON (3A20/3B00)
*  bitrate data websocket (10/17)
*  Mic/audio Volume control -- done
*  Mic/audio Volume meter (10/??) -- done
*  hamberger UI (???) (Suziki) -- done
*  hamberger API (3A20)

---

(10/08)
* aspect ratio information (3A10) lock get (OK)
* UX delivers Video edit page first (UX)
* The "unavailable background" image needs multiple language (UX)
* DHCP (3A10)
* => in planing
* can't streaming without ipad (Ethan)

---

### 2018/10/26

#### 3A10

#### 3A20
* 手動轉場到途中時，按下自動轉場的行為
* 系統儲存空間有多少？
* OSD疊圖可疊多少層？
* 直播暫停圖示

#### 3B00

---
### 2018/10/15

#### 3A10

#### 3A20
* auto transition setting should use time(s or ms) instead of step per frame
* get streaming out (rtmp/rtp) status (low priority)

#### 3B00
* Live timer sync機制
* Scene name API
* Firmware Upgrade API
* 檔案同步機制能否用BSON?

---
### 2018/10/08

* aspect ratio information (3A10) lock get
* transparency mode, Does it have other solution?(3A10) No other solution => TBD
* transparency mode, color key decision? (3A10, HW) ??? 效果部份需要時間再做驗證 TBD
* UX delivers Video edit page first (UX)
* The background image needs transcode(3A10) 1920X1080 TBD => UX prefer png&jpg
* The "unavailable background" image needs multiple language (UX)
* Codec settings (3A10) bitrate, audio delay
* PGM-OSD (3A20)
* DHCP (3A10)
* can't streaming without ipad (Ethan)

---

#### 3A10
1.
2.

#### 3A20
|Controller待辦清單&其他缺少功能
|--
|1. 串流狀態更新
|2. OSD轉場
|3. 前面版控制
|4. 聲音控制
|5. 輸入源解析度改變後畫面變形的Bug？
|6. 背景圖匯入
|7. 輸入源2之A&B埠同時使用時的"Unavailable"圖
|8. Streaming Video Codec Setting
|9. Streaming Audio Codec Setting
|10. PGM-OSD是否可即時編輯？
|11. Scene編輯的Import / Export 實作方式？
|12. 去背模式？簡易模式？
|13. 系統IP設定？DNS設定？
|14. 新增AssetControl負責背景圖和OSD
---
1. 可編輯設定資訊，匯入匯出實作方式
2. background編輯選擇方式
3. 變形問題


#### 3B00
1. 接下來要完成的scope? 看是要以頁面溝通, 或是以功能來切.
2. UC9020的板子是否能在jenkins過期前給台南一套, 目前是手動更改recipe to 180926, 但似乎只能保留一個月(10/26?)
3. 此外API在無新版子之前, 能否持續更新並可給舊板子可使用並測試

