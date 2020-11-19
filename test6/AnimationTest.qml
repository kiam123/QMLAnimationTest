import QtQuick 2.0



Row {
    spacing: 10;
    Rectangle {
        id: rect_sequential;
        width: 100; height: 100; color: "orange";
        SequentialAnimation {
            id: sequential;
            running: true;
            NumberAnimation {
                target: rect_sequential;
                properties: "width";
                to: 200;
                duration: 2000;
                easing.type: Easing.OutBack;
            }

            NumberAnimation {
                target: rect_sequential;
                properties: "height";
                to: 200;
                duration: 2000;
                easing.type: Easing.OutBack;
            }
            ParallelAnimation {
                NumberAnimation {
                    target: rect_sequential;
                    properties: "width";
                    to: 100;
                    duration: 2000;
                    easing.type: Easing.InOutBack;
                }
                NumberAnimation {
                    target: rect_sequential;
                    properties: "height";
                    to: 100;
                    duration: 2000;
                    easing.type: Easing.InOutBack;
                }
            }
        }
    }
    Rectangle {
        id: rect_parallel;
        width: 100; height: 100; color: "purple";
        ParallelAnimation {
            id: parallel;
            running: true;
            NumberAnimation {
                target: rect_parallel;
                properties: "width";
                to: 200;
                duration: 2000;
            }
            NumberAnimation {
                target: rect_parallel;
                properties: "height";
                to: 200;
                duration: 2000;
            }
        }
    }
}
