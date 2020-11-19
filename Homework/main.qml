import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.0

Window {
    id: rootItem;
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")
    property var count: 0;
    property var component: [];

    property var count2: 0;
    property var component2: [];

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
        rootItem.component.push(Qt.createComponent("FlipableRightToLeft.qml"));
        console.log(typeof rootItem.component[count]);
        var item;
        if(rootItem.component[count].status === Component.Ready) {
            item = rootItem.component[count].createObject(rootItem, {objectName: count, "x": rootItem.count * 55, "y": 0});
        }
        console.log(typeof item);

        count++;
    }

}
