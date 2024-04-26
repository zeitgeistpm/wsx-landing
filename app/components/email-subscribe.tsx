"use client"

import { FormEvent, useState } from "react"

export default function EmailSubscribe({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [emailResponse, setEmailResponse] = useState(" ")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch("https://emails.zeitgeist.pm/wsx-subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })
    console.log(await response)
    response.status === 201 || response.status === 204 ? setEmailResponse("Success! You're on the list.") : setEmailResponse("Error adding email. Please try again later.")
  }
  return (
    <div className={`flex flex-col justify-center bg-black p-12 mb-8 w-full md:max-w-[650px] mx-auto lg:w-fit ${className}`}>
      <span className="text-white xl:whitespace-nowrap mb-5 font-extrabold text-center lg:text-start">Launching soon! Sign up for early access.</span>
      <form onSubmit={signUp} className="flex flex-col md:flex-row items-center gap-5 w-full" id="form">
        <div className="w-full">
          <input id="email" type="email" className="h-[50px] px-8 w-full placeholder:text-center relative" aria-describedby="emailHelp" placeholder="Enter your email here" value={email} onChange={handleEmailChange} />
          <span className="absolute block text-center pt-2 text-white text-xs">{emailResponse}</span>
          {/* <span className="text-white xl:whitespace-nowrap mb-5 font-extrabold text-center lg:text-start">Check back soon for email signup!</span> */}
        </div>
        <button type="submit" className="bg-blue text-white px-6 h-[50px] w-full md:w-[180px]">
          Submit
        </button>
      </form>
    </div>
  )
}
