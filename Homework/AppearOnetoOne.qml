import QtQuick 2.0

//一個一個動作出現
Rectangle {
    property var count: 0;
    property var componentArr: [];
    property alias timer: timer;

    Timer {
        id: timer;
        repeat: true;
        interval: 300;
        onTriggered: {
            if(count > componentArr.length-1) {
                count = 0;
                stop();
            }
            componentArr[count].imageOpacity = 1;
            count++;
        }
    }
}

