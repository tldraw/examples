import { Tldraw } from "@tldraw/tldraw";

export default function Editor() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
}
