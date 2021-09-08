import * as React from "react"
import dynamic from "next/dynamic"
import { GetServerSideProps } from "next"
const Editor = dynamic(() => import("../../components/editor"), { ssr: false })

// A project will be persisted in indexdb under its `id` prop.
// Using a dynamic route, any endpoint (e.g. /persisted/abc) will
// load and persist the project at that endpoint.

interface ProjectProps {
  id: string
}

export default function ProjectPage({ id }: ProjectProps) {
  return <Editor id={id} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id.toString()

  return {
    props: {
      id,
    },
  }
}
