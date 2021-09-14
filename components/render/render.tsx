import { Renderer } from "@tldraw/core"
import { Rectangle } from "./rectangle"
import { appState } from "./state"

const shapeUtils = {
  rectangle: Rectangle,
}

export default function Render() {
  const page = appState.useStore((s) => s.page)
  const pageState = appState.useStore((s) => s.pageState)

  return (
    <div className="full">
      <Renderer shapeUtils={shapeUtils} page={page} pageState={pageState} />
    </div>
  )
}
