#!/usr/bin/python
# coding=UTF-8

import cmd
import os
import sys
import string
import termios
import time
import argparse
import re
from threading import Thread
import time
import subprocess

EXEC = 'dbus-send'

CMD_GetVinInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVinInfo string:"
CMD_GetVinEgnInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVinEgnInfo string:"
CMD_GetVinSrcInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVinSrcInfo string:"
CMD_SetVideoRouteTable = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVideoRouteTable string:"
CMD_SetVirtualVinLayout = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVirtualVinLayout string:"
CMD_SetVinSrc = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVinSrc string:"
CMD_GetVinSrc = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetCurrentVinSrc string:"
CMD_GetVinSrcModeInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVinSrcModeInfo string:"
CMD_SetVinSrcMode = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVinSrcMode string:"
CMD_SetVinSrcEdidMode = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVinSrcEdidMode string:"
CMD_GetVinSrcEdidMode = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVinSrcEdidMode string:"
CMD_GetVoutCount = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVoutCount string:"
CMD_GetVoutMode = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVoutMode string:"
CMD_SetVoutMode = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutMode string:"
CMD_GetStmVinInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetStreamingVinEgnInfo string:"
CMD_StartStmVin = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.StartStreamingVinEgn string:"
CMD_StopStmVin = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.StopStreamingVinEgn string:"
CMD_GetStmVoutInfo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetStreamingVoutEgnInfo string:"
CMD_StartStmVout = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.StartStreamingVoutEgn string:"
CMD_StopStmVout = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.StopStreamingVoutEgn string:"
CMD_GetStmVoutProp = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetStreamingVoutEgnProperty string:"
CMD_SetStmVoutProp = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetStreamingVoutEgnProperty string:"
CMD_SetVoutAttr = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutAttr string:"
CMD_SetVoutFreeze = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutAttr string:"
CMD_SetVoutBlank = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutAttr string:"
CMD_SetVoutCapture = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutAttr string:"
CMD_GetVoutAttr = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.GetVoutAttr string:"
CMD_SetVoutStreamGo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutStreamGo string:"
CMD_SetVchLogo = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVchLogo string:"
CMD_SetVirtualVinBg = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.SetVirtualVinBg string:"
CMD_SetVoutTransit = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutTransit string:"
CMD_SetVoutTransitRatio = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph com.aten.aph.media.SetVoutTransitRatio string:"
CMD_GuiService_CreateObject = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.guiservice /com/aten/aph/guiservice com.aten.aph.guiservice.CreateObject string:"
CMD_GuiService_DeleteObject = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.guiservice /com/aten/aph/guiservice com.aten.aph.guiservice.DeleteObject string:"
CMD_GuiService_UpdateObject = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.guiservice /com/aten/aph/guiservice com.aten.aph.guiservice.UpdateObject string:"

param_SetVideoRouteTable1 = '\'{"VideoRouteTable":[{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}}]}\''
param_SetVideoRouteTable2 = '\'{"VideoRouteTable":[{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}},{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}}]}\''
param_SetVideoRouteTable3 = '\'{"VideoRouteTable":[{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}},{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}},{"VoutIndex":%d,"VinIndex":%d,"VinSrcIndex":%d,"OutputLayout":{"RenderMode":"auto"}}]}\''
param_ChangeRenderMode = '\'{"VideoRouteTable":[{"VoutIndex":%d,"VinIndex":%d,"OutputLayout":{"RenderMode":"%s"}}]}\''
param_SetVoutLayout = '\'{"VideoRouteTable":[{"VoutIndex":%d,"VinIndex":%d,"OutputLayout":{"SrcX":%d,"SrcY":%d,"SrcW":%d,"SrcH":%d,"DstX":%d,"DstY":%d,"DstW":%d,"DstH":%d,"RenderMode":"manual"}}]}\''

param_GetVinInfo = '\'{}\''
param_GetVinEgnInfo = '\'{}\''
param_GetVinSrcInfo = '\'{"VinEgnIndex":%d}\''
param_SetVirtualVinLayout_PBP = '\'{"VirtualVinIndex":%d,"CanvasW":1920,"CanvasH":1080,"SubChannelNum":2,"SubChannelLayout":[{"VinIndex":%d,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":%d,"ComposeY":%d,"ComposeW":%d,"ComposeH":%d,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":%d,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":%d,"ComposeY":%d,"ComposeW":%d,"ComposeH":%d,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
param_SetVirtualVinLayout_PIP = '\'{"VirtualVinIndex":%d,"CanvasW":1920,"CanvasH":1080,"SubChannelNum":2,"SubChannelLayout":[{"VinIndex":%d,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":%d,"ComposeY":%d,"ComposeW":%d,"ComposeH":%d,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":%d,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":%d,"ComposeY":%d,"ComposeW":%d,"ComposeH":%d,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
param_SetVirtualVinLayout_three = '\'{"VirtualVinIndex":0,"CanvasW":1280,"CanvasH":720,"SubChannelNum":3,"SubChannelLayout":[{"VinIndex":0,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":320,"ComposeY":0,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":5,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":0,"ComposeY":360,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":2,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":640,"ComposeY":360,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
param_SetVirtualVinLayout_quad = '\'{"VirtualVinIndex":0,"CanvasW":1280,"CanvasH":720,"SubChannelNum":4,"SubChannelLayout":[{"VinIndex":0,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":0,"ComposeY":0,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":5,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":640,"ComposeY":0,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":2,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":0,"ComposeY":360,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":3,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":640,"ComposeY":360,"ComposeW":640,"ComposeH":360,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
param_SetVirtualVinLayout_control = '\'{"VirtualVinIndex":%d,"CanvasW":1280,"CanvasH":720,"SubChannelNum":6,"SubChannelLayout":[{"VinIndex":%d,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":0,"ComposeY":0,"ComposeW":640,"ComposeH":630,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":0,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":0,"ComposeY":630,"ComposeW":160,"ComposeH":90,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":1,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":160,"ComposeY":630,"ComposeW":160,"ComposeH":90,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":2,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":320,"ComposeY":630,"ComposeW":160,"ComposeH":90,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":3,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":480,"ComposeY":630,"ComposeW":160,"ComposeH":90,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":4,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":640,"ComposeY":0,"ComposeW":640,"ComposeH":630,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"},{"VinIndex":5,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":640,"ComposeY":630,"ComposeW":160,"ComposeH":90,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
param_SetVirtualVinLayout_AlphaBlending = '\'{"VirtualVinIndex":1,"CanvasW":%d,"CanvasH":%d,"SubChannelNum":1,"SubChannelLayout":[{"VinIndex":102,"CropX":0,"CropY":0,"CropW":1920,"CropH":1080,"ComposeX":%d,"ComposeY":%d,"ComposeW":0,"ComposeH":0,"BorderX":0,"BorderY":0,"BorderW":0,"BorderH":0,"RenderMode":"manual"}]}\''
#(CanvasH , CanvasW, VinIndex(0/1), VirtualVinIndex)
param_SetVirtualVinLayout_Transparent = '\'{"SubChannelNum": 3, "CanvasH": %d, "CanvasW": %d, "SubChannelLayout": [{"BorderY": 48, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": 0, "CropW": 1920, "ComposeH": 0, "BorderX": 48, "CropH": 1080, "VinIndex": 101, "RenderMode": "manual", "ComposeX": 0, "ComposeY": 0, "BorderW": 48}, {"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": %d, "RenderMode": "manual", "ComposeX": 0, "ComposeY": 0, "BorderW": 0}, {"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": 5, "RenderMode": "manual", "ComposeX": 0, "ComposeY": 0, "BorderW": 0}], "VirtualVinIndex": %d}\''
param_SetVirtualVinLayout_Capture = '\'{"SubChannelNum":1,"CanvasH":%d,"CanvasW":%d,"SubChannelLayout":[{"VinIndex":%d,"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}],"VirtualVinIndex":%d}\''


param_SetVinSrc = '\'{"VinEgnIndex":%d,"VinSrcIndex":%d, "AutoDetect":%d}\''
param_GetVinSrc = '\'{"VinEgnIndex":%d}\''
param_GetVinSrcModeInfo = '\'{"VinEgnIndex":%d,"VinSrcIndex":%d}\''
param_SetVinSrcMode = '\'{"VinEgnIndex":%d,"VinSrcIndex":%d, "VinSrcModeIndex":%d}\''
param_SetVinSrcEdidMode = '\'{"VinEgnIndex":%d,"VinSrcIndex":%d, "EdidMode":%d}\''
param_GetVinSrcEdidMode = '\'{"VinEgnIndex":%d,"VinSrcIndex":%d}\''

param_GetVoutCount = '\'{}\''
param_GetVoutMode = '\'{"VoutIndex":%d}\''
param_SetVoutMode = '\'{"VoutIndex":%d, "ModeIndex":%d}\''
param_GetVoutAttr = '\'{"VoutIndex":%d}\''
param_SetVoutAttr = '\'{"VoutIndex":%d, "Saturation":%d, "Brightness":%d, "Contrast":%d, "Hue":%d, "BackgroundColor":%d, "HDCP":%d, "Blank":%d, "Freeze":%d, "Capture":%d, "CapturePathName":"/var/run/capture.jpg", "Quality":%d}\''
param_SetVoutCapture = '\'{"VoutIndex":%d, "Capture":%d, "CapturePathName":"/var/run/capture.jpg", "Quality":%d}\''
param_SetVoutFreeze = '\'{"VoutIndex":%d, "Freeze":%d}\''
param_SetVoutBlank = '\'{"VoutIndex":%d, "Blank":%d}\''
param_GetStmVinInfo = '\'{}\''
param_StartStmVin = '\'{"StreamingVinIndex":%d}\''
param_StopStmVin = '\'{"StreamingVinIndex":%d}\''
param_GetStmVoutInfo = '\'{}\''
param_StartStmVout = '\'{"StreamingVoutIndex":%d}\''
param_StopStmVout = '\'{"StreamingVoutIndex":%d}\''
param_GetStmVoutProp = '\'{"StreamingVoutIndex":%d}\''
param_SetStmVoutProp = '\'{"StreamingVoutIndex":%d, "VoutIndex":%d, "encode":{"bitrate":%d,"width":1280,"height":720,"profile":"main","level":41,"keyframes":16}, "clientNum":2, "client":[{"host":"10.3.56.73","port":1234},{"host":"10.3.56.73","port":5678}]}\''
param_SetVchLogo = '\'{"on":%d,"alpha":%d,"x":560,"y":315,"w":160,"h":90}\''

