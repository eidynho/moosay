import { useContext } from "react"
import { AnimalContext } from "../contexts/AnimalContext"


export function TextareaComponent() {
  const { animal } = useContext(AnimalContext)

  const placeholderMessage = `Say something and the ${animal} will repeat...`

  return (
    <textarea 
      rows={6}
      placeholder={placeholderMessage}
      className="w-5/6 p-4 m-4 rounded-lg text-zinc-900 outline-none"
    />
  )
}