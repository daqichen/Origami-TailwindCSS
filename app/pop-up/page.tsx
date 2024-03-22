import Menu from "@/components/Menu";
import PopUpHeroSection from "@/containers/pop-up-page";

export default function PopUp() {
    return(
        <main  className="min-h-screen p-5 lg:p-24 md:p-12 sm:p-5">
            <Menu />
            <PopUpHeroSection />
        </main>
    )
}