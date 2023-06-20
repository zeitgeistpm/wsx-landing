import Image from "next/image"

export default function Navigation() {
  return (
    <header className="flex flex-col lg:flex-row justify-center items-center px-10 lg:px-14">
      <Image className="" src="/wsx-logo.svg" alt="Washington Stock Exchange logo" width={247} height={106} />
      <h1 className="font-bold text-xl sm:text-3xl text-gray text-center">The Washington Stock Exchange</h1>
    </header>
  )
}
