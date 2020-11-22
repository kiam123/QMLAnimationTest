import QtQuick 2.0

//文字跑馬燈
Rectangle {
    width: 131; height: 25
//    color: "red"
    clip:true
    anchors.centerIn: parent

    Text
    {
        id:idtext
        //width: parent.width
        height:parent.height
        text:"123456789abcdefghijklmnopqrstuvwxyz"
        color:"black"
        verticalAlignment: Text.AlignVCenter

        SequentialAnimation on x {
//            loops: Animation.Infinite

            PropertyAnimation {
                from:0
                to: -idtext.width
                duration: 5000
            }
        }
    }
}
