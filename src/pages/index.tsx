import { CardsExamples } from "@/components/Layout/CardsExamples";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { ThinkCreateHaveFun } from "@/components/Layout/ThinkCreateHaveFun";

export default function Home() {
    return (
        <div className="md:container mx-auto">
            <Header />
            <CardsExamples />
            <ThinkCreateHaveFun />
            <Footer />
        </div>
    );
}
