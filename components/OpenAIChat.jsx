"use client";

import '@styles/globals.css'
import { useChat } from "ai/react";

const OpenAIChat = ({question}) => {
  const useChatOptions = {
    initialMessages: [
      {"role": "system", "id": 1001, "content": `The user is a non-native English speaker. They will take the TOEIC speaking test soon and want you to help them practice as follows. 1. Give feedback to their answer to the given question so that it is relevant to the question and sounds natural and grammatical. 2. When they ask you questions, answer them.`},
      {"role": "user", "id": 1002, "content": `question: ${question}\n1. Give feedback if 'user' answers the question OR 2. Answer their questions IF there are: `}
    ]
  }
  const { messages, input, handleInputChange, handleSubmit } = useChat(useChatOptions);

  return (
    <container className="w-5/6 mx-10 m-3">
      <section className="flex flex-col p-5 m-3 w-full">
        {messages.map((m) => (
        <div className={m.role==="user"? "chat-bubble justify-end self-end" : "chat-bubble justify-start justify-self-start"} key={m.id}>
          <p className="font-inter text-l text-black dark:text-white m-5">
            {m.content}
          </p>
        </div>
        ))}
      </section>
      {/* "flex w-5/6 mt-10" */}
      <form className="fixed flex w-3/4 max-w-md bottom-0 bg-white border border-gray-300 rounded mt-5 mb-5 shadow-xl p-2" onSubmit={handleSubmit}>
        <input
          className="p-2 w-full"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button type="submit" className="black_btn">
          Send
        </button>

      </form>

    </container>  )
}

export default OpenAIChat