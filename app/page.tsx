import LandingPage from "@/containers/holidayCard";
import HolidayCard from "@/containers/welcome-page/holiday-card-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage/>
      <HolidayCard format="painting"/>
      <HolidayCard format="original"/>
    </main>
  )
}
