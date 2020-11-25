import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.0

Window {
    id: rootItem;
    width: 640;
    height: 480;
    visible: true;
    title: qsTr("Hello World");
    property var count: 0;
    property var components: [];

    Button {
        id: btn;
        x: 35
        y: 55
        text: "add";
        onClicked: {
            createComponent();
        }
    }

    Rectangle {
        width: 80;
        height: 20;
        x: 160;
        y: 55;
        border.color: 'gray';
        border.width: 1;
        TextInput {
            id: textWeight;
            anchors.fill: parent;
            anchors.margins: 4;
        }
    }

    Rectangle {
        width: 80
        height: 20
        x: 160
        y: 85
        border.color: 'gray';
        border.width: 1;
        TextInput {
            id: textHeight;
            anchors.fill: parent;
            anchors.margins: 4;
        }
    }

    Rectangle {
        width: 80;
        height: 20;
        x: 160;
        y: 115;
        border.color: 'gray';
        border.width: 1;
        TextInput {
            id: textX;
            anchors.fill: parent;
            anchors.margins: 4;
        }
    }

    Rectangle {
        width: 80
        height: 20
        x: 160
        y: 145
        border.color: 'gray';
        border.width: 1;
        TextInput {
            id: textY;
            anchors.fill: parent;
            anchors.margins: 4;
        }
    }

    function createComponent() {
        rootItem.components.push(Qt.createComponent("Flip.qml"));
        console.log(typeof rootItem.components[count]);
        var item;
        if(rootItem.components[count].status === Component.Ready) {
            item = rootItem.components[count].createObject(rootItem/*, {objectName: count, "x": rootItem.count * 55, "y": 0}*/);
        }
        console.log(typeof item,' omg ',count);

        count++;
    }

    Item {
        focus: true
        Keys.onPressed: {
            console.log("omg....................",event.key);

            if (event.key === Qt.Key_0) {
                console.log("0....................");
            } else if (event.key === Qt.Key_1) {
                console.log("1....................");
            } else if (event.key === Qt.Key_2) {
                console.log("2....................");
            } else if (event.key === Qt.Key_3) {
                console.log("3....................");
            } else if (event.key === Qt.Key_4) {
                console.log("4....................");
            } else if (event.key === Qt.Key_5) {
                console.log("5....................");
            } else if (event.key === Qt.Key_6) {
                console.log("6....................");
            } else if (event.key === Qt.Key_7) {
                console.log("7....................");
            } else if (event.key === Qt.Key_8) {
                console.log("8....................");
            } else if (event.key === Qt.Key_9) {
                console.log("9....................");
            }
        }
    }


}
