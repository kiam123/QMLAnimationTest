import QtQuick 2.4

//10.文字旋轉完後+放大
Flipable {
    id: flipable
    width: 240
    height: 240


    property bool flipped: false

    //圖片
    front: Image {
        x: 0;
        y: 0;
        height: 50;
        width: 50;
        source: "qrc:/new/prefix1/images/rocket.png";
        anchors.centerIn: parent
    }
    back: Image {
        x: 0;
        y: 0;
        id: image1;
        height: 50;
        width: 50;
        source: "qrc:/new/prefix1/images/star.png";
        anchors.centerIn: parent }

//    //文字
//    front: Text {
////        width: 50
////        height: 50
//        text: "123"
//        anchors.centerIn: parent
//    }
//    back: Text {
////        width: 50
////        height: 50
//        color:"red"
//        id: image1;
//        text: "123"
//        anchors.centerIn: parent
//    }


    transform: Rotation {
        id: rotation
        origin.x: flipable.width/2
        origin.y: flipable.height/2
        axis.x: 0; axis.y: 1; axis.z: 0     // set axis.y to 1 to rotate around y-axis
        angle: 0    // the default angle
    }

    states: State {
        name: "back"
        PropertyChanges { target: rotation; angle: 540 }
        when: flipable.flipped
    }

    transitions: Transition {
        SequentialAnimation {
            NumberAnimation { target: rotation; property: "angle"; duration: 4000 }
            NumberAnimation { target: image1;
                properties: "width, height";
                from: 50;
                to: 100;
                duration: 200;
            }
        }
    }

    Component.onCompleted: {
        flipable.flipped = !flipable.flipped
    }

}
