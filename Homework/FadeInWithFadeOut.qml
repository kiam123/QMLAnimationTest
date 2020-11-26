import QtQuick 2.0

// FadeIn FadeOut
Image {
    id: rootItem;
    width: 100;
    height: 100;
    source: imageSource+"crow.png";
    property var easingType: Easing.OutBounce;
    opacity: 0;

    // fadeIn, fadeOut
    SequentialAnimation {
        id: parallel;
        running: true;

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
            duration: 300;
        }
    }
}