param_SetVirtualVinLayout_BgLayout_3 = '\'{"SubChannelNum": 2,"ImageFullPath" : "/var/.data/beach.yuv", "CanvasH": %d, "CanvasW": %d, "SubChannelLayout": [{"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": 0, "RenderMode": "manual", "ComposeX": %d, "ComposeY": %d, "BorderW": 0}, {"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": 1, "RenderMode": "manual", "ComposeX": %d, "ComposeY": %d, "BorderW": 0}], "VirtualVinIndex": %d}\''
param_SetVirtualVinLayout_BgBorderLayout_PGM = '\'{"VirtualVinIndex" : %d,"CanvasW" : %d,"CanvasH" : %d,"SubChannelNum" : 3,"ImageFullPath" : "/var/.data/PGM.bmp","SubChannelLayout" :  [{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":%d,"CropY":0,"CropX":0,"BorderH":%d,"ComposeW":6,"CropW":1920,"ComposeH":6,"BorderX":%d,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":6,"ComposeY":6,"BorderW":%d},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}]}\''
param_SetVirtualVinLayout_BgLayout = '\'{"SubChannelNum": 2,"ImageFullPath" : "", "CanvasH": %d, "CanvasW": %d, "SubChannelLayout": [{"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": 0, "RenderMode": "manual", "ComposeX": %d, "ComposeY": %d, "BorderW": 0}, {"BorderY": 0, "CropY": 0, "CropX": 0, "BorderH": 0, "ComposeW": %d, "CropW": 1920, "ComposeH": %d, "BorderX": 0, "CropH": 1080, "VinIndex": 1, "RenderMode": "manual", "ComposeX": %d, "ComposeY": %d, "BorderW": 0}], "VirtualVinIndex": %d}\'' 
param_SetVirtualVinLayout_BgBorderLayout = '\'{"VirtualVinIndex" : %d,"CanvasW" : %d,"CanvasH" : %d,"SubChannelNum" : 3,"ImageFullPath" : "","SubChannelLayout" :  [{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":%d,"CropY":0,"CropX":0,"BorderH":%d,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":%d,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":%d},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}]}\''
param_SetVirtualVinLayout_BgBorderLayout_5 = '\'{"SubChannelNum":4,"CanvasH":%d,"CanvasW":%d,"ImageFullPath" : "/var/.data/black.yuv","SubChannelLayout":[{"BorderY":%d,"CropY":0,"CropX":0,"BorderH":%d,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":%d,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":%d},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":%d,"CropY":0,"CropX":0,"BorderH":%d,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":%d,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":%d},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}],"VirtualVinIndex":%d}\''



param_GuiService_CreateObject = '\'[{"id":"image1","type":"obj1.qml","properties":{"width":%d,"height":%d,"x":%d,"y":%d,"z":3,"opacity":0.7,"source":"/home/root/logo.bmp","fillMode":1}}]\''
param_GuiService_DeleteObject = '\'[{"id":"image1"}]\''
param_GuiService_UpdateObject = '\'[{"id":"image1","type":"obj1.qml","properties":{"width":%d,"height":%d,"x":%d,"y":%d,"source":"/home/root/logo.bmp","fillMode":1}}]\''

param_SetBorder_Yellow = '\'{"SubChannelNum":3,"CanvasH":1080,"CanvasW":1920,"SubChannelLayout":[{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":255,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":6,"CropW":1920,"ComposeH":6,"BorderX":255,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":6,"ComposeY":6,"BorderW":0},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}],"VirtualVinIndex":%d}\''
param_SetBorder_Green = '\'{"SubChannelNum":3,"CanvasH":1080,"CanvasW":1920,"SubChannelLayout":[{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":255,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":6,"CropW":1920,"ComposeH":6,"BorderX":0,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":6,"ComposeY":6,"BorderW":0},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}],"VirtualVinIndex":%d}\''
param_SetBorder_Cyan = '\'{"SubChannelNum":3,"CanvasH":1080,"CanvasW":1920,"SubChannelLayout":[{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":0,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0},{"BorderY":255,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":6,"CropW":1920,"ComposeH":6,"BorderX":0,"CropH":1080,"VinIndex":100,"RenderMode":"manual","ComposeX":6,"ComposeY":6,"BorderW":255},{"BorderY":0,"CropY":0,"CropX":0,"BorderH":0,"ComposeW":%d,"CropW":1920,"ComposeH":%d,"BorderX":0,"CropH":1080,"VinIndex":1,"RenderMode":"manual","ComposeX":%d,"ComposeY":%d,"BorderW":0}],"VirtualVinIndex":%d}\''
# default (compose W, compose H , compose X ,compose Y)=>( 320, 180, 20, 20)

################################################################## Audio Part ##################################################################

CMD_AudioAPI = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioAPI string:"
CMD_AudioCMD = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioCMD string:"
CMD_AudioList = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioList string:"
CMD_AudioQuery = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioQueryProperty string:"
CMD_AudioGet = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioGetVariable string:"
CMD_AudioSet = " --system --print-reply --reply-timeout=2000 --type=method_call --dest=com.aten.aph.media /com/aten/aph  com.aten.aph.media.AudioSetVariable string:"
audioCmd_set = '"cmd":"SetAudioBlock"'
audioCmd_get = '"cmd":"GetAudioBlock"'
audioId_DigitalIn1Vol = ['5e0dc647', 'DigitalIn1Vol']
audioId_DigitalIn2Vol = ['354ef884', 'DigitalIn2Vol']
audioId_MixInVol      = ['528b66ad', 'MixInVol']
audioId_LineInVol     = ['11947102', 'LineIn1Vol']
audioId_AnalogOutVol  = ['6581399a', 'AnalogOutVol']
audioId_DigitalOutVol = ['768e12b2', 'DigitalOutVol']
audioId_StreamOutVol  = ['f9148d7b', 'StreamOutVol']
audioId_HdmiOutVol    = ['0e5b4aa3', 'HdmiOutVol']

param_DigitalIn1Vol = '\'{"cmd":"SetAudioBlock","id":"5e0dc647","volume":100,"mute":0}\''
param_DigitalIn2Vol = '\'{"cmd":"SetAudioBlock","id":"354ef884","volume":100,"mute":0}\''
param_MixInVol = '\'{"cmd":"SetAudioBlock","id":"528b66ad","volume":100,"mute":0}\''
param_LineInVol = '\'{"cmd":"SetAudioBlock","id":"11947102","volume":100,"mute":0}\''
param_AnalogOutVol = '\'{"cmd":"SetAudioBlock","id":"6581399a","volume":100,"mute":0}\''
param_DigitalOutVol = '\'{"cmd":"SetAudioBlock","id":"768e12b2","volume":100,"mute":0}\''
param_StreamOutVol = '\'{"cmd":"SetAudioBlock","id":"f9148d7b","volume":100,"mute":0}\''
param_HdmiOutVol = '\'{"cmd":"SetAudioBlock","id":"0e5b4aa3","volume":100,"mute":0}\''
audioIdArray_Vols = [audioId_DigitalIn1Vol, audioId_DigitalIn2Vol, audioId_MixInVol, audioId_LineInVol, audioId_AnalogOutVol, audioId_DigitalOutVol, audioId_StreamOutVol, audioId_HdmiOutVol]

################################################################## Audio Part ##################################################################

BT_CMD       = '\x42'
BT_A         = '\x0d'
BT_B         = '\x0e'
BT_C         = '\x00'
BT_1         = '\x01'
BT_2         = '\x02'
BT_3         = '\x03'
BT_4         = '\x04'
BT_5         = '\x05'
BT_STREAM    = '\x06'
BT_MULTIVIEW = '\x0b'
BT_MENU      = '\x0a'
BT_LEFT      = '\x10'
BT_UP        = '\x0f'
BT_RIGHT     = '\x11'
BT_GOLIVE    = '\x0c'
BT_MUTE      = '\x09'
BT_ESC       = '\x08'
BT_DOWN      = '\x12'
BT_ENTER     = '\x07'


LIVE_A       = '\x00'
LIVE_B       = '\x01'
LIVE_C       = '\x02' 
SEL_HDMI1    = '\x03' 
SEL_HDMI2    = '\x04' 
SEL_PWR_G    = '\x05' 
SEL_PWR_O    = '\x06' 
SEL_LOCK     = '\x07' 
LED_1        = '\x08'
LED_2        = '\x09'
LED_3        = '\x0a'
LED_4        = '\x0b'
LED_5        = '\x0c'
LED_WEB      = '\x0d'
LED_EN       = '\x0e'
LED_A        = '\x0f'
LED_B        = '\x10'
LED_C        = '\x11'
LED_VGA      = '\x13'
LED_DP       = '\x12'


