import { For, createEffect, createSignal, onCleanup, onMount, type ParentProps } from "solid-js";
import Slide from "./slide";

interface Props {
}

export default function SlideDeck(props: ParentProps<Props>) {
  const [location, setLocation] = createSignal(0)

  const slides = () => {
    const el = props.children as HTMLElement
    const els: Element[][] = []

    el.childNodes.forEach((el) => {
      if (els.length == 0) {
        els.push([])
      }

      if (el.nodeName == "HR") {
        els.push([])
        return
      }

      const last = els[els.length - 1]
      last.push(el as Element)
    })

    return els
  }

  const onKeydown = (e: KeyboardEvent) => {

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
        e.preventDefault()
        setLocation(Math.min(location() + 1, slides().length - 1))
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault()
        setLocation(Math.max(location() - 1, 0))
        break;
    }
  }

  createEffect(() => {
    window.location.hash = location().toString()
  })

  onMount(() => [
    window.addEventListener("keydown", onKeydown)
  ])

  onCleanup(() => {
    window.removeEventListener("keydown", onKeydown)
  })


  return (
    <div>
      <For each={slides()}>
        {(item, i) => {
          return (<Slide id={i().toString()}> {item} </Slide>)
        }}
      </For>
    </div>
  )
}
