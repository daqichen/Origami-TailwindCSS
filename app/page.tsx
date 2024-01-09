import HeroSection from "@/containers/home-page/hero-section";
import HolidayCardSection from "@/containers/home-page/holiday-card-section";

export default function Home() {
  return (
    <main className="flex bg-primaryColor min-h-screen flex-col items-center justify-between p-5 lg:p-24 md:p-12 sm:p-5">
      <HeroSection/>
      <HolidayCardSection format="painting"/>
      <HolidayCardSection format="original"/>
    </main>
  )
}
