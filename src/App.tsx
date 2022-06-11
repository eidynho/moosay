import { TextareaComponent } from './components/Textarea'
import { ButtonComponent } from './components/Button'

export function App() {

  return (
    <div className="flex flex-col justify-center items-center  container mx-auto">
      <TextareaComponent />
      <ButtonComponent content="Vache say" />
    </div>
  )
}
