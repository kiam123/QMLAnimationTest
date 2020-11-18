import QtQuick 2.0
Item {
    id: flipme_item
    width: 400
    height: 400
    property int total_count: 0
    property int front_img: 0
    property int back_img: 1
    property bool flip_now: false
    property variant content: ["","S","R","I","N","I","V","A","S","A","N",""]

    Flipable {
        id: flip_element
        width: 70
        height: 70
        anchors.centerIn: parent
        front: Text {
            id: frontText
            text: content[front_img]
            font.bold: true
            font.pixelSize: 90
            font.family: "Arial"
            color: "white"
            anchors.centerIn: parent
        }

        back: Text {
            id: backText
            text: content[back_img]
            font.pixelSize: 90
            font.family: "Arial"
            font.bold: true
            color: "white"
            anchors.centerIn: parent
        }

        transform: Rotation{
            id: rotation
            origin.x: flip_element.width/2
            origin.y: flip_element.height/2
            axis.x: 1; axis.y: 0; axis.z: 0   //set axis.x to 1 to rotate around x-axis
            angle: 0
        }

        /*Flipable element rotates from 0 to 180 degree during state change defined by "when" property.
        If the "when" property fails, it reverts back to the default state of 0 deg.*/

        states: State {
            name: "value_change"
            PropertyChanges {target: rotation; angle: 180}
            when: flipme_item.flip_now
        }
        transitions: Transition {
            NumberAnimation { target: rotation; property: "angle"; duration: 1000 }
        }
    }

    Timer {
        id: img_change_timer
        running: true
        repeat: true
        interval: 1000
        onTriggered: {
            total_count++;
            if(total_count > 10)
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
