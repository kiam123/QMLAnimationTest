import QtQuick 2.0

Text {
    id: root
    width: 50
    height: 50
    x: 10
    y: 10
    text: "123"
//    source: "qrc:/new/prefix1/images/star.png"
    visible: true
    function run() {
        visible = true;
        pathAnimation.start();
    }
    PathAnimation {
        id: pathAnimation
        running: true;
        target: root
//        loops: -1
        duration: 2400
        orientation: PathAnimation.TopFirst
        easing.type: Easing.Ease
        path: Path{
            startX: 10
            startY: 10
            PathCurve { x: parent.width/2; y: parent.height/2}
//            PathCurve { x: 210; y: 200}
//            PathCurve { x: 260; y: 35}
//            PathCurve { x: 310; y: 25}
        }
    }
}
