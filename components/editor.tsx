import * as React from "react"
import { TLDraw, TLDrawProps, TLDrawState } from "@tldraw/tldraw"

export default function Editor(props: TLDrawProps) {
  return <TLDraw {...props} />
}
