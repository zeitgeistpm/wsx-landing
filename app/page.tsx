import Image from "next/image"

export default function Home() {
  return (
    <main className="flex relative">
      <Image className="flex-1 mt-6 mb-24" src="/predicting-politics.svg" alt="Washington Stock Exchange logo" width={1000} height={600} />
    </main>
  )
}