cmd_type = '\x02' # 0x02 + led_num + on/off -> set single led only
off = '\x00'
on = '\x01' 
cmd_type_capt = '\x0c' # 0x0c + 0000 0001 -> LED_1 ON ,and so on.. , for capture only
val_leds = "\x01"  # initial on LED_1
val_led = "\x08"   # initial on LED_1
val_A_led = val_led
val_B_led = val_led
val_C_led = val_led
val_A_leds = val_leds
val_B_leds = val_leds
val_C_leds = val_leds



##### Function A B switch #####
DISP_AB_SwapFunc = 0
##### Function A B switch #####



BPS_SYMS = {
    4800: termios.B4800,
    9600: termios.B9600,
    19200: termios.B19200,
    38400: termios.B38400,
    57600: termios.B57600,
    115200: termios.B115200
}


# Indices into the termios tuple.

IFLAG = 0
OFLAG = 1
CFLAG = 2
LFLAG = 3
ISPEED = 4
OSPEED = 5
CC = 6

OLD_A_BTN = ""
A_BTN = ""
old_A_BTN12 = ""
COUNT_BTN = 0
IS_HDMI_VGA = 0
capt_Flag = BT_1
DISP_Flag = BT_A
BG_CHG = 0
Transit_Flag = 1
GoLive_Flag = 1
cmd_PFL = ""
cmd_PGM = ""
Set_Display = ""
Vout_idx_PGM = 1
Vout_idx = 0
Transit_Enable = 1
Transit_Ratio = 1
CreateObject_Flag = 1
g_alpha = 254
g_Transit = 0

#################### this part is for Program & Profile switching ####################

cmd_PFL3_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout_3 % (720,1280,640,360,0,180,640,360,640,180,0)
cmd_PFL4_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout % (0,1280,720,1280,720,0,0,255,0,4,4,0,4,4,0,180,120,13,13)
cmd_PFL5_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_5 % (720,1280,255,0,4,4,0,4,4,255,700,420,6,6,255,0,4,4,0,4,4,255,700,420,576,296,0)
cmd_PFL6_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout % (720,1280,960,720,0,0,320,180,960,540,0)
cmd_PFLPGM_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_PGM % (0,1280,720,960,620,0,0,255,0,255,0,313,200,643,416)

cmd_PGM3_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout_3 % (720,1280,640,360,0,180,640,360,640,180,1)
cmd_PGM4_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout % (1,1280,720,1280,720,0,0,255,0,4,4,0,4,4,0,180,120,13,13)
cmd_PGM5_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_5 % (720,1280,255,0,4,4,0,4,4,255,700,420,6,6,255,0,4,4,0,4,4,255,700,420,576,296,1)
cmd_PGM6_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout % (720,1280,960,720,0,0,320,180,960,540,1)
cmd_PGMPGM_720p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_PGM % (1,1280,720,960,620,0,0,255,0,255,0,313,200,643,416)

cmd_PFLPGM_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_PGM % (0,1920,1080,1440,900,0,0,255,0,255,0,470,270,964,624)
cmd_PFL3_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout_3 % (1080,1920,960,540,0,270,960,540,960,270,0) 
cmd_PFL4_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout % (0,1920,1080,1920,1080,0,0,255,0,6,6,0,6,6,0,320,180,20,20)
cmd_PFL5_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_5 % (1080,1920,255,0,6,6,0,6,6,255,1060,640,6,6,255,0,6,6,0,6,6,255,1060,640,854,434,0)
cmd_PFL6_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout % (1080,1920,1440,1080,0,0,480,270,1440,810,0)

cmd_PGM3_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout_3 % (1080,1920,960,540,0,270,960,540,960,270,1)
cmd_PGM4_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout % (1,1920,1080,1920,1080,0,0,255,0,6,6,0,6,6,0,320,180,20,20)
cmd_PGM5_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_5 % (1080,1920,255,0,6,6,0,6,6,255,1060,640,6,6,255,0,6,6,0,6,6,255,1060,640,854,434,1)
cmd_PGM6_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgLayout % (1080,1920,1440,1080,0,0,480,270,1440,810,1)
cmd_PGMPGM_1080p = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_BgBorderLayout_PGM % (1,1920,1080,1440,900,0,0,255,0,255,0,470,270,964,624)

#################### this part is for Program & Profile switching ####################


