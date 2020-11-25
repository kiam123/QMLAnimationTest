import QtQuick 2.0

//一個一個動作出現
Rectangle {
    property var count: 0;
    property var componentArr: [item1, item2, item3, item4];

    Image {
        id: item1;
        width: 70;
        height: 70;
        source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/love.png";
        opacity: 0;
        x: 60;
        y: 100;
    }

    Image {
        id: item2;
        width: 70;
        height: 70;
        source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/love.png";
        opacity: 0;
        x: 30;
        y: 70;
    }

    Image {
        id: item3;
        width: 70;
        height: 70;
        source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/love.png";
        opacity: 0;
        x: 90;
        y: 70;
    }

    Image {
        id: item4;
        width: 70;
        height: 70;
        source: "/home/krlee/atenProject/uc9020-OSD/themes/core/imports/Theme/Components/images/animation-image/love.png";
        opacity: 0;
        x: 60;
        y: 40;
    }


    Timer {
        running: true;
        repeat: true;
        interval: 100;
        onTriggered: {
            if(count > componentArr.length-1) {
                count = 0;
            }
            componentArr[count].opacity = 1;
            count++;
        }
    }
}

