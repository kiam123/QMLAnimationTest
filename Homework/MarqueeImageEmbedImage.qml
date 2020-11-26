import QtQuick 2.0

//跑馬燈
Rectangle {
    property var count: 0;
    property var marqueeItems: [];
    property alias timer: timer;

    Timer {
        id: timer;
        running: false;
        repeat: true;
        interval: 100;
        onTriggered: {
            marqueeItems[count].itemOpacity = 0;
            count++;
            if(count > marqueeItems.length-1) {
                count = 0;
            }
            marqueeItems[count].itemOpacity = 1;
        }
    }
}
