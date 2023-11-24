import Image from 'next/image'
import BgMobile from '../../public/images/bg-header-mobile.svg'
import BgDesktop from '../../public/images/bg-header-desktop.svg'
import data from '../../public/data.json'
import Jobs from '@/components/Jobs'

export default function Home() {
  const jobs = data

  return (
    <main className="flex min-h-screen flex-col items-center text-black bg-[#EFFAFA] w-screen pb-[100px]">
      <header className="bg-blue w-full">
        <Image alt="header" className="md:hidden w-full" src={BgMobile} />
        <Image alt="header" className="hidden md:block" src={BgDesktop} />
      </header>
      <Jobs jobs={jobs} />
    </main>
  )
}
