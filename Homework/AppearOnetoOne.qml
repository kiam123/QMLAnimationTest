import QtQuick 2.0

//一個一個動作出現
Rectangle {
    id: item
    width: 50;
    height: 50;
    color: "red";
    opacity: 0;

    NumberAnimation {
        id: go
        target: item;
        running: true;
        duration: 1000;
        properties: "opacity";
        from: 0;
        to: 1;
    }
}
