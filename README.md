# example

### Note: This is a very early version!

This project shows how the [tldraw](https://tldraw.com) editor can be integrated with an outside app.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

Because this is a very early release, we recommend not using tldraw outside of this project. If you want to try using tldraw outside of this project, you can follow the instructions below.

### Installation

The tldraw app is currently shared via two packages: `@tldraw/editor` and `@tldraw/styles`. To use the editor, you must install both packages as dependencies.

```bash
yarn add @tldraw/editor @tldraw/styles
```

Currently, tldraw can only be used inside of a React app. You may need to install additional peer dependencies as well.

### Usage

To use tldraw, import the `Editor` component from `@tldraw/editor` and `globalStyles` from `@tldraw/styles`, and use them as shown in the example below.

```tsx
// EXAMPLE API - NOT YET IMPLEMENTED

import Editor from "@tldraw/editor"
import { globalStyles } from "@tldraw/styles"

function MyApp() {
  globalStyles()

  return <Editor />
}
```

If using the editor in a server-side-rendered page, you should import the Editor dynamically. This project shows how this is done in a Next.js app, however other server-side-rendered frameworks may require other steps.

```tsx
import dynamic from "next/dynamic"
const Editor = dynamic(() => import("@tldraw/editor"), { ssr: false })

export default function Home() {
  return <Editor />
}
```

### What's missing

This version of the project is missing a few pieces:

- The code editor
- Loading / saving local files

The tldraw public API is still in development. When ready, you will be able to load documents and manipulate the editor's state through the `Editor` component's props.

```tsx
// EXAMPLE API - NOT YET IMPLEMENTED

import Editor from "@tldraw/editor"
import { globalStyles } from "@tldraw/styles"

import myDocument from "./my-document.json"

function MyApp() {
  globalStyles()

  function handleSave() { ... }
  function handleLoad() { ... }
  function handleUpdate() { ... }

  return (
    <Editor
      document={myDocument}
      onSave={handleSave}
      onLoad={handleLoad}
      onUpdate={handleUpdate}
    />
  )
}
```

Have an idea for a prop or other integration? Let us know on [Discord](https://discord.gg/SBBEVCA4PG).
