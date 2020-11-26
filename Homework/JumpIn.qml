import QtQuick 2.0

// 11.彈跳進來
Image {
    id: rect_parallel;
    width: 100;
    height: 100;
    property alias imageSource: rect_parallel.source;

    ParallelAnimation {
        id: parallel;
        running: true;
        NumberAnimation {
            target: rect_parallel;
            properties: "x";
            from: parent.height;
            to: 0;
            duration: 2000;
        }
        NumberAnimation {
            target: rect_parallel;
            properties: "y";
            from: 240;
            to: 0;
            duration: 2000;
            easing.type: Easing.OutBounce;
        }
    }
}
