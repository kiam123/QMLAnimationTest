import QtQuick 2.0


//放大縮小
Rectangle {
    id: rect;
    width: 0;
    height: 0;
    anchors.centerIn: parent;
    color: "blue";
    property var animation;

    PropertyAnimation {
        id: enlarge;
        target: rect;
        properties: "width, height";
        to: 150;
        duration: 800;
        onStarted: {
            rect.animation = enlarge;
        }
    }

    PropertyAnimation {
        id: shrink;
        target: rect;
        properties: "width, height";
        to: 50;
        duration: 800;
        onStarted: {
            rect.animation = shrink;
        }
    }

    Component.onCompleted: {
        if(rect.animation === shrink || rect.animation === undefined) {
            enlarge.start();
        } else {
            shrink.start();
        }
    }

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
