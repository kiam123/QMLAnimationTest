import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.0

Window {
    width: 640;
    height: 480;
    visible: true;
    title: qsTr("Hello World");

    Item {
        id: root;
        state: "stop";
        property var count: 0;
        property var components: [light1, light2];

        states: [
            State {
                name: "stop";
                PropertyChanges {
                    target: components[count];
                    color: "red";
                    onColorChanged: {
                        console.log("red");
                    }
                }
                PropertyChanges {
                    target: components[count];
                    color: "black";
                }
            },
            State {
                name: "go";
                PropertyChanges {
                    target: components[count];
                    color: "black";
                }
                PropertyChanges {
                    target: components[count];
                    color: "green";
                }
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
            id: light1;
            x: 25; y: 15;
            width: 100; height: width;
            radius: width/2;
            color: "black";

            onColorChanged: {
                console.log("123123123");
            }
        }

        Rectangle {
            id: light2;
            x: 25; y: 135;
            width: 100; height: width;
            radius: width/2;
            color: "black";

        }

        Component.onCompleted: {
            for(var i = 0; i < components.length;i++) {
                if(i === 0) {
                    components[i].color = "red";
                } else {
                    components[i].color = "black";
                }
            }
        }

        onStateChanged: {
            console.log("123");
        }

        Button {
            id: goButton
            onClicked: root.state = "go"
        }
    }

}