class AphVpCmd(cmd.Cmd):
    Last_mail_file = ""
    def __init__(self):
        cmd.Cmd.__init__(self)
        self.do_help(self)
        self.prompt = '=> '  #設定提示字元的符號

    def do_help(self, arg):
        print "********************************************"
        print "Demo how to use APH Media Service API"
        print ""
        print "getVin           : get vin information"
        print "                     => getVin"
        print ""
        print "getVinEgn        : get vin engine information"
        print "                     => getVinEgn"
        print ""
        print "getVinSrc        : get vin source information"
        print "                     => getVinSrc vinegn_index"
        print "                     => getVinSrc 2"
        print ""
        print "setVRT           : set route table"
        print "                     => setVRT disp_index1 vin_index1 src_index1 disp_index2 vin_index2 src_index2 ..."
        print "                     => setVRT 0 1 0 1 1 0 2 1 0"
        print ""
        print "setVCH           : set virtual channel layout"
        print "                     => setVCH style_index"
        print "                     => setVCH 1"
        print "                     virtual channel layout style:"
        print "                         1. QuadView"
        print "                         2. FiveView"
        print "                         3. OneBig2ThreeSmall View"
        print "                         4. SixView"
        print ""
        print "setSRC           : set vin src to vin engine"
        print "                     => setSRC vinegn_index vinsrc_index"
        print "                     => setSRC 2 1"
        print ""
        print "getSrcModeInfo   : get vin src mode information"
        print "                     => getSrcModeInfo vinegn_index vinsrc_index"
        print "                     => getSrcModeInfo 2 1"
        print ""
        print "setSrcMode       : set vin src mode"
        print "                     => setSrcMode vinegn_index vinsrc_index vinsrcmode_index"
        print "                     => setSrcMode 1 1 1"
        print ""
        print "setSRCEdid       : set vin src edid mode"
        print "                     => setSRCEdid vinegn_index vinsrc_index edid_mode"
        print "                     => setSRCEdid 0 0 0"
        print "                     vin src edid mode:"
        print "                         0. default mode"
        print "                         1. port1 mode"
        print "                         2. customized mode"
        print ""
        print "getSRCEdid       : get vin src edid mode"
        print "                     => getSRCEdid vinegn_index vinsrc_index"
        print "                     => getSRCEdid 0 0"
        print ""
        print "GetVoutCount  : get vout count"
        print "                     => GetVoutCount"
        print ""
        print "GetVoutMode   : get modes of vout"
        print "                     => GetVoutMode vout_index"
        print "                     => GetVoutMode 1"
        print ""
        print "SetVoutMode   : set vout mode by mode-index"
        print "                     => SetVoutMode vout_index mode_index"
        print "                     => SetVoutMode 1 0"
        print ""
        print "GetVoutAttr   : get attr. of vout"
        print "                     => GetVoutAttr vout_index"
        print "                     => GetVoutAttr 1"
        print ""
        print "SetVoutBlank   : set vout blank by index"
        print "                     => SetVoutBlank vout_index Blank"
        print "                     => SetVoutBlank 1 0"
        print ""
        print "SetVoutFreeze   : set vout freeze by index"                                                                                                                      
        print "                     => SetVoutFreeze vout_index Freeze"                                                                                                          
        print "                     => SetVoutFreeze 1 0"
        print ""
        print "SetVoutCapture   : set vout blank by index"                                                                                                                      
        print "                     => SetVoutCapture vout_index Capture Quality"                                                                                                          
        print "                     => SetVoutCapture 1 0 0"
        print ""        
        print "SetVoutAttr   : set vout attr. by index"
        print "                     => SetVoutAttr vout_index Saturation Brightness Contrast Hue BackgroundColor HDCP Blank Freeze Capture"
        print "                     => SetVoutAttr 1 50 50 50 50 0 0 0 0 0"
        print ""
        print "changeRenderMode : set vout render mode"
        print "                     => changeRenderMode vout_index vin_index render_mode"
        print "                     => changeRenderMode 1 0 auto"
        print "                     => changeRenderMode 0 0 full"
        print ""
        print "setVoutLayout : set vout layout/ also change render mode to manual mode."
        print "                     => setVoutLayout vout_index vin_index"
        print "                        srcx srcy srcw srch dstx dsty dstw dsth"
        print "                     => setVoutLayout 0 0 0 0 960 1080 0 0 1920 1080"
        print "                     => setVoutLayout 1 0 960 0 960 1080 0 0 1920 1080"
        print ""
        print "getStmVinInfo    : get streaming vin information"
        print "                     => getStmVinInfo"
        print ""
        print "startStmVin      : start streaming vin"
        print "                     => startStmVin 0"
        print ""
        print "stopStmVin       : stop streaming vin"
        print "                     => stopStmVin 0"
        print ""
        print "getStmVoutInfo    : get streaming vout information"
        print "                     => getStmVoutInfo"
        print ""
        print "startStmVout      : start streaming vout"
        print "                     => startStmVout 0"
        print ""
        print "stopStmVout       : stop streaming vout"
        print "                     => stopStmVout 0"
        print ""
        print "getStmVoutProp    : get streaming vout property"
        print "                     => getStmVoutProp 0"
        print ""
        print "setStmVoutProp    : set streaming vout property"
        print "                     => setStmVoutProp 0 0"
        print ""
        print "aGet ID                  : get audio block"
        print "aSetVol ID VOL [MUTE]    : set audio vol block"
        print "aSetVolAll on/off        : set all audio vol blocks"
        print "aGetVolAll               : get audio vol blocks"
        print "aListVol                 : list audio vol blocks"
        print "aSetMux [hdmi/spdif] NUM : set audio mux (select hdmi & spdif, default hdmi)."
        print "aStreamOut on/off [IP:PORT] : IP and PORT is required to on."
        print "aStreamIn on PORT"
        print ""
        print "help             : show command information"
        print "exit, quit       : leave Demo"
        print "********************************************"
        
    def do_quit(self, arg):
        print "Goodbye!"
        sys.exit(1)

    def do_exit(self, arg):
        print "Goodbye!"
        sys.exit(1)

    def do_q(self, arg):
        print "Goodbye!"
        sys.exit(1)

    def do_getVin(self, arg):
        msg = 'setVRT %s' % (arg)
        print msg
        cmd = EXEC + CMD_GetVinInfo + param_GetVinInfo
        print cmd
        os.system(cmd)

    def do_getVinEgn(self, arg):
        msg = 'getVinEgn %s' % (arg)
        print msg
        cmd = EXEC + CMD_GetVinEgnInfo + param_GetVinEgnInfo
        print cmd
        os.system(cmd)

    def do_getVinSrc(self, arg):
        msg = 'getVinSrc %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)
        if cparam > 1:
            print "wrong parameter: cparam > 1"
            return
        param = param_GetVinSrcInfo % (string.atoi(lparam[0]))
        cmd = EXEC + CMD_GetVinSrcInfo + param
        print cmd
        os.system(cmd)

    def do_setVRT(self, arg):
        msg = 'setVRT %s' % (arg)
        print msg
    
        lparam = arg.split(' ')
        cparam = len(lparam)
        
        if cparam < 0 : 
            print "wrong parameter: cparam < 0"
            return
        if cparam > 9 :
            print "wrong parameter: cparam > 9"
            return
        if cparam % 3 != 0 :            
            print "wrong parameter: cparam % 3 != 0"
            return
        sparam = cparam / 3
        if (sparam == 1) :
            param = param_SetVideoRouteTable1 % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2])) 
            cmd = EXEC + CMD_SetVideoRouteTable + param
        if (sparam == 2) :   
            param = param_SetVideoRouteTable2 % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]), string.atoi(lparam[3]), string.atoi(lparam[4]), string.atoi(lparam[5]))
            cmd = EXEC + CMD_SetVideoRouteTable + param
        if (sparam == 3) :   
            param = param_SetVideoRouteTable3 % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]), string.atoi(lparam[3]), string.atoi(lparam[4]), string.atoi(lparam[5]), string.atoi(lparam[6]), string.atoi(lparam[7]), string.atoi(lparam[8]))
            cmd = EXEC + CMD_SetVideoRouteTable + param    
        print cmd
        os.system(cmd)
    def do_setVCH(self, arg):
        msg = 'setVCH %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)
        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        vchindex = string.atoi(lparam[0])
        layout = string.atoi(lparam[1])

        if (layout == 1) :
            param = param_SetVirtualVinLayout_PBP % (vchindex)
            cmd = EXEC + CMD_SetVirtualVinLayout + param
        if (layout == 2) :
            param = param_SetVirtualVinLayout_PIP % (vchindex)
            cmd = EXEC + CMD_SetVirtualVinLayout + param

        print cmd
        os.system(cmd)
    def do_setSRC(self, arg):
        msg = 'setSRC %s' % (arg)
        print msg
        
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_SetVinSrc % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        cmd = EXEC + CMD_SetVinSrc + param
        print cmd
        os.system(cmd)
    def do_getSrcModeInfo(self, arg):
        msg = 'getSrcModeInfo %s' % (arg)
        print msg
        
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_GetVinSrcModeInfo % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        cmd = EXEC + CMD_GetVinSrcModeInfo + param
        print cmd
        os.system(cmd)
    def do_setSrcMode(self, arg):
        msg = 'setSrcMode %s' % (arg)
        print msg
        
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 3) :
            print "wrong parameter: cparam != 3"
            return
        param = param_SetVinSrcMode % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]))
        cmd = EXEC + CMD_SetVinSrcMode + param
        print cmd
        os.system(cmd)
    def do_setSRCEdid(self, arg):
        msg = 'setSRCEdid %s' % (arg)
        print msg
        
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 3) :
            print "wrong parameter: cparam != 3"
            return
        param = param_SetVinSrcEdidMode % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]))
        cmd = EXEC + CMD_SetVinSrcEdidMode + param
        print cmd
        os.system(cmd)
    def do_getSRCEdid(self, arg):
        msg = 'getSRCEdid %s' % (arg)
        print msg
        
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_GetVinSrcEdidMode % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        cmd = EXEC + CMD_GetVinSrcEdidMode + param
        print cmd
        os.system(cmd)        
    def do_GetVoutCount(self, arg):
        msg = 'getOutputCount %s' % (arg)
        print msg
        cmd = EXEC + CMD_GetVoutCount + param_GetVoutCount
        print cmd
        os.system(cmd)

    def do_GetVoutMode(self, arg):
        msg = 'GetVoutMode %s' % (arg)
        print msg
        param = param_GetVoutMode % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_GetVoutMode + param
        os.system(cmd)

    def do_SetVoutMode(self, arg):
        msg = 'SetVoutMode %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_SetVoutMode % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        print param
        cmd = EXEC + CMD_SetVoutMode + param
        os.system(cmd)

    def do_GetVoutAttr(self, arg):
        msg = 'GetVoutAttr %s' % (arg)
        print msg
        param = param_GetVoutAttr % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_GetVoutAttr + param
        os.system(cmd)

    def do_SetVoutBlank(self, arg):                                                                                                                              
        msg = 'SetVoutBlank %s' % (arg)                                                                                                                                
        print msg                                                                                                                                                     
        lparam = arg.split(' ')                                                                                                                                                 
        cparam = len(lparam)                                                                                                                                                      
                                                                                                                                                                                  
        if (cparam != 2) :                                                                                                                                                        
            print "wrong parameter: cparam != 2"                                                                                                                                  
            return                                                                                                                                                            
        param = param_SetVoutBlank % (string.atoi(lparam[0]), string.atoi(lparam[1]))                                                                                          
                                                                                                                                                                                
        print param                                                                                                                                                               
        cmd = EXEC + CMD_SetVoutBlank + param                                                                                                                                   
        os.system(cmd) 

    def do_SetVoutFreeze(self, arg):                                                                                                                             
        msg = 'SetVoutFreeze %s' % (arg)                                                                                                                               
        print msg                                                                                                                                                     
        lparam = arg.split(' ')                                                                                                                                                 
        cparam = len(lparam)                                                                                                                                                      
                                                                                                                                                                                  
        if (cparam != 2) :                                                                                                                                                        
            print "wrong parameter: cparam != 2"                                                                                                                                  
            return                                                                                                                                                            
        param = param_SetVoutFreeze % (string.atoi(lparam[0]), string.atoi(lparam[1]))                                                                                          
                                                                                                                                                                              
        print param                                                                                                                                                             
        cmd = EXEC + CMD_SetVoutFreeze + param                                                                                                                                     
        os.system(cmd)

    def do_SetVoutCapture(self, arg):                                                                                                                             
        msg = 'SetVoutBlank %s' % (arg)                                                                                                                               
        print msg                                                                                                                                                     
        lparam = arg.split(' ')                                                                                                                                                 
        cparam = len(lparam)
                                                                                                                                                     
        if (cparam != 3) :                                                                                                                                                        
            print "wrong parameter: cparam != 3"                                                                                                                                  
            return                                                                                                                                                            
        param = param_SetVoutCapture % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]))                                                                                          
                                                                                                                                                                              
        print param                                                                                                                                                             
        cmd = EXEC + CMD_SetVoutCapture + param                                                                                                                                     
        os.system(cmd)

    def do_SetVoutAttr(self, arg):
        msg = 'SetVoutAttr %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 11) :
            print "wrong parameter: cparam != 10"
            return
        param = param_SetVoutAttr % (string.atoi(lparam[0]), string.atoi(lparam[1]), string.atoi(lparam[2]), \
                                     string.atoi(lparam[3]), string.atoi(lparam[4]), string.atoi(lparam[5]), \
                                     string.atoi(lparam[6]), string.atoi(lparam[7]), string.atoi(lparam[8]), \
                                     string.atoi(lparam[9]), string.atoi(lparam[10]))
        print param
        cmd = EXEC + CMD_SetVoutAttr + param
        os.system(cmd)

    def do_changeRenderMode(self, arg):
        msg = 'changeRenderMode %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)
        if (cparam != 3) :
            print "wrong parameter: cparam != 3"
            return
        param = param_ChangeRenderMode % (string.atoi(lparam[0]), string.atoi(lparam[1]), lparam[2])
        print param
        cmd = EXEC + CMD_SetVideoRouteTable + param
        os.system(cmd)

    def do_setVoutLayout(self, arg):
        msg = 'setVoutLayout %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)
        if (cparam != 10) :
            print "wrong parameter: cparam != 10"
            return
        param = param_SetVoutLayout % (string.atoi(lparam[0]), \
                 string.atoi(lparam[1]), string.atoi(lparam[2]), \
                 string.atoi(lparam[3]), string.atoi(lparam[4]), \
                 string.atoi(lparam[5]), string.atoi(lparam[6]), \
                 string.atoi(lparam[7]), string.atoi(lparam[8]), string.atoi(lparam[9]))
        print param
        cmd = EXEC + CMD_SetVideoRouteTable + param
        os.system(cmd)
    def do_getStmVinInfo(self, arg):
        msg = 'getStmVinInfo %s' % (arg)
        print msg
        cmd = EXEC + CMD_GetStmVinInfo + param_GetStmVinInfo
        print cmd
        os.system(cmd)

    def do_startStmVin(self, arg):
        msg = 'startStmVin %s' % (arg)
        print msg
        param = param_StartStmVin % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_StartStmVin + param
        print cmd
        os.system(cmd)

    def do_stopStmVin(self, arg):
        msg = 'stopStmVin %s' % (arg)
        print msg
        param = param_StopStmVin % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_StopStmVin + param
        print cmd
        os.system(cmd)

    def do_getStmVoutInfo(self, arg):
        msg = 'do_getStmVoutInfo %s' % (arg)
        print msg
        cmd = EXEC + CMD_GetStmVoutInfo + param_GetStmVoutInfo
        print cmd
        os.system(cmd)

    def do_startStmVout(self, arg):
        msg = 'startStmVout %s' % (arg)
        print msg
        param = param_StartStmVout % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_StartStmVout + param
        print cmd
        os.system(cmd)

    def do_stopStmVout(self, arg):
        msg = 'stopStmVout %s' % (arg)
        print msg
        param = param_StopStmVout % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_StopStmVout + param
        print cmd
        os.system(cmd)
    
    def do_getStmVoutProp(self, arg):
        msg = 'getStmVoutProp %s' % (arg)
        print msg
        param = param_GetStmVoutProp % (string.atoi(arg))
        print param
        cmd = EXEC + CMD_GetStmVoutProp + param
        print cmd
        os.system(cmd)

    def do_setStmVoutProp(self, arg):
        msg = 'setStmVoutProp %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_SetStmVoutProp % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        print param
        cmd = EXEC + CMD_SetStmVoutProp + param
        print cmd
        os.system(cmd)

    def do_StmVoutTest(self, arg):
        
        i = 9999999
        while i > 0 :
            msg = 'setStmVoutProp %s' % (arg)
            print msg
            voutindex = i % 2
            param = param_SetStmVoutProp % (0, voutindex)
            print param
            cmd = EXEC + CMD_SetStmVoutProp + param
            print cmd
            os.system(cmd)
            time.sleep(1) 
            msg = 'startStmVout %s' % (arg)
            print msg
            param = param_StartStmVout % (0)
            print param
            cmd = EXEC + CMD_StartStmVout + param
            print cmd
            os.system(cmd)
            time.sleep(5)
            msg = 'stopStmVout %s' % (arg)
            print msg
            param = param_StopStmVout % (0)
            print param
            cmd = EXEC + CMD_StopStmVout + param
            print cmd
            os.system(cmd)
            time.sleep(1)
            i-= 1

    def do_setVoutStreamGo(self, arg):
        msg = 'setVoutStreamGo %s' % (arg)
        print msg
        cmd = EXEC + CMD_SetVoutStreamGo
        print cmd
        os.system(cmd)

    def do_RRASrc(self, arg):
        msg = 'RRASrc %s' % (arg)
        print msg
        self.do_setVRT('0 '+arg+' 0')
        self.do_setVCH('1 '+arg)

    def do_RRAtest(self, arg):
        while(True):
            self.do_RRASrc('0')
            time.sleep(2)
            self.do_RRASrc('1')
            time.sleep(2)
            self.do_RRASrc('2')
            time.sleep(2)
            self.do_RRASrc('3')
            time.sleep(2)
            self.do_RRASrc('5')
            time.sleep(2)
            self.do_setVCH('0 1')
            time.sleep(2)
            self.do_setVCH('0 2')
            time.sleep(2)
            self.do_setVCH('0 3')
            time.sleep(2)
            self.do_setVCH('0 4')
            time.sleep(2)

    def do_setVchLogo(self, arg):
        msg = 'setVchLogo %s' % (arg)
        print msg
        lparam = arg.split(' ')
        cparam = len(lparam)

        if (cparam != 2) :
            print "wrong parameter: cparam != 2"
            return
        param = param_SetVchLogo % (string.atoi(lparam[0]), string.atoi(lparam[1]))
        print param
        cmd = EXEC + CMD_SetVchLogo + param
        print cmd
        os.system(cmd)

    def do_AudioList(self, arg):
        lparam = arg.split(' ')
        cparam = len(lparam)
        types = ''
        
        if len (lparam[0]) == 0:
            cparam = 0
        if (cparam > 0):
            types = types + '"' + lparam[0] + '"'
            for idx in range (1,cparam):
                types = types + ',"' + lparam[idx] + '"'
        else:
            types = '"input","output","filter"'
        cmd = EXEC + CMD_AudioList + '\'[' + types + ']\''
        print cmd
        os.system(cmd)
        
    def do_AudioQuery(self, arg):
        lparam = arg.split(' ')
        cparam = len(lparam)
        types = ''
        
        if len (lparam[0]) == 0:
            cparam = 0
        if (cparam > 0):
            types = types + '"' + lparam[0] + '"'
            for idx in range (1,cparam):
                types = types + ',"' + lparam[idx] + '"'
            cmd = EXEC + CMD_AudioQuery + '\'[' + types + ']\''
            print cmd
            os.system(cmd)
        else:
            print 'Usage: AudioQuery element1 element2 elementN...'
            
    def do_AudioGet(self, arg):
        lparam = arg.split(' ')
        cparam = len(lparam)
        types = ''
        
        if len (lparam[0]) == 0:
            cparam = 0
        if (cparam > 0):
            types = types + '"' + lparam[0] + '"'
            for idx in range (1,cparam):
                types = types + ',"' + lparam[idx] + '"'
            cmd = EXEC + CMD_AudioGet + '\'[' + types + ']\''
            print cmd
            os.system(cmd)
        else:
            print 'Usage: AudioGet element1 element2 elementN...'
            
    def do_AudioSet(self, arg):
        lparam = arg.split(' ')
        cparam = len(lparam)
        types = ''
        
        if len (lparam[0]) == 0:
            cparam = 0
        if (cparam > 1):
            #string:'{"mixer2":{"effect_in":[{"sw":"0"},{},{},{}],"effect_out":{"gain":"-1.5"}}, "select0":{}}'
            element = lparam[0]
            kv = lparam[1]
            for idx in range (2,cparam):
                kv = kv + ',' + lparam[idx]
            cmd = EXEC + CMD_AudioSet + '\'{' + element + ':{' + kv + '}}\''
            print cmd
            os.system(cmd)
        else:
            print 'Usage: AudioSet element key1:value1 key2:value2 keyN:valueN...'
    
    def do_startYoutube(self, arg):
        msg = 'SetVoutMode %s' % (arg)
        print msg
        # set display B to 1080p30 mode
        param = param_SetVoutMode % (1, 4)
        print param
        cmd = EXEC + CMD_SetVoutMode + param
        os.system(cmd)
        time.sleep(2)
        msg = 'setStmVoutProp %s' % (arg)
        print msg
        # set streaming vout display B
        param = param_SetStmVoutProp % (0, 1)
        print param
        cmd = EXEC + CMD_SetStmVoutProp + param
        print cmd
        os.system(cmd)
        time.sleep(1)
        msg = 'startStmVout %s' % (arg)
        print msg
        #start streaming
        param = param_StartStmVout % (0)
        print param
        cmd = EXEC + CMD_StartStmVout + param
        print cmd
        os.system(cmd)

    def do_stopYoutube(self, arg):
        msg = 'stopStmVout %s' % (arg)
        print msg
        param = param_StopStmVout % (0)
        print param
        cmd = EXEC + CMD_StopStmVout + param
        print cmd
        os.system(cmd)

    def default(self, line):
        #輸入文字之後，如果非命令的話第一個地方就是跑這裡
        print "_default_= ", line
        self.do_help("")



