"use client"

import { FormEvent, useState } from "react"

export default function EmailSubscribe({ className }: { className?: string }) {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
    const response = await fetch("https://emails.zeitgeist.pm/wsx-subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })
    console.log(response)
  }
  return (
    <div className={`flex flex-col items-center justify-center bg-red p-8 w-full lg:w-fit ${className}`}>
      <form onSubmit={signUp} className="flex flex-col lg:flex-row items-center gap-5 w-full" id="form">
        <span className="text-white xl:whitespace-nowrap">Subscribe for Updates and Early Access</span>
        <input id="email" type="email" className="h-[50px] px-8 rounded-md w-full placeholder:text-center lg:w-[250px]" aria-describedby="emailHelp" placeholder="Enter your email here" value={email} onChange={handleEmailChange} />
        <button type="submit" className="bg-black text-white px-6 h-[50px] rounded-md w-full lg:w-[130px]">
          Submit
        </button>
      </form>
    </div>
  )
}
