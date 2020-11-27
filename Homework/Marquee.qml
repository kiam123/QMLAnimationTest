import QtQuick 2.0
import QtQuick.Layouts 1.3

//跑馬燈-目前沒使用
Rectangle {
    property var count: 0;
    property var marqueeItems: [marqueeItem1, marqueeItem2, marqueeItem3];

    Rectangle {
        id: marqueeItem1;
        color: Qt.rgba(0.5, 0.5, 0.5, 0);
        border.width: 1;
        border.color: 'gray';
        width: 50;
        height: 50;
        x: 10;
        y: 10;

        Rectangle {
            id: item1;
            width: marqueeItem1.width;
            height: marqueeItem1.height;
            anchors.centerIn: marqueeItem1;
            color: "red";
            opacity: 1;
        }
    }

    Rectangle {
        id: marqueeItem2;
        color: Qt.rgba(0.5, 0.5, 0.5, 0);
        border.width: 1;
        border.color: 'gray';
        width: 50;
        height: 50;
        x: 70;
        y: 10;

        Rectangle {
            id: item2
            width: marqueeItem2.width;
            height: marqueeItem2.height;
            anchors.centerIn: marqueeItem2;
            color: "red";
            opacity: 0;
        }
    }

    Rectangle {
        id: marqueeItem3;
        color: Qt.rgba(0.5, 0.5, 0.5, 0);
        border.width: 1;
        border.color: 'gray';
        width: 50;
        height: 50;
        x: 130;
        y: 10;

        Rectangle {
            id: item3
            width: marqueeItem3.width;
            height: marqueeItem3.height;
            anchors.centerIn: marqueeItem3;
            color: "red";
            opacity: 0;
        }
    }

    Timer {
        running: true;
        repeat: true;
        interval: 100;
        onTriggered: {
            marqueeItems[count].children[0].opacity = 0;
            count++;
            if(count > marqueeItems.length-1) {
                count = 0;
            }
            marqueeItems[count].children[0].opacity = 1;
        }
    }
}
