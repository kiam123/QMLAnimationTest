import QtQuick 2.7

//陀螺旋轉+飛入
Rectangle {
    id: rect_parallel;
    width: 100; height: 100; color: "purple";
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
                duration: 2000;
            }

            RotationAnimation {
                duration: 2000;
                direction: RotationAnimation.Counterclockwise;
            }
        }
    }

    Component.onCompleted: {
        rect_parallel.state = "rotated";
    }
}