def bps_to_termios_sym(bps):
    return BPS_SYMS[bps]


class SerialPort(object):
    """Represents a serial port connected to an Arduino."""
    def __init__(self, serialport, bps):
        """Takes the string name of the serial port (e.g.
        "/dev/tty.usbserial","COM1") and a baud rate (bps) and connects to
        that port at that speed and 8N1. Opens the port in fully raw mode
        so you can send binary data.
        """
        self.fd = os.open(serialport, os.O_RDWR | os.O_NOCTTY | os.O_NDELAY)
        attrs = termios.tcgetattr(self.fd)
        bps_sym = bps_to_termios_sym(bps)
        # Set I/O speed.
        attrs[ISPEED] = bps_sym
        attrs[OSPEED] = bps_sym

        # 8N1
        attrs[CFLAG] &= ~termios.PARENB
        attrs[CFLAG] &= ~termios.CSTOPB
        attrs[CFLAG] &= ~termios.CSIZE
        attrs[CFLAG] |= termios.CS8
        # No flow control
        attrs[CFLAG] &= ~termios.CRTSCTS

        # Turn on READ & ignore contrll lines.
        attrs[CFLAG] |= termios.CREAD | termios.CLOCAL
        # Turn off software flow control.
        attrs[IFLAG] &= ~(termios.IXON | termios.IXOFF | termios.IXANY | termios.INLCR | termios.IGNCR | termios.ICRNL)

        # Make raw.
        attrs[LFLAG] &= ~(termios.ICANON |
                          termios.ECHO |
                          termios.ECHOE |
                          termios.ISIG)
        attrs[OFLAG] &= ~termios.OPOST

        # It's complicated--See
        # http://unixwiz.net/techtips/termios-vmin-vtime.html
        attrs[CC][termios.VMIN] = 0
        attrs[CC][termios.VTIME] = 20
        termios.tcsetattr(self.fd, termios.TCSANOW, attrs)

    def write_byte(self, byte):
        os.write(self.fd, byte)
        #print ("byte: ",(byte))

    def read_byte(self):
        done = False
        while not done:
            n = ''
            try:
                n = os.read(self.fd, 1)
            except:
                pass
            if n == '':
                # FIXME: Maybe worth blocking instead of busy-looping?
                time.sleep(0.01)
                continue
            else:
                done = True
        return n

    def close(self):
        if self.fd != None:
            os.close(self.fd)
            self.fd = None


