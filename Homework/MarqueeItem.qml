import QtQuick 2.0
import QtQuick.Layouts 1.3

//TODO 需要持續做跑馬燈
Rectangle {
    id: rootItem;
    color: Qt.rgba(0.5,0.5,0.5,0);
    border.width: 1;
    border.color: 'gray';
    width: 50;
    height: 50;
    x: 10;
    y: 10;

    Rectangle {
        id: item
        width: rootItem.width;
        height: rootItem.height;
        anchors.centerIn: rootItem;
        color: "red";
        opacity: 0;
    }
}
