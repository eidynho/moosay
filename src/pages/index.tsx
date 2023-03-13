import { CardsExamples } from "@/components/Layout/CardsExamples";
import { Header } from "@/components/Layout/Header";
import { ThinkCreateHaveFun } from "@/components/Layout/ThinkCreateHaveFun";

export default function Home() {
    return (
        <div className="md:container mx-auto">
            <Header />
            <CardsExamples />
            <ThinkCreateHaveFun />
        </div>
    );
}
