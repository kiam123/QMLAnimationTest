import QtQuick 2.0
import QtQuick.Layouts 1.3

//TODO 需要持續做跑馬燈
Item {
    id: rootItem;
    property var components: [];
    property var count: 0;

    Component.onCompleted: {
        for(var i = 0;i < 3;i++) {
            createComponent();
        }
        aim.running = true;
    }

    function createComponent() {
        var tmp = Qt.createComponent("TempItem.qml");
        if(tmp.status === Component.Ready) {
            rootItem.components.push(tmp.createObject(rootItem, {objectName: count, "x": rootItem.count * 55, "y": 0}));
        }
        console.log(rootItem.components[0]["objectName"]);
        action.targets.push(rootItem.components[count]);

        count++;
    }

    ParallelAnimation {
        id: aim;
        running: false;
        ColorAnimation {
            id: action;
            property: "color";
            to: "black";
            duration: 3000;
        }
    }
}
