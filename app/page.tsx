import Image from "next/image"

export default function Home() {
  return (
    <main className="py-10">
      <Image className="flex-1" src="/wsx-text.svg" alt="Washington Stock Exchange logo" width={1920} height={524} />
    </main>
  )
}
