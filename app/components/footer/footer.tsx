import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-center p-10 xl:p-0 xl:mb-10">
      <Image className="order-2 lg:order-1" src="/zeitgeist-logo-rectangle.svg" alt="Zeitgeist logo" width={170} height={65} />
      <p className="order-1 lg:order-2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </footer>
  )
}
