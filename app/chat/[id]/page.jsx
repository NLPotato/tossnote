"use client";

import QuesCard from '@components/QuesCard'
import OpenAIChat from '@components/OpenAIChat'
import InputBox from '@components/InputBox'

import { useParams  } from 'next/navigation'
import { useChat } from "ai/react"


export default function Chat() {
  const params = useParams()
  const question_id = parseInt(params.id);
  const data = require('@public/DB/type5.json');
  const question_set = data.find(item => item.id === question_id)
  const question = question_set["item"]

  const useChatOptions = {
    initialMessages: [
      {"role": "system", "id": 1001, "content": `The user is a non-native English speaker. He will take the TOEIC speaking test soon and wants to practice speaking. He is looking for a teacher to help him practice speaking English fluently. Speak English when giving revison and Korean when giving general tips and feedback.`},
      {"role": "user", "id": 1002, "content": `question: ${question}\n\nI'm going to give you my answer. The answer should be relevant to the question, consistent, complete and grammatical and should contain clear and logical arguments and supporting ideas and examples. Give feedback in Korean and English revision, if necessary. The revison should be shorter than 12 sentences.`},
    ]
  }

  const { messages, input, handleInputChange, handleSubmit } = useChat(useChatOptions);

  return (
    <div className="flex flex-col w-full min-h-screen pt-10 bg-yellow-50 items-center">

      <div className="md:w-4/5 mx-5 ">
        <QuesCard question={question}/>
        <OpenAIChat messages={messages}/> 
      </div>
      <div className="md:w-4/5 flex justify-center mt-10">
        <InputBox input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      </div>

    </div>

  )
}