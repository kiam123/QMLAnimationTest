import QtQuick 2.0

//從小到大(放大)
Image {
    id: rect;
    width: 0;
    height: 0;
    anchors.centerIn: parent;
    source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/圖片2.png"
//    color: "blue";
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
            to: 100;
            duration: 800;
            onDurationChanged: {
                rect.anchors.centerIn = null;
            }
        }
    }
}
