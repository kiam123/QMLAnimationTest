import QtQuick 2.0

// 11.跳進來
Rectangle {
    id: rect_parallel;
    width: 100; height: 100; color: "purple";
    ParallelAnimation {
        id: parallel;
        running: true;
        NumberAnimation {
            target: rect_parallel;
            properties: "x";
            to: 300;
            duration: 2000;
        }
        NumberAnimation {
            target: rect_parallel;
            properties: "y";
            to: 240;
            duration: 2000;
            easing.type: Easing.OutBounce;
        }
    }
}
