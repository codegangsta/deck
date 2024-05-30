import { type ParentProps } from "solid-js";
import { cn } from "../util/style";

interface Props {
  id: string
}

export default function Slide(props: ParentProps<Props>) {

  return (
    <div id={props.id} class="bg-zinc-900 w-full h-svh flex items-center justify-center border-b border-zinc-700 overflow-hidden">
      <div class={cn(
        "scale-100 hd:scale-150 fhd:scale-[200%] w-[960px] h-[540px] flex items-center",
      )}>
        <div class="prose prose-2xl prose-invert p-20 max-w-none w-full prose-ul:leading-7 prose-code:leading-6">
          {props.children}
        </div>
      </div>
    </div>
  )
}