class UC9020 (object):

    

    def Init_Stat (self, SPort_S1, Quality):  # this msDemo startup status
        global GoLive_Flag
        global CreateObject_Flag
        # Set disp B to PGM src
        #src = 3 
        #cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (1,src,0) 
        #subprocess.Popen(cmd,shell=True)

            
        if Quality == "1080":
            cmd = cmd_PGMPGM_1080p
            subprocess.Popen(cmd,shell=True)

        elif Quality == "720":
            cmd = cmd_PGMPGM_720p
            subprocess.Popen(cmd,shell=True)


        SPort_S1.write_byte(cmd_type + SEL_HDMI2 + on)
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + LED_VGA + off)
        time.sleep(0.05)
        # GoLive when startup
        # Now write back will be starten when startup
        #cmd = EXEC + CMD_StartStmVout + param_StartStmVout % (0)
        #subprocess.Popen(cmd,shell=True)
        #GoLive_Flag = 0
        #SPort_S1.write_byte(cmd_type + LIVE_A + on)

        

        # Paste Logo when startup this python
        #cmd = EXEC + CMD_GuiService_CreateObject + param_GuiService_CreateObject % (255,130,1645,20)
        #subprocess.Popen(cmd,shell=True)
        #CreateObject_Flag = 0

    def End_Stat (self, SPort_S1):
        #cmd = EXEC + CMD_StopStmVout + param_StopStmVout % (0)
        #subprocess.Popen(cmd,shell=True)
        #GoLive_Flag = 0
        #SPort_S1.write_byte(cmd_type + LIVE_A + off)
        pass

    def Set_display_LED (self, SPort_S1, val_LED_ON, val_LED_OFF1, val_LED_OFF2):  
        SPort_S1.write_byte(cmd_type + val_LED_ON + on)
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + val_LED_OFF1 + off)
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + val_LED_OFF2 + off)
        time.sleep(0.05)

    def PGM_CHANGE (self, Quality): # just change layout
        global cmd_PGM3_720p
        global cmd_PGM4_720p
        global cmd_PGM5_720p
        global cmd_PGM6_720p
        global cmd_PGMPGM_720p

        global cmd_PGM3_1080p
        global cmd_PGM4_1080p
        global cmd_PGM5_1080p
        global cmd_PGM6_1080p
        global cmd_PGMPGM_1080p
        
        
        if Quality == "1080":
            if capt_Flag == BT_1:
                pass

            elif capt_Flag == BT_2:
                pass

            elif capt_Flag == BT_3: 
                tmp = cmd_PGMPGM_1080p
                cmd_PGMPGM_1080p = cmd_PGM3_1080p
                cmd_PGM3_1080p = tmp
                
            elif capt_Flag == BT_4:
                tmp = cmd_PGMPGM_1080p
                cmd_PGMPGM_1080p = cmd_PGM4_1080p
                cmd_PGM4_1080p = tmp
                
            elif capt_Flag == BT_5:       
                tmp = cmd_PGMPGM_1080p
                cmd_PGMPGM_1080p = cmd_PGM5_1080p
                cmd_PGM5_1080p = tmp

            elif capt_Flag == BT_STREAM:
                
                tmp = cmd_PGMPGM_1080p
                cmd_PGMPGM_1080p = cmd_PGM6_1080p
                cmd_PGM6_1080p = tmp
                
        
        elif Quality == "720":    
            if capt_Flag == BT_1:
                pass

            elif capt_Flag == BT_2:
                pass

            elif capt_Flag == BT_3:
                tmp = cmd_PGMPGM_720p
                cmd_PGMPGM_720p = cmd_PGM3_720p
                cmd_PGM3_720p = tmp
                
            elif capt_Flag == BT_4:
                tmp = cmd_PGMPGM_720p
                cmd_PGMPGM_720p = cmd_PGM4_720p
                cmd_PGM4_720p = tmp
                
            elif capt_Flag == BT_5:
                tmp = cmd_PGMPGM_720p
                cmd_PGMPGM_720p = cmd_PGM5_720p
                cmd_PGM5_720p = tmp
                
            elif capt_Flag == BT_STREAM:
                tmp = cmd_PGMPGM_720p
                cmd_PGMPGM_720p = cmd_PGM6_720p
                cmd_PGM6_720p = tmp

    def PFL_CHANGE (self, Quality):

        global cmd_PFL3_720p
        global cmd_PFL4_720p
        global cmd_PFL5_720p
        global cmd_PFL6_720p
        global cmd_PFLPGM_720p

        global cmd_PFL3_1080p
        global cmd_PFL4_1080p
        global cmd_PFL5_1080p
        global cmd_PFL6_1080p
        global cmd_PFLPGM_1080p

    
        if Quality == "1080":
            if capt_Flag == BT_1:
                pass
                
            elif capt_Flag == BT_2:
                pass        
                
            elif capt_Flag == BT_3:
    
                tmp = cmd_PFLPGM_1080p
                cmd_PFLPGM_1080p = cmd_PFL3_1080p
                cmd_PFL3_1080p = tmp
                pass
                
            elif capt_Flag == BT_4:

                tmp = cmd_PFLPGM_1080p
                cmd_PFLPGM_1080p = cmd_PFL4_1080p
                cmd_PFL4_1080p = tmp
                pass
                
            elif capt_Flag == BT_5:
                
                tmp = cmd_PFLPGM_1080p
                cmd_PFLPGM_1080p = cmd_PFL5_1080p
                cmd_PFL5_1080p = tmp
                pass
                
            elif capt_Flag == BT_STREAM:
                
                tmp = cmd_PFLPGM_1080p
                cmd_PFLPGM_1080p = cmd_PFL6_1080p
                cmd_PFL6_1080p = tmp
                pass

        elif Quality == "720":
            if capt_Flag == BT_1:
                pass
                
            elif capt_Flag == BT_2:
                pass        
                
            elif capt_Flag == BT_3:
                tmp = cmd_PFLPGM_720p
                cmd_PFLPGM_720p = cmd_PFL3_720p
                cmd_PFL3_720p = tmp
                pass
                
            elif capt_Flag == BT_4:
                tmp = cmd_PFLPGM_720p
                cmd_PFLPGM_720p = cmd_PFL4_720p
                cmd_PFL4_720p = tmp
                pass
                
            elif capt_Flag == BT_5:
                tmp = cmd_PFLPGM_720p
                cmd_PFLPGM_720p = cmd_PFL5_720p
                cmd_PFL5_720p = tmp
                pass
                
            elif capt_Flag == BT_STREAM:
                tmp = cmd_PFLPGM_720p
                cmd_PFLPGM_720p = cmd_PFL6_1080p
                cmd_PFL6_1080p = tmp
                pass

    def BTN_Pressing (self, SPort_S1, Quality):
        while True:
            
            btcode = ""
            global val_A_leds
            global val_A_led
            global val_B_leds
            global val_B_led
            global val_C_leds
            global val_C_led
            global DISP_Flag
            global OLD_DISP_Flag
            global g_Transit

            OLD_DISP_Flag = DISP_Flag
            keycode = SPort_S1.read_byte()
            if keycode == BT_CMD:
                btcode = SPort_S1.read_byte()
                print(btcode)
                if btcode == BT_A:
                    print("Got BT_A")
                    DISP_Flag = btcode
                    disp_LED_ON = LED_A
                    disp_LED_OFF1 = LED_B
                    disp_LED_OFF2= LED_C
                    self.Set_display_LED (SPort_S1, disp_LED_ON, disp_LED_OFF1, disp_LED_OFF2)  
                    break

                elif btcode == BT_B:
                    print("Got BT_B")
                    DISP_Flag = btcode
                    disp_LED_ON = LED_B
                    disp_LED_OFF1 = LED_A
                    disp_LED_OFF2 = LED_C
                    self.Set_display_LED (SPort_S1, disp_LED_ON, disp_LED_OFF1, disp_LED_OFF2)
                    val_A_led = LED_5
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_C:
                    print("Got BT_C")
                    DISP_Flag = btcode
                    disp_LED_ON = LED_C
                    disp_LED_OFF1 = LED_B
                    disp_LED_OFF2 = LED_A
                    self.Set_display_LED (SPort_S1, disp_LED_ON, disp_LED_OFF1, disp_LED_OFF2)
                    val_A_led = LED_3
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

    ####################################################################    
                elif btcode == BT_1:
                    print("Got BT_1")
                    val_leds = '\x01'
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    time.sleep(0.05)
                    if DISP_Flag == BT_A:
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    elif DISP_Flag == BT_B:
                        val_B_leds = val_leds
                        
                    elif DISP_Flag == BT_C:    
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_2:
                    print("Got BT_2")
                    val_leds = '\x02'
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    time.sleep(0.05)
                    if DISP_Flag == BT_A:
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    elif DISP_Flag == BT_B:
                        val_B_leds = val_leds
                        
                    elif DISP_Flag == BT_C:    
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_3:
                    print("Got BT_3")
                    val_leds = '\x00' # off all LEDs
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    time.sleep(0.05)
                    val_led = '\x0a' # avoid "0x08" with cmd_type 0x0c
                    SPort_S1.write_byte(cmd_type + val_led + on)
                    time.sleep(0.05)
                    if DISP_Flag == BT_A:
                        val_A_led = val_led
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    elif DISP_Flag == BT_B:
                        val_B_led = val_led
                        val_B_leds = val_leds

                    elif DISP_Flag == BT_C:    
                        val_C_led = val_led
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_4:
                    print("Got BT_4")
                    val_leds = '\x00'
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    time.sleep(0.05)
                    val_led = '\x0b'
                    SPort_S1.write_byte(cmd_type + val_led + on)
                    time.sleep(0.05)
                    if DISP_Flag == BT_A:
                        val_A_led = val_led
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                        
                    elif DISP_Flag == BT_B:
                        val_B_led = val_led
                        val_B_leds = val_leds
                        
                    elif DISP_Flag == BT_C:    
                        val_C_led = val_led
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_5:
                    print("Got BT_5")
                    val_leds = '\x10'
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    if DISP_Flag == BT_A:
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                        
                    elif DISP_Flag == BT_B:
                        val_B_leds = val_leds
                        
                    elif DISP_Flag == BT_C:    
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break


                elif btcode == BT_STREAM:
                    print("Got BT_STREAM")
                    val_leds = '\x20'
                    SPort_S1.write_byte(cmd_type_capt + val_leds)
                    
                    if DISP_Flag == BT_A:
                        val_A_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    elif DISP_Flag == BT_B:
                        val_B_leds = val_leds
                        
                    elif DISP_Flag == BT_C:
                        val_C_leds = val_leds
                        self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

            
                elif btcode == BT_MULTIVIEW:
                    print("Got BT_MULTIVIEW")  
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_MENU:
                    print("Got BT_MENU")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_LEFT:
                    print("Got BT_LEFT")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_UP:
                    print("Got BT_UP")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_RIGHT:
                    print("Got BT_RIGHT")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_GOLIVE:
                    print("Got BT_GOLIVE")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_MUTE:
                    print("Got BT_MUTE")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_ESC:
                    print("Got BT_ESC")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_DOWN:
                    print("Got BT_DOWN")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                elif btcode == BT_ENTER:
                    print("Got BT_ENTER")
                    self.dbus_CMD(DISP_Flag, btcode, SPort_S1, Quality)
                    break

                else:
                    print("Unknown button")
                    break
            else : 
                continue
            #print ("btcode: ",hex(ord(btcode)))
    ####################################################################

    def dbus_CMD (self, DISP_Flag, btcode, SPort_S1, Quality):
        
        global BG_CHG
        global GoLive_Flag
        global capt_Flag

        global cmd_PFL3_720p
        global cmd_PFL4_720p
        global cmd_PFL5_720p
        global cmd_PFL6_720p
        
        global cmd_PFL3_1080p
        global cmd_PFL4_1080p
        global cmd_PFL5_1080p
        global cmd_PFL6_1080p
        global cmd_PFLPGM_1080p
    
        global CreateObject_Flag
        global g_alpha
        global g_Transit
        global IS_HDMI_VGA
        global COUNT_BTN
        global OLD_A_BTN
        global A_BTN
        #global border_color
        if DISP_Flag == BT_A :
            disp = 0
            
        elif DISP_Flag == BT_B:
            disp = 1
            COUNT_BTN = 0
        elif DISP_Flag == BT_C:
            disp = 2
            COUNT_BTN = 0
        if btcode == BT_A:
            pass

        elif btcode == BT_B:
            # change src of disp A
            src = 2 
            cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (0,src,0) 
            subprocess.Popen(cmd,shell=True)

        elif btcode == BT_C:
            # change src of disp A
            src = 5 
            cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (0,src,0) 
            subprocess.Popen(cmd,shell=True) 

        elif btcode == BT_1 :
            if DISP_AB_SwapFunc == 0 :
                if DISP_Flag == BT_A :
                        A_BTN = BT_1
                        src = 0
                        cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                        subprocess.Popen(cmd,shell=True)

                        cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":3}}\''
                        #print cmd
                        os.system(cmd)
                    
                        #src = 0
                        #cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                        #subprocess.Popen(cmd,shell=True)
                        OLD_A_BTN = A_BTN

                elif DISP_Flag == BT_B: 
                    pass

                elif DISP_Flag == BT_C:       
                    BG_CHG = 1
                    capt_Flag = btcode
                    
                    if Quality == '1080':
                        #### 1080p
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,1,1920,1080,0,0,0)
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Transparent % (1080,1920,1920,1080,0,1920,1080,1) # Trans 0
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        #### 1080p
                    elif Quality == '720':          
                        #### 720p
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,1,1280,720,0,0,0)
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Transparent % (720,1280,1280,720,0,1280,720,1) # Trans 1
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        #### 720p

            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A :
                    src = 0
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":3}}\''
                    #print cmd
                    os.system(cmd)
                elif DISP_Flag == BT_B:
                    src = 0
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":3}}\''
                    #print cmd
                    os.system(cmd)
                elif DISP_Flag == BT_C: 
                    
                    src = 5
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)


        elif btcode == BT_2:
            if DISP_AB_SwapFunc == 0 :
                if DISP_Flag == BT_A:
                    #src = 1
                    #cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    #subprocess.Popen(cmd,shell=True)
                    
                    #cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":4}}\''
                    #print cmd
                    #os.system(cmd)
                    A_BTN = BT_2
                    src = 1
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)

                    if IS_HDMI_VGA == 0 and OLD_A_BTN == A_BTN : # HDMI
                        time.sleep(0.1)
                        SPort_S1.write_byte(cmd_type + SEL_HDMI2 + on)
                        time.sleep(0.05)
                        SPort_S1.write_byte(cmd_type + LED_VGA + off)
                        time.sleep(0.05)
                        
                        cmd = EXEC + CMD_SetVinSrc + param_SetVinSrc % (1,0,0)
                        subprocess.Popen(cmd,shell=True)
                        IS_HDMI_VGA = 1
                            
                    elif IS_HDMI_VGA == 1 and OLD_A_BTN == A_BTN : # VGA
                        time.sleep(0.1)
                        SPort_S1.write_byte(cmd_type + LED_VGA + on)
                        time.sleep(0.05)
                        SPort_S1.write_byte(cmd_type + SEL_HDMI2 + off)
                        time.sleep(0.05)
                        cmd = EXEC + CMD_SetVinSrc + param_SetVinSrc % (1,1,0)
                        subprocess.Popen(cmd,shell=True)
                        IS_HDMI_VGA = 0

                    time.sleep(0.1)
                    OLD_A_BTN = A_BTN
                    print ("OK")

                elif DISP_Flag == BT_B:
                    pass
                elif DISP_Flag == BT_C:
                    capt_Flag = btcode
                    BG_CHG = 2
                    
                    if Quality == '1080':
                        #### 1080p
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,0,1920,1080,0,0,0)
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Transparent % (1080,1920,1920,1080,1,1920,1080,1) #tans1 on
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        #### 1080p
                    elif Quality == '720':
                        #### 720p
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,0,1280,720,0,0,0)
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Transparent % (720,1280,1280,720,1,1280,720,1) #tans1 on
                        subprocess.Popen(cmd,shell=True)
                        time.sleep (0.1)
                        #### 720p
            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A:
                    src = 1
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":4}}\''
                    #print cmd
                    os.system(cmd)
                elif DISP_Flag == BT_B:
                    src = 1
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":4}}\''
                    #print cmd
                    os.system(cmd)
                    
                elif DISP_Flag == BT_C:
                    src = 4   
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)


        elif btcode == BT_3:
            if DISP_AB_SwapFunc == 0 :
                if DISP_Flag == BT_A:
                    A_BTN = BT_3
                    COUNT_BTN = 0
                    src = 5
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    OLD_A_BTN = A_BTN

                elif DISP_Flag == BT_B:
                    pass
                elif DISP_Flag == BT_C:
                    if Quality == '1080':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,1,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,0,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL3_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                    elif Quality == '720':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,1,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,0,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL3_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.2)

                    g_alpha = 254
                    capt_Flag = btcode
            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A:
                    src = 2
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                elif DISP_Flag == BT_B:
                    src = 2
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                elif DISP_Flag == BT_C:
                    src = 3   
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)

        elif btcode == BT_4:
            if DISP_AB_SwapFunc == 0 :
                if DISP_Flag == BT_A:
                    A_BTN = BT_4
                    
                    src = 6
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    OLD_A_BTN = A_BTN
                    pass
                elif DISP_Flag == BT_B:
                    
                    pass
                elif DISP_Flag == BT_C:
                    if Quality == '1080':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,1,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,0,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL4_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                    elif Quality == '720':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,1,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,0,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL4_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                    g_alpha = 254
                    capt_Flag = btcode

            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A:
                    
                    src = 3
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)

                elif DISP_Flag == BT_B:
                    src = 3
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)

                elif DISP_Flag == BT_C:
                    src = 2   
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
        
                
                    
        elif btcode == BT_5:
            if DISP_AB_SwapFunc == 0:
                if DISP_Flag == BT_A:
                    A_BTN = BT_5
                    
                    src = 2
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    OLD_A_BTN = A_BTN
                elif DISP_Flag == BT_B:
                    pass
                elif DISP_Flag == BT_C:
                    if Quality == '1080':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,1,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,0,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL5_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)

                    elif Quality == '720':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,1,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,0,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL5_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                    g_alpha = 254
                    capt_Flag = btcode
                    
            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A:
                    src = 5
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                elif DISP_Flag == BT_B:
                    src = 5
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                elif DISP_Flag == BT_C:  
                    src = 0 
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":3}}\''
                    #print cmd
                    os.system(cmd)
        
        elif btcode == BT_STREAM:
            cmd = ""
            
            if DISP_AB_SwapFunc == 0 :
                if DISP_Flag == BT_A:
                    A_BTN = BT_STREAM
                    src = 4
                    OLD_A_BTN = A_BTN
                elif DISP_Flag == BT_B:
                    pass
                elif DISP_Flag == BT_C:
                    if Quality == '1080':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,1,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (1080,1920,0,1920,1080,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL6_1080p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)

                    elif Quality == '720':
                        if capt_Flag == BT_1: # if press BTN_1 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,1,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        elif capt_Flag == BT_2: # if press BTN_2 before
                            cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_Capture % (720,1280,0,1280,720,0,0,1)
                            subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PGMPGM_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                        cmd = cmd_PFL6_720p
                        subprocess.Popen(cmd,shell=True)
                        time.sleep(0.1)
                    g_alpha = 254
                    capt_Flag = btcode

            else : # Function of disp A switch with Function of disp B
                if DISP_Flag == BT_A:
                    src = 4
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                elif DISP_Flag == BT_B:
                    pass
                elif DISP_Flag == BT_C:  
                    src = 1 
                    cmd = EXEC + CMD_SetVideoRouteTable + param_SetVideoRouteTable1 % (disp,src,0)
                    subprocess.Popen(cmd,shell=True)
                    
                    cmd = EXEC + CMD_AudioSet + '\'{"select99":{"select":4}}\''
                    #print cmd
                    os.system(cmd)

        elif btcode == BT_GOLIVE:
            
            if (GoLive_Flag):
                cmd = EXEC + CMD_StartStmVout + param_StartStmVout % (0)
                subprocess.Popen(cmd,shell=True)
                GoLive_Flag = 0
                SPort_S1.write_byte(cmd_type + LIVE_A + on)
                
            else :
                cmd = EXEC + CMD_StopStmVout + param_StopStmVout % (0)
                subprocess.Popen(cmd,shell=True)
                GoLive_Flag = 1
                SPort_S1.write_byte(cmd_type + LIVE_A + off)
            
        
        elif btcode == BT_ENTER:
            pass
            

        elif btcode == BT_MULTIVIEW:
            if ((capt_Flag != BT_1) and (capt_Flag != BT_2) ):
                if Quality == "1080":
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1920,1080,1,5)
                    subprocess.Popen(cmd,shell=True)
                elif Quality == "720":
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1280,720,1,5)
                    subprocess.Popen(cmd,shell=True)
                
                self.PGM_CHANGE(Quality)
                self.PFL_CHANGE(Quality)


        # Transit manual alpha ++ 
        elif btcode == BT_UP:
            
            if g_alpha +7 >= 254:
                g_alpha = 254
                
            elif g_alpha + 7 < 254:
                g_alpha += 7
        
            if ((capt_Flag != BT_1) and (capt_Flag != BT_2) and (g_Transit == 1)):
                if Quality == "1080":
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1920,1080,0,g_alpha)
                    subprocess.Popen(cmd,shell=True)   
                elif Quality == "720": 
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1280,720,0,g_alpha)
                    subprocess.Popen(cmd,shell=True)   
        # Transit manual alpha --
        elif btcode == BT_DOWN:
            

            
            if g_alpha - 7 > 0:
                g_alpha -= 7
            elif g_alpha -7 <= 0:
                g_alpha = 0
                self.PGM_CHANGE(Quality)
                self.PFL_CHANGE(Quality)
                if Quality == "1080":
                    cmd = cmd_PGMPGM_1080p
                    subprocess.Popen(cmd,shell=True)
                    time.sleep(0.5)
                    if capt_Flag == BT_3:
                        cmd = cmd_PFL3_1080p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_4:
                        cmd = cmd_PFL4_1080p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_5:
                        cmd = cmd_PFL5_1080p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_STREAM:
                        cmd = cmd_PFL6_1080p
                        subprocess.Popen(cmd,shell=True)
                elif Quality == "720": 
                    cmd = cmd_PGMPGM_720p
                    subprocess.Popen(cmd,shell=True)   
                    time.sleep(0.5) 
                    if capt_Flag == BT_3:
                        cmd = cmd_PFL3_720p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_4:
                        cmd = cmd_PFL4_720p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_5:
                        cmd = cmd_PFL5_720p
                        subprocess.Popen(cmd,shell=True)
                    elif capt_Flag == BT_STREAM:
                        cmd = cmd_PFL6_720p
                        subprocess.Popen(cmd,shell=True)
                g_alpha = 254
                g_Transit = 0

            if ((capt_Flag != BT_1) and (capt_Flag != BT_2) and (g_Transit == 1)):
                if Quality == "1080":
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1920,1080,0,g_alpha)
                    subprocess.Popen(cmd,shell=True)   
                elif Quality == "720": 
                    cmd = EXEC + CMD_SetVirtualVinLayout + param_SetVirtualVinLayout_AlphaBlending % (1280,720,0,g_alpha)
                    subprocess.Popen(cmd,shell=True)   

        elif btcode == BT_MENU:
            if g_Transit == 0:
                g_Transit = 1
                SPort_S1.write_byte(cmd_type + LIVE_C + on)
                g_alpha = 254
            elif g_Transit == 1:
                g_Transit = 0 
                SPort_S1.write_byte(cmd_type + LIVE_C + off)

        elif btcode == BT_ESC:
            cmd = ""
            
            
        elif btcode == BT_MUTE:
            if CreateObject_Flag == 1:
                #cmd = EXEC + CMD_GuiService_CreateObject + param_GuiService_CreateObject % ("Image1",255,130)
                cmd = EXEC + CMD_GuiService_CreateObject + param_GuiService_CreateObject % (255,130,1645,20)
                subprocess.Popen(cmd,shell=True)
                CreateObject_Flag = 0
            elif CreateObject_Flag == 0:
                #cmd = EXEC + CMD_GuiService_CreateObject + param_GuiService_DeleteObject % ("Image1")
                cmd = EXEC + CMD_GuiService_DeleteObject + param_GuiService_DeleteObject 
                subprocess.Popen(cmd,shell=True)
                CreateObject_Flag = 1
                
        # if transit manual, golive C will be lighten
        
    
