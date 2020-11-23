import QtQuick 2.0


//從小到大(放大)
Rectangle {
    id: rect;
    width: 0;
    height: 0;
    anchors.centerIn: parent;
    color: "blue";
    property var animation;

    SequentialAnimation {
        running: true;
        PropertyAnimation {
            id: enlarge;
            target: rect;
            properties: "width, height";
            to: 150;
            duration: 800;
        }

        PropertyAnimation {
            id: shrink;
            target: rect;
            properties: "width, height";
            to: 50;
            duration: 800;
            onDurationChanged: {
                rect.anchors.centerIn = null;
            }
        }
    }

//    Component.onCompleted: {
//        if(rect.animation === shrink || rect.animation === undefined) {
//            enlarge.start();
//        } else {
//            shrink.start();
//        }
//    }

//    MouseArea {
//        anchors.fill: parent;
//        onClicked: {
//            if(rect.animation === shrink || rect.animation === undefined) {
//                enlarge.start();
//            } else {
//                shrink.start();
//            }
//        }

//    }
}
