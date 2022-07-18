import { NavBarComponent } from './components/NavBar'
import { TextareaComponent } from './components/Textarea'

import { AnimalMessage } from './components/AnimalMessage'

export function App() {

  return (
    <div className="flex flex-col justify-center items-center md:container mx-auto">
      <NavBarComponent />
      <TextareaComponent />
      <AnimalMessage />
    </div>
  )
}