##########################################3
def StatMachine (SPort_S1):
    
    
    if DISP_Flag == BT_A :
        if (((val_A_led != LED_3) and (val_A_led != LED_5))and (OLD_DISP_Flag != DISP_Flag )): # if 0 -> src3 or src4
            #print "IF A"
            SPort_S1.write_byte(cmd_type_capt + val_A_leds)
            time.sleep(0.05)
        elif (~(ord(val_A_leds)) and (OLD_DISP_Flag != DISP_Flag )): # src3 or src4     
            #print "ELSE A"
            SPort_S1.write_byte(cmd_type_capt + '\x00')
            time.sleep(0.05)
            SPort_S1.write_byte(cmd_type + val_A_led + on)
            time.sleep(0.05)
    
            
            
   
    if DISP_Flag == BT_B:
        if ((ord(val_B_leds))  and (OLD_DISP_Flag != DISP_Flag )): # if 0 -> src3 or src4
            print "IF B"
            SPort_S1.write_byte(cmd_type_capt + val_B_leds)
            time.sleep(0.05)
        elif(~(ord(val_B_leds)) and (OLD_DISP_Flag != DISP_Flag ) ): # src3 or src4     
            #and ((val_B_led == LED_3) or (val_B_led == LED_4))
            print "ELSE B"
            SPort_S1.write_byte(cmd_type_capt + '\x00')
            time.sleep(0.05)
            SPort_S1.write_byte(cmd_type + val_B_led + on)
            time.sleep(0.05)
            
            


    if DISP_Flag == BT_C:
        if ((ord(val_C_leds)) and (OLD_DISP_Flag != DISP_Flag )): # if 0 -> src3 or src4
            #print "IF C"
            SPort_S1.write_byte(cmd_type_capt + val_C_leds)
            time.sleep(0.05)
        elif (~(ord(val_C_leds)) and (OLD_DISP_Flag != DISP_Flag )): # src3 or src4     
            #print "ELSE C"
            SPort_S1.write_byte(cmd_type_capt + '\x00')
            time.sleep(0.05)
            SPort_S1.write_byte(cmd_type + val_C_led + on)
            time.sleep(0.05)
    
    




