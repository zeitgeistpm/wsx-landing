import Image from "next/image"
import EmailSubscribe from "./components/email-subscribe"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Image className="py-10 right-[590px] md:max-w-none md:relative  lg:static lg:-translate-x-0 lg:max-w-full" src="/wsx.png" alt="Washington Stock Exchange logo" width={1877} height={300} />
      <EmailSubscribe className="md:absolute bottom-20 left-1/2 md:-translate-x-1/2 lg:left-0 lg:-translate-x-0" />
    </main>
  )
}
