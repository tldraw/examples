import * as React from "react"
import { TLShape, Utils, TLBounds, SVGContainer, ShapeUtil } from "@tldraw/core"

// Define a custom shape

export interface RectangleShape extends TLShape {
  type: "rectangle"
  size: number[]
}

// Create a "shape utility" class that interprets that shape

export const Rectangle = new ShapeUtil<RectangleShape, SVGSVGElement>(() => ({
  type: "rectangle",
  defaultProps: {
    id: "example1",
    type: "rectangle",
    parentId: "page1",
    childIndex: 0,
    name: "Example Shape",
    point: [0, 0],
    size: [100, 100],
    rotation: 0,
  },
  Component({ shape, events, meta }, ref) {
    return (
      <SVGContainer ref={ref}>
        <g {...events}>
          <rect
            width={shape.size[0]}
            height={shape.size[1]}
            fill="none"
            stroke="black"
          />
        </g>
      </SVGContainer>
    )
  },
  Indicator({ shape }) {
    return (
      <rect
        width={shape.size[0]}
        height={shape.size[1]}
        fill="none"
        stroke="black"
      />
    )
  },
  getBounds(shape) {
    const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
      const [width, height] = shape.size
      return {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        width,
        height,
      } as TLBounds
    })

    return Utils.translateBounds(bounds, shape.point)
  },
  getRotatedBounds(shape) {
    return {
      minX: 0,
      minY: 0,
      maxX: 100,
      maxY: 100,
      width: 100,
      height: 100,
    }
  },
  shouldRender(prev, next) {
    return prev.point !== next.point
  },
}))
