import QtQuick 2.0

//倒數3,2,1
Rectangle {
    id: flipme_item
    width: 400
    height: 400
    color: "transparent"
    property int total_count: 0
    property int front_img: 0
    property int back_img: 1
    property bool flip_now: false
    property var content: ["","3","2","1",""]

    Flipable {
        id: flip_element;
        width: 70;
        height: 70;
        z: 1;
        anchors.centerIn: parent;
        front: Text {
            id: frontText;
            z: 1;
            text: content[front_img];
            font.bold: true;
            font.pixelSize: 130;
            font.family: "Arial";
            color: "black";
            anchors.centerIn: parent;
        }

        back: Text {
            id: backText;
            z: 1;
            text: content[back_img];
            font.pixelSize: 130;
            font.family: "Arial";
            font.bold: true;
            color: "black";
            anchors.centerIn: parent;
        }

        transform: Rotation{
            id: rotation
            origin.x: flip_element.width/2
            origin.y: flip_element.height/2
            axis.x: 1; axis.y: 0; axis.z: 0   //set axis.x to 1 to rotate around x-axis
            angle: 0
        }

        states: State {
            name: "value_change"
            PropertyChanges {
                target: rotation;
                angle: 180;
            }
            when: flipme_item.flip_now;
        }

        transitions: Transition {
            NumberAnimation {
                target: rotation;
                property: "angle";
                duration: 1000;
            }
        }
    }

    Timer {
        id: img_change_timer
        running: true
        repeat: true
        interval: 1000
        onTriggered: {
            total_count++;
            if(total_count > 3)
                total_count = 0;
        }
    }

    onTotal_countChanged: {
        if(flipme_item.flip_now == false)
            flipme_item.back_img = total_count;
        else
            flipme_item.front_img = total_count;

        flipme_item.flip_now = !flipme_item.flip_now;
    }
}
