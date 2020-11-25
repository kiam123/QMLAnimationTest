import QtQuick 2.0

//Image {
//    id: imageText;
//    width: 50;
//    height: 30;
//    source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow.png";

//    Image {
//        width: 50;
//        height: 30;
//        anchors.centerIn: imageText;
//        source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow-black.png";
//    }
//}
//跑馬燈
Rectangle {
    property var count: 0;
    property var marqueeItems: [marqueeItem1, marqueeItem2, marqueeItem3];

    Image {
        id: marqueeItem1;
        width: 50;
        height: 30;
        source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow.png";
        x: 10;
        y: 10;

        Image {
            id: item1;
            width: marqueeItem1.width;
            height: marqueeItem1.height;
            anchors.centerIn: marqueeItem1;
            source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow-black.png";
            opacity: 1;
        }
    }

    Image {
        id: marqueeItem2;
        width: 50;
        height: 30;
        source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow.png";
        x: 70;
        y: 10;

        Image {
            id: item2
            width: marqueeItem2.width;
            height: marqueeItem2.height;
            anchors.centerIn: marqueeItem2;
            source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow-black.png";
            opacity: 0;
        }
    }

    Image {
        id: marqueeItem3;
        width: 50;
        height: 30;
        source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow.png";
        x: 130;
        y: 10;

        Image {
            id: item3
            width: marqueeItem3.width;
            height: marqueeItem3.height;
            anchors.centerIn: marqueeItem3;
            source: "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow-black.png";
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
