import QtQuick 2.12
import QtQuick.Window 2.12
import QtQuick.Particles 2.0

Window {
    id: root
    visible: true
    width: 640
    height: 480
    title: qsTr("Hello World")
    property bool tracer: false

    ParticleSystem {
        id: particleSystem
    }

    Emitter {
        id: emitter
        anchors.centerIn: parent
        width: 160; height: 80
        system: particleSystem
        emitRate: 10
        lifeSpan: 1000
        lifeSpanVariation: 500
        size: 16
        endSize: 32
    }

    ImageParticle {
        source: "qrc:/images/particle.png"
        system: particleSystem
    }
}
