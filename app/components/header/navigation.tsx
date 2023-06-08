import EmailSubscribe from "../email-subscribe"
import Image from "next/image"

export default function Navigation() {
  return (
    <header className="flex flex-col sm:flex-row justify-between gap-8">
      <Image className="flex-1 max-w-[324px]" src="/wsx-logo.svg" alt="Washington Stock Exchange logo" width={324} height={58} />
      <EmailSubscribe />
    </header>
  )
}
