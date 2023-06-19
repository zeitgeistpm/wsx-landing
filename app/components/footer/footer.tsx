import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 justify-center max-w-[850px] mx-auto text-center">
      <p className="order-1 lg:order-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <Image className="order-1 lg:order-2" src="/zeitgeist-logo-light.svg" alt="Zeitgeist logo" width={170} height={65} />
    </footer>
  )
}
