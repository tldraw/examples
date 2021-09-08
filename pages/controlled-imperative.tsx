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
// by the `onMount` callback.

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

  React.useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      const tlstate = rTLDrawState.current!
      const rect1 = tlstate.getShape("rect1")

      if (!rect1) {
        // clearInterval(interval)
        return
      }

      const color = i % 2 ? ColorStyle.Red : ColorStyle.Blue

      tlstate.patchShapes({
        id: "rect1",
        style: {
          ...rect1.style,
          color,
        },
      })

      i++
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <Editor onMount={handleMount} />
}
