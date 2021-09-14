import * as React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="home">
      <h1>tldraw examples</h1>
      <h2>
        <a href="https://www.npmjs.com/package/@tldraw/core">@tldraw/core</a>
      </h2>
      <ul>
        <li>
          <Link href="/core">
            <a>Core</a>
          </Link>
        </li>
      </ul>
      <h2>
        <a href="https://www.npmjs.com/package/@tldraw/tldraw">
          @tldraw/tldraw
        </a>
      </h2>
      <ul>
        <li>
          <Link href="/basic">
            <a>Basic</a>
          </Link>
        </li>
        <li>
          <Link href="/changing-document">
            <a>Changing Document</a>
          </Link>
        </li>
        <li>
          <Link href="/controlled-props">
            <a>Controlled Props</a>
          </Link>
        </li>
        <li>
          <Link href="/controlled-imperative">
            <a>Controlled Imperative</a>
          </Link>
        </li>
        <li>
          <Link href="/imperative">
            <a>Imperative</a>
          </Link>
        </li>
        <li>
          <Link href="/persisted/some_id">
            <a>Persisted (under id)</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
