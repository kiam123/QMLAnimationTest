import QtQuick 2.12
import QtQuick.Window 2.12

Window {
    width: 640
    height: 480
    visible: true
    title: qsTr("Hello World")

//    Rectangle {
//        width: 100; height: 100
//        color: "red"
//        //反弹效果
//        PropertyAnimation on x {to: 100; duration: 1000; easing.type: Easing.OutBounce}
//        PropertyAnimation on y {to: 100; duration: 1000; easing.type: Easing.OutBounce}
//    }

    Rectangle {
        id: rect
        width: 120; height: 200
        color: "skyblue"

//        MouseArea {id: mouseArea; anchors.fill: parent}

//        states: State {//点击时候，y轴改变，宽度改变
//            name: "pressed";
//            when: mouseArea.clicked;
//            PropertyChanges {
//                target: rect;
//                color: "blue";
//                y: mouseArea.mouseY;
//                width: mouseArea.mouseX;
//            }
//        }

        transitions: Transition {
            SequentialAnimation {
                loops: Animation.Infinite
                //颜色改变时间
                ColorAnimation { duration: 200 }
                PauseAnimation { duration: 200 }

                ParallelAnimation {
                    NumberAnimation {
                        duration: 500
                        easing.type: Easing.OutBounce
                        targets: rect
                        properties: "y"
                    }

                    NumberAnimation {
                        duration: 800
                        easing.type: Easing.InOutQuad
                        targets: redRect
                        properties: "width"
                    }
                }
            }
        }
    }
}
