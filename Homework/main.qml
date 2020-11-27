import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Controls 2.0

Window {
    id: rootItem;
    width: 640;
    height: 480;
    visible: true;
    title: qsTr("Hello World");
    property var count: 0;
    property var components: [];

    Button {
        id: btn;
        x: 35
        y: 55
        text: "add";
        onClicked: {
            createComponent();
        }
    }

    function createComponent(qmlFile = "ImageEmbedImage.qml", properties = {}) {
        rootItem.components.push(Qt.createComponent(qmlFile));
        console.log(typeof rootItem.components[count]);
        console.log("error: "+rootItem.components[count].errorString());
        var item;
        if(rootItem.components[count].status === Component.Ready) {
            item = rootItem.components[count].createObject(rootItem, properties/*, {objectName: count, "x": rootItem.count * 55, "y": 0}*/);
//            console.log("error: "+rootItem.components[count].errorString());
        }
        console.log(typeof item,' omg ',count);

        count++;
        return item;
    }

    Item {
        focus: true
        Keys.onPressed: {
            console.log("omg....................",event.key);
            var componentItem = {};
            var image = "";
            var tempComponentItem = {};
            var i = 0;
            var position = [[]];
            if (event.key === Qt.Key_0) {
                console.log("0....................");
                position = [[60, 30, 90, 60],
                                 [100, 70, 70, 40]];
                componentItem = createComponent("AppearOnetoOne.qml");

                for(i = 0;i < 4; i++) {
                    tempComponentItem = createComponent("AppearOnetoOneItem.qml", { "imageSource": "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/love.png",
                                                                                        "imageOpacity": 0,
                                                                                        "imageX": position[0][i],
                                                                                        "imageY": position[1][i]});
                    componentItem.componentArr.push(tempComponentItem);
                }
                componentItem.timer.start();
            } else if (event.key === Qt.Key_1) {
                console.log("1....................");
                componentItem = createComponent("FadeInWithFadeOut.qml", { "imageSource": "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/crow.png"});
                componentItem.parallel.start();
            } else if (event.key === Qt.Key_2) {
                console.log("2....................");
                createComponent("Flip.qml")
            } else if (event.key === Qt.Key_3) {
                console.log("3....................");
//                createComponent("FlipableRightToLeft.qml");
                image = "qrc:/animation-image/cute2.png";
                componentItem = createComponent("FlipableRightToLeft.qml", { "imageSource": image, "imageSource2": image});
            } else if (event.key === Qt.Key_4) {
                console.log("4....................");
                image = "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/crow.png";
                componentItem = createComponent("JumpIn.qml", { "imageSource": image});
            } else if (event.key === Qt.Key_5) {
                console.log("5....................");
                componentItem = createComponent("MarqueeImageEmbedImage.qml");
                position = [[10, 70, 130],
                            [10, 10, 10]];

                for(i = 0;i < 3; i++) {
                    tempComponentItem = createComponent("MarqueeImageEmbedImageItem.qml",
                                                        { "imageSource": "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow.png",
                                                          "itemSource": "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/arrow-black.png",
                                                          "imageX": position[0][i], "imageY": [1][i]
                                                        });
                    componentItem.marqueeItems.push(tempComponentItem);
                }
                componentItem.timer.start();
            } else if (event.key === Qt.Key_6) {
                console.log("6....................");
                createComponent("MarqueeText.qml");
            } else if (event.key === Qt.Key_7) {
                image = "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/family2.png";
                createComponent("RotationWithFlyIn.qml", {"imageSource": image} );
            } else if (event.key === Qt.Key_8) {
                console.log("8....................");
                image = "file:///D:/QtProjects/QMLAnimationTest/Homework/animation-image/cute2.png";

                createComponent("ScaleAnimation.qml", { "imageSource": image, "imageX": 190, "imageY": 100 })
            } else if (event.key === Qt.Key_9) {
                console.log("9....................");
                createComponent("ScaleAnimation2.qml")
            }
        }
    }


}
