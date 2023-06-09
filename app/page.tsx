import Image from "next/image"

export default function Home() {
  return (
    <main className="px-2 py-10 xl:mb-10">
      <Image className="flex-1" src="/predicting-politics.svg" alt="Washington Stock Exchange logo" width={1920} height={524} />
    </main>
  )
}
