import { createContext, useState, ReactNode } from "react";

type AnimalType = {
    animal: string;
    updateAnimal: (value: string) => void;
};

export const AnimalContext = createContext({} as AnimalType);

type AnimalContextProvider = {
    children: ReactNode;
};

export function AnimalContextProvider({ children }: AnimalContextProvider) {
    const [animal, setAnimal] = useState("cow");

    function updateAnimal(value: string) {
        setAnimal(value);
    }

    return (
        <AnimalContext.Provider value={{ animal, updateAnimal }}>
            {children}
        </AnimalContext.Provider>
    );
}
