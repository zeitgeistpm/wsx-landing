import Image from "next/image"
import { roboto } from "../../fonts/fonts"

export default function Footer() {
  return (
    <footer className={`mt-auto flex flex-col items-center gap-8 justify-center max-w-[850px] mx-auto text-center px-6 text-sm ${roboto.className}`}>
      {/* <p className=" font-medium">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
      <Image className="" src="/powered-zeitgeist.svg" alt="Zeitgeist logo" width={277} height={35} />
      {/* <p className="text-gray-light">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> */}
    </footer>
  )
}
