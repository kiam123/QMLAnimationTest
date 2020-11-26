import QtQuick 2.0

Item {
    property alias imageSource: marqueeItem1.source;
    property alias imageX: marqueeItem1.x;
    property alias imageY: marqueeItem1.y;
    property alias itemSource: item1.source;
    property alias itemOpacity: item1.opacity;

    Image {
        id: marqueeItem1;
        width: 50;
        height: 30;

        Image {
            id: item1;
            width: marqueeItem1.width;
            height: marqueeItem1.height;
            anchors.centerIn: marqueeItem1;
            opacity: 0;
        }
    }
}
