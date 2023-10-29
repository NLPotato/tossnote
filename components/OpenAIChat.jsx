"use client";

import '@styles/globals.css'
import { useChat } from "ai/react";

const OpenAIChat = ({question}) => {
  const useChatOptions = {
    initialMessages: [
      {"role": "system", "id": 1001, "content": `The user is a non-native English speaker. He will take the TOEIC speaking test soon and wants to practice speaking. He is looking for a teacher to help him practice speaking English fluently. Speak English when giving revison and Korean when giving general tips and feedback.`},
      {"role": "user", "id": 1002, "content": `question: ${question}\n\nI'm going to give you my answer. The answer should be relevant to the question, consistent, complete and grammatical and should contain clear and logical arguments and supporting ideas and examples. Give feedback and revise in Korean, if necessary.`},
    ]
  }

  const { messages, input, handleInputChange, handleSubmit } = useChat(useChatOptions);

  return (
    <>
      <section className="flex flex-col p-5 w-full">
        {messages.map((m) => (
        <div className={m.role==="user"? "chat-bubble-user justify-end justify-self-end" : "chat-bubble justify-start justify-self-start"} key={m.id}>
          <p className="font-inter text-l text-black dark:text-white m-5">
            {m.content}
          </p>
        </div>
        ))}
      </section>
      
      {/* "flex w-5/6 mt-10" */}
      <form className="fixed flex bottom-0 bg-white border border-gray-300 rounded mt-5 mb-5 shadow-xl p-2" onSubmit={handleSubmit}>
        <input
          className="p-2 w-3/"
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <button type="submit" className="black_btn">
          Send
        </button>
      </form>


    </>  )
}
export default OpenAIChat