import { type ParentProps } from "solid-js";
import { cn } from "../util/style";

interface Props {
  id: string
  align?: "top" | "center"
}

export default function Slide(props: ParentProps<Props>) {

  return (
    <div id={props.id} class="bg-zinc-900 w-full h-svh flex items-center justify-center">
      <div class={cn(
        "scale-100 hd:scale-150 fhd:scale-[200%] w-[960px] h-[540px] flex",
        props.align == "center" ? "items-center" : "items-start"
      )}>
        <div class="prose prose-2xl prose-invert p-20 max-w-none">
          {props.children}
        </div>
      </div>
    </div>
  )
}
