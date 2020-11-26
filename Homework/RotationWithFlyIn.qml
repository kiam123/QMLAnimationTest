import QtQuick 2.0

//陀螺旋轉+飛入
Image {
    id: rect_parallel;
    width: 100;
    height: 100;
    source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/family2.png";
    antialiasing: true;

    states: State {
        name: "rotated"
        PropertyChanges {
            target: rect_parallel;
            rotation: 180;
        }
    }

    transitions: Transition {
        ParallelAnimation {
            NumberAnimation {
                target: rect_parallel;
                properties: "x";
                to: 300;
                duration: 1000;
            }

            RotationAnimation {
                duration: 1000;
                direction: RotationAnimation.Counterclockwise;
            }
        }
    }

    Component.onCompleted: {
        rect_parallel.state = "rotated";
    }
}