###################################################################
                

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-r', action='store_true', default=False, dest='remote',
        help='Accept remote input') 
    parser.add_argument('-q', action='store', default="1080", dest='quality',
        help='Accept Quality input')  
    parser.add_argument('-c', action='store_true', default=True, dest='command',
        help='Accept command input')
    args = parser.parse_args()

    if (args.remote) :
        SPort_S1 = SerialPort('/dev/ttyS1',9600)
        print "Start Listening Button...."
        SPort_S1.write_byte(cmd_type_capt + val_leds )
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + LED_A + on)
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + LED_B + off)
        time.sleep(0.05)
        SPort_S1.write_byte(cmd_type + LED_C + off)
        obj_UC9020 = UC9020()
        obj_UC9020.Init_Stat(SPort_S1, args.quality)
        while True:
            try:        
                Btn_Set = Thread(target=obj_UC9020.BTN_Pressing(SPort_S1 , args.quality))
                Stay = Thread(target=StatMachine( SPort_S1))
                Btn_Set.start()
                Stay.start()

            except KeyboardInterrupt:
                #obj_UC9020.End_Stat(SPort_S1)
                SPort_S1.close()
                exit(0)
        
    if (args.command) :
        avc = AphVpCmd()
        avc.cmdloop()
                    

        
       
        
        
                
                         

 
    
            
    
