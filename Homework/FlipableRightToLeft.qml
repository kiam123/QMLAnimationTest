import QtQuick 2.4

Flipable {
    id: flipable
    width: 240
    height: 240

    property bool flipped: false

    front: Image { source: "qrc:/new/prefix1/images/rocket.png"; anchors.centerIn: parent }
    back: Image { source: "qrc:/new/prefix1/images/star.png"; anchors.centerIn: parent }

    transform: Rotation {
        id: rotation
        origin.x: flipable.width/2
        origin.y: flipable.height/2
        axis.x: 0; axis.y: 1; axis.z: 0     // set axis.y to 1 to rotate around y-axis
        angle: 0    // the default angle
    }

    states: State {
        name: "back"
        PropertyChanges { target: rotation; angle: 540 }
        when: flipable.flipped
    }

    transitions: Transition {
        NumberAnimation { target: rotation; property: "angle"; duration: 4000 }
    }

    Component.onCompleted: {
        onClicked: flipable.flipped = !flipable.flipped
    }

//    MouseArea {
//        anchors.fill: parent
//        onClicked: flipable.flipped = !flipable.flipped
//    }
}
