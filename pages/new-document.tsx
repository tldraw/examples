import * as React from "react"
import dynamic from "next/dynamic"
import {
  ColorStyle,
  DashStyle,
  SizeStyle,
  TLDrawDocument,
  TLDrawShapeType,
} from "@tldraw/tldraw"
const Editor = dynamic(() => import("../components/editor"), { ssr: false })

// Changing the `document` to a new document with a different id
// will replacing the current state with a fresh state holding
// the new document.

export default function ControlledExample() {
  const [doc, setDoc] = React.useState<TLDrawDocument>({
    id: "doc",
    pages: {
      page1: {
        id: "page1",
        shapes: {
          rect1: {
            id: "rect1",
            type: TLDrawShapeType.Rectangle,
            parentId: "page1",
            name: "Rectangle",
            childIndex: 1,
            point: [100, 100],
            size: [100, 100],
            style: {
              dash: DashStyle.Draw,
              size: SizeStyle.Medium,
              color: ColorStyle.Blue,
            },
          },
        },
        bindings: {},
      },
    },
    pageStates: {
      page1: {
        id: "page1",
        selectedIds: ["rect1"],
        camera: {
          point: [0, 0],
          zoom: 1,
        },
      },
    },
  })

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDoc({
        id: "doc2", // Note the new ID!
        pages: {
          page1: {
            id: "page1",
            shapes: {
              rect2: {
                id: "rect2",
                parentId: "page1",
                name: "Rectangle",
                childIndex: 2,
                type: TLDrawShapeType.Rectangle,
                point: [150, 250],
                size: [150, 150],
                style: {
                  dash: DashStyle.Draw,
                  size: SizeStyle.Medium,
                  color: ColorStyle.Orange,
                },
              },
            },
            bindings: {},
          },
        },
        pageStates: {
          page1: {
            id: "page1",
            selectedIds: ["rect2"],
            camera: {
              point: [0, 0],
              zoom: 1,
            },
          },
        },
      })
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <Editor document={doc} />
}
