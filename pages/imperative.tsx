import * as React from "react"
import dynamic from "next/dynamic"
import {
  ColorStyle,
  DashStyle,
  SizeStyle,
  TLDrawDocument,
  TLDrawShapeType,
  TLDrawState,
} from "@tldraw/tldraw"
const Editor = dynamic(() => import("../components/editor"), { ssr: false })

// You can control the editor through the `tlstate` instance shared
// by the `onMount` callback. You can use this to create shapes,
// change existing shapes, or do anything else that might be done by
// TLDraw's own UI.

export default function ControlledExample() {
  const rTLDrawState = React.useRef<TLDrawState>()

  const handleMount = React.useCallback((state: TLDrawState) => {
    rTLDrawState.current = state

    state.createShapes(
      {
        id: "rect1",
        type: TLDrawShapeType.Rectangle,
        name: "Rectangle",
        childIndex: 1,
        point: [0, 0],
        size: [100, 100],
      },
      {
        id: "rect2",
        name: "Rectangle",
        type: TLDrawShapeType.Rectangle,
        point: [200, 200],
        size: [100, 100],
      }
    )
  }, [])

  return <Editor onMount={handleMount} />
}
