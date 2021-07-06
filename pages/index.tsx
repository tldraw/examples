import dynamic from "next/dynamic"
const Editor = dynamic(() => import("@tldraw/editor"), { ssr: false })

export default function Home() {
  return <Editor />
}
