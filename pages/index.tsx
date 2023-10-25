import React from "react"
import EmailSubscribe from "@/app/components/email-subscribe"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The WSX",
  description: "..."
}

const HomePage: React.FC = () => {
  return (
    <section className="relative overflow-hidden xl:max-w-screen-2xl xl:mx-auto">
      <Image className="py-10 right-[590px] md:max-w-none md:relative lg:static lg:-translate-x-0 lg:max-w-full mx-auto" src="/wsx-text.png" alt="Washington Stock Exchange logo" width={1658} height={600} quality={100} />
      <EmailSubscribe className="md:absolute bottom-20 lg:left-0 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0" />
    </section>
  )
}

export default HomePage
