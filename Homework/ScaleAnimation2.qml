import QtQuick 2.2

//從小到大(放大)+移動
Rectangle {
    id: rect;
    width: 100;
    height: 100;
    x: parent.width/2 - width/2;
    y: parent.height/2 - height/2;
    color: Qt.rgba(0.5,0.5,0.5,0)

    Text {
        id: rect1
        color: "blue";
        anchors.centerIn: rect;
        text: "有你真好"


        SequentialAnimation {
            running: true;

            PropertyAnimation {
                target: rect1;
                properties: "font.pointSize"
                to: 100;
//                properties: "width, height";
//                to: 150;
                duration: 400;
            }

            PropertyAnimation {
                target: rect1;
                properties: "font.pointSize"
                to: 25;
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
        }
    }
}
