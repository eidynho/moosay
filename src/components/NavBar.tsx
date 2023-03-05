import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";

export function NavBarComponent() {
    const { setAnimal } = useContext(AnimalContext);

    return (
        <nav className="flex items-center justify-between w-full px-8 sm:px-16 h-16">
            <span className="font-poppins">vacho.co</span>
            <select
                className="text-zinc-900 py-2 px-4 rounded-lg outline-none"
                onChange={(e) => setAnimal(e.target.value)}
            >
                <option value="cow">Cow</option>
                <option value="bat">Bat</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="dolphin">Dolphin</option>
                <option value="ducks">Ducks</option>
                <option value="fish">Fish</option>
                <option value="tux">Tux &#40;Linux&#41;</option>
            </select>
        </nav>
    );
}
