import Menu from '@/components/Menu'
import Landing from '@/containers/landing-page'

export default function Home() {
  return (
    <main className="min-h-screen p-5 lg:p-24 md:p-12 sm:p-5">
      <Menu />
      <Landing/>
    </main>
  )
}
