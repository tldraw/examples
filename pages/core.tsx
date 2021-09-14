import * as React from "react"
import dynamic from "next/dynamic"
const Render = dynamic(() => import("../components/render/render"), {
  ssr: false,
})

export default function Core() {
  return <Render />
}
