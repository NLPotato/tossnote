import QuesCard from '@components/QuesCard'
import OpenAIChat from '@components/OpenAIChat'
import Recorder from '@components/Recorder'
import OpenAISpeak from '@components/OpenAISpeak'

export default function Test() {
  const question = "What do you think is the best way to learn English?"
  return (
    <div className="flex flex-col w-full min-h-screen pt-10 bg-yellow-50 items-center">
      {/* <Recorder/> */}

      <div className="md:w-4/5 mx-5 ">
          <QuesCard question={question}/>
          <OpenAIChat question={question}/> 
      </div>

      {/* <OpenAISpeak/> */}
    </div>

  )
}