import { createContext, createSignal, type ParentProps } from "solid-js";

interface Props {
  registerSlide: () => number
}

export const SlideContext = createContext<Props>({
  registerSlide: () => 0,
});

export function SlideProvider(props: ParentProps) {
  const [count, setCount] = createSignal(0)

  const registerSlide = () => {
    setCount(count() + 1)
    console.log("register slide", count())

    return count()
  }

  return (
    <SlideContext.Provider value={{ registerSlide }}>
      {props.children}
    </SlideContext.Provider>
  )
}
