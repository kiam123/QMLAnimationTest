import QtQuick 2.4

//10.文字旋轉完後+放大
Flipable {
    id: flipable
    width: 240
    height: 240
    property bool flipped: false;
    property alias imageSource: item1.source;
    property alias imageSource2: item2.source;

    //圖片
    front: Image {
        id: item1;
        x: 0;
        y: 0;
        z: 1;
        height: 50;
        width: 50;
        anchors.centerIn: parent
    }
    back: Image {
        id: item2;
        x: 0;
        y: 0;
        z: 1;
        height: 50;
        width: 50;
        anchors.centerIn: parent
    }

//    //文字
//    front: Text {
//        z: 1;
//        text: "123";
//        font.pointSize: 20;
//        anchors.centerIn: parent;
//    }
//    back: Text {
//        z: 1;
//        color:"red"
//        id: image1;
//        text: "123"
//        font.pointSize: 20;
//        anchors.centerIn: parent
//    }

    transform: Rotation {
        id: rotation
        origin.x: flipable.width/2;
        origin.y: flipable.height/2;
        axis.x: 0; axis.y: 1; axis.z: 0;     // set axis.y to 1 to rotate around y-axis
        angle: 0;    // the default angle
    }

    states: State {
        name: "back"
        PropertyChanges { target: rotation; angle: 540; }
        when: flipable.flipped
    }

    transitions: Transition {
        SequentialAnimation {
            NumberAnimation { target: rotation; property: "angle"; duration: 4000 }
            NumberAnimation {
                target: item2;
//                properties: "font.pointSize";
                properties: "height, width";
                to: 140;
                duration: 200;
            }
        }
    }

    Component.onCompleted: {
        flipable.flipped = !flipable.flipped
    }

}
