import { TLBinding, TLPage, TLPageState } from "@tldraw/core"
import { RectangleShape } from "./rectangle"
import { StateManager } from "rko"

interface State {
  page: TLPage<RectangleShape, TLBinding>
  pageState: TLPageState
}

class AppState extends StateManager<State> {}

export const appState = new AppState({
  page: {
    id: "page1",
    shapes: {
      rect1: {
        id: "rect1",
        type: "rectangle",
        parentId: "page1",
        name: "Rectangle",
        childIndex: 0,
        point: [0, 0],
        rotation: 0,
        size: [100, 100],
      },
    },
    bindings: {},
  },
  pageState: {
    id: "page1",
    selectedIds: [],
    camera: {
      point: [0, 0],
      zoom: 1,
    },
  },
})
