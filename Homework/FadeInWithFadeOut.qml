import QtQuick 2.0

// FadeIn FadeOut
Image {
    id: rootItem;
    width: 300;
    height: 300;
    opacity: 0;
    property alias imageSource: rootItem.source;
    property alias parallel: parallel;
    property alias imageX: rootItem.x;
    property alias imageY: rootItem.y;
    property var easingType: Easing.OutBounce;

    // fadeIn, fadeOut
    SequentialAnimation {
        id: parallel;
        running: false;

        NumberAnimation {
            target: rootItem;
            properties: "opacity";
            from: 0;
            to: 1
            duration: 4000;
        }
        NumberAnimation {
            target: rootItem;
            properties: "opacity";
            from: 1;
            to: 0;
            duration: 2000;
        }
    }
}
