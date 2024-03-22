import Menu from "@/components/Menu";
import TessellationHeroSection from "@/containers/tessellation-page";

export default function Tessellation() {
    return(
        <main  className="min-h-screen p-5 lg:p-24 md:p-12 sm:p-5">
            <Menu />
            <TessellationHeroSection />
        </main>
    )
}