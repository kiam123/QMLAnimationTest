import QtQuick 2.0

// 11.彈跳進來
Image {
    id: rect_parallel;
    width: 100;
    height: 100;
    source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/crow.png"
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
