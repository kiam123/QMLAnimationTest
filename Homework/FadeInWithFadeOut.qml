import QtQuick 2.0

// FadeIn FadeOut
Rectangle {
    id: rootItem;
    width: 50;
    height: 50;
    color: "red";
    property var duration: 500;
    property var easingType: Easing.OutBounce
    opacity: 0;

    SequentialAnimation {
        id: parallel;
        running: true;
        // fadeIn/fadeOut
        NumberAnimation {
            target: rootItem;
            properties: "opacity";
            from: 0; to: 1
            duration: 3000;
        }
        NumberAnimation {
            target: rootItem;
            properties: "opacity";
            from: 1; to: 0
            duration: 3000;
        }
    }
}
