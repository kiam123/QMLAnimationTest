import QtQuick 2.12
import QtQuick.Window 2.12

Window {
    id: root
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")
    property int duration: 3000;

    Image {
        id: ball;
        height: 50;
        width: 50;
        x: 20; y: 240
        source: "qrc:/new/prefix1/img/ball.png"

        MouseArea {
            anchors.fill: parent
            onClicked: {
                ball.x = 20; ball.y = 240
                anim.restart()
            }
        }
    }

    ParallelAnimation {
        id: anim
        SequentialAnimation {
            NumberAnimation {
                target: ball;
                properties: "y";
                to: 20;
                duration: root.duration * 0.4;
                easing.type: Easing.OutCirc;
            }
            NumberAnimation {
                target: ball;
                properties: "y";
                to: 240;
                duration: root.duration * 0.6;
                easing.type: Easing.OutBounce;
            }
        }
        NumberAnimation {
            target: ball
            properties: "x"
            to: 400
            duration: root.duration
        }
        RotationAnimation {
            target: ball
            properties: "rotation"
            to: 720
            duration: root.duration * 1.1
        }
    }
}
