import { createContext, useState, ReactNode } from 'react'

type AnimalType = {
  animal: string
  setAnimal: any
}

export const AnimalContext = createContext({} as AnimalType)

type AnimalContextProvider = {
  children: ReactNode
}

export function AnimalContextProvider({ children }: AnimalContextProvider) {
  const [animal, setAnimal] = useState('cow')

  return (
    <AnimalContext.Provider value={{ animal, setAnimal }}>
      {children}
    </AnimalContext.Provider>
  )
}
