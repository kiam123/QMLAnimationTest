import QtQuick 2.0

//陀螺旋轉+飛入
Item {
    property alias rect_parallel: rect_parallel;
    property alias imageSource: rect_parallel.source;

    Image {
        id: rect_parallel;
        width: 300;
        height: 300;
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
                    to: 600;
                    duration: 1500;
                }

                RotationAnimation {
                    duration: 1500;
                    direction: RotationAnimation.Counterclockwise;
                }
            }
        }

        Component.onCompleted: {
            rect_parallel.state = "rotated";
        }
    }
}





