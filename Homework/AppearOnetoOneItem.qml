import QtQuick 2.0


Item{
    property alias imageSource: item1.source;
    property alias imageX: item1.x;
    property alias imageY: item1.y;
    property alias imageZ: item1.z;
    property alias imageOpacity: item1.opacity;

    Image {
        id: item1;
        width: 70;
        height: 70;
    }
}
