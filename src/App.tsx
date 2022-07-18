import { NavBarComponent } from './components/NavBar'
import { TextareaComponent } from './components/Textarea'

import { AnimalMessage } from './components/AnimalMessage'
import { InfoContent } from './components/InfoContent'

export function App() {

  return (
    <>
      <div className="flex flex-col items-center md:container mx-auto h-screen">
        <NavBarComponent />
        <TextareaComponent />
        <AnimalMessage />
      </div>
      <div className="max-w-5xl mx-auto mb-8">
        <InfoContent />
      </div>

    </>
  )
}
