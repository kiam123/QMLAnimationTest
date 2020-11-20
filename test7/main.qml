import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.0

Window {
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")

    Item {
        id: root
        state: "stop"

        states: [
            State {
                name: "stop"
                PropertyChanges { target: light1; color: "red" }
                PropertyChanges { target: light2; color: "black" }
            },
            State {
                name: "go"
                PropertyChanges { target: light1; color: "black" }
                PropertyChanges { target: light2; color: "green" }
            }
        ]

//        transitions: [
//            Transition {
//                from: "stop"; to: "go"
//                ColorAnimation { target: light1; properties: "color"; duration: 2000 }
//                ColorAnimation { target: light2; properties: "color"; duration: 2000 }
//            }
//        ]

        Rectangle {
            id: light1
            x: 25; y: 15
            width: 100; height: width
            radius: width/2
            color: "black"

//            MouseArea {
//                anchors.fill: parent
//                onClicked: parent.state = (parent.state == "stop"? "go" : "stop")
//            }
        }

        Rectangle {
            id: light2
            x: 25; y: 135
            width: 100; height: width
            radius: width/2
            color: "black"

//            MouseArea {
//                anchors.fill: parent
//                onClicked: parent.state = (parent.state == "stop"? "go" : "stop")
//            }
        }

        Button {
            id: goButton
            onClicked: root.state = "go"
        }
    }

}
