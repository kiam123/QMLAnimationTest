import QtQuick 2.4

ScrollableItem{
       width : parent.width
       height : parent.height

       LayoutMirroring.enabled: true
       LayoutMirroring.childrenInherit: true

       RowLayout{
          spacing: 500
          layoutDirection: Qt.RightToLeft
          Button{
          }
          Button{
          }
          Button{
          }
       }
    }
