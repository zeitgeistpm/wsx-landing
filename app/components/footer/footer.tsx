import Image from "next/image"

export default function Footer() {
  return (
    <footer className="flex items-start sm:gap-16 justify-center p-8">
      <Image src="/zeitgeist-logo-rectangle.svg" alt="Zeitgeist logo" width={170} height={65} />
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </footer>
  )
}
