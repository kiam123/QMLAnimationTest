import QtQuick 2.2

//從小到大(放大)+移動
Rectangle {
    id: rect;
    width: 100;
    height: 100;
    //x, y 置中
//    x: parent.width / 2 - width / 2;
//    y: parent.height / 2 - height / 2;

    color: Qt.rgba(0.5,0.5,0.5,0)
    property alias scaleAnimation: scaleAnimation

    Text {
        id: rect1
        color: "blue";
        anchors.centerIn: rect;
        text: "Nice to have you."
        z: 1;


        SequentialAnimation {
            id: scaleAnimation;
            running: false;

            PropertyAnimation {
                target: rect1;
                properties: "font.pointSize"; // 放大文字
                to: 100;
//                width 和 height 為圖片
//                properties: "width, height";
//                to: 150;
                duration: 400;
            }

            PropertyAnimation {
                target: rect1;
                properties: "font.pointSize"; // 放大文字
                to: 25;
//                width 和 height 為圖片
//                properties: "width, height";
//                to: 50;
                duration: 400;
            }


            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x + 50;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y + 50;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x - 50;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y + 50;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x - 50;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y - 50;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x + 50;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y - 50;
                    duration: 200;
                }
            }

            ParallelAnimation {
                PropertyAnimation {
                    target: rect;
                    properties: "x";
                    to: rect.x;
                    duration: 200;
                }

                PropertyAnimation {
                    target: rect;
                    properties: "y";
                    to: rect.y;
                    duration: 200;
                }
            }

            PropertyAnimation {
                target: rect1;
                properties: "font.pointSize" // 放大文字
                to: 100;
                duration: 400;
            }
        }
    }
}
