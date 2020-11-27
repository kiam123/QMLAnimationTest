import QtQuick 2.0

//文字跑馬燈
Rectangle {
    width: parent.width;
    height: 75;
    clip:true;
    color: "transparent"
    anchors.centerIn: parent;
    property alias marquee: marquee

    Text
    {
        id:idtext;
        height:parent.height;
        text:"Stray birds of summer come to my window to sing and fly away. And yellow leaves of autumn, which have no songs, flutter and fall there with a sign.";
        font.pointSize: 50;
        color:"black";
        verticalAlignment: Text.AlignVCenter;

        SequentialAnimation on x {
            id: marquee;
            running: false;
            PropertyAnimation {
                from:0;
                to: -idtext.width;
                duration: 1000;
            }
        }
    }
}
