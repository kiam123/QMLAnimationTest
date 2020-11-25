import QtQuick 2.0

//文字跑馬燈
Rectangle {
    width: 400; height: 25
    clip:true
    anchors.centerIn: parent

    Text
    {
        id:idtext
        height:parent.height;
        text:"何處名僧到水西，乘舟弄月宿涇溪。平明別我上山去，手攜金策踏雲梯。騰身轉覺三天近，舉足回看萬嶺低。謔浪肯居支遁下，風流還與遠公齊。此度別離何日見，相思一夜暝猿啼。";
        font.pointSize: 50;
        color:"black";
        verticalAlignment: Text.AlignVCenter;

        SequentialAnimation on x {
            PropertyAnimation {
                from:0
                to: -idtext.width
                duration: 5000
            }
        }
    }
}
