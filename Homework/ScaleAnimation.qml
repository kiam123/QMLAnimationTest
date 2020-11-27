import QtQuick 2.0

//從小到大(放大)
Image {
    id: rect;
    width: 0;
    height: 0;
    property alias imageSource: rect.source;
    property alias imageX: rect.x;
    property alias imageY: rect.y;

    SequentialAnimation {
        running: true;
        PropertyAnimation {
            id: enlarge;
            target: rect;
            properties: "width, height";
            to: 400;
            duration: 800;
        }

        PropertyAnimation {
            id: shrink;
            target: rect;
            properties: "width, height";
            to: 200;
            duration: 800;
            onDurationChanged: {
                rect.anchors.centerIn = null;
            }
        }
    }
}
