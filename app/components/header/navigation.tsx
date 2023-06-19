import EmailSubscribe from "../email-subscribe"
import Image from "next/image"

export default function Navigation() {
  return (
    <header className="flex flex-col lg:flex-row justify-center items-center pt-8 px-4 lg:pt-0 lg:px-14">
      <Image className="" src="/wsx-logo.svg" alt="Washington Stock Exchange logo" width={247} height={106} />
      <h1 className="font-bold text-3xl text-gray">The Washington Stock Exchange</h1>
    </header>
  )
}
