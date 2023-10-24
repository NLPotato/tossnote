import QuesCard from '@components/QuesCard'
import OpenAIChat from '@components/OpenAIChat'

export default function Test() {
  const question = "What do you think is the best way to learn English?"
  return (
    <div className="flex flex-col flex-center w-full min-h-screen bg-yellow-50">
      <QuesCard question={question}/>
      <OpenAIChat question={question}/>
    </div>

  )
}