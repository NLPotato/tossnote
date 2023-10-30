"use client";

import '@styles/globals.css'
import { useChat } from "ai/react"

const OpenAIChat = ({messages}) => {

  return (
    <section className="flex flex-col p-5 w-full">
      {messages.map((m) => {
        if (m.id !== 1001 && m.id !== 1002) {
          return (
            <div className={m.role==="user"? "chat-bubble-user justify-end justify-self-end" : "chat-bubble justify-start justify-self-start"} key={m.id}>
              <p className="font-inter text-l text-black dark:text-white m-5">
                {m.content}
              </p>
            </div>
          )
        } else {
          return null
        }
      })}
    </section>
      
    )
}
export default OpenAIChat