import QtQuick 2.2


//從小到大(放大)+移動
Rectangle {
    id: rect;
    width: 100;
    height: 100;
    x: parent.width/2 - width/2;
    y: parent.height/2 - height/2;
    color: Qt.rgba(0.5,0.5,0.5,0)

    Rectangle {
        id: rect1
        color: "blue";
        anchors.centerIn: rect;


        SequentialAnimation {
            running: true;

            PropertyAnimation {
                id: enlarge;
                target: rect1;
                properties: "width, height";
                to: 150;
                duration: 400;
            }

            PropertyAnimation {
                id: shrink;
                target: rect1;
                properties: "width, height";
                to: 50;
                duration: 400;
            }

            PropertyAnimation {
                target: rect;
                properties: "x, y";
                to: rect.x + 100;
                duration: 600;
            }
        }
    }
}
