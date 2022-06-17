import { useContext } from "react"
import { AnimalContext } from "./contexts/AnimalContext"

import { NavBarComponent } from './components/NavBar'
import { TextareaComponent } from './components/Textarea'

import { AnimalMessage } from './components/AnimalMessage'

export function App() {
  // const { animal, setAnimal } = useContext(AnimalContext)


  return (
    <div className="flex flex-col justify-center items-center  container mx-auto">
      <NavBarComponent />
      <TextareaComponent />
      <AnimalMessage />
    </div>
  )
}
