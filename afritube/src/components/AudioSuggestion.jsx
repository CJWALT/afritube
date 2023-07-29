import React from 'react'
import thesky from '../assets/Audio thumbnail/theSky.png'

const AudioSuggestion = () => {
  return (
    <div className="flex flex-col items-center my-8 w-[70%] mx-auto">
    <p className="text-[#8E8E8E] mx-2 self-start">Other stories like these...</p>
    <div className="flex items-center my-4 bg-white p-4 border-[1px] border-primary rounded-lg">
      <img src={thesky} alt="/" className="w-[85px]"/>
      <span className="mx-4">
        <h1>Why the sky is Far Away</h1>
        <p className="text-[#8E8E8E]">
          The sky was once so close to the Earth that people cut parts of it
          to eat, but their waste and greed caused the sky to move far away.
        </p>
      </span>
    </div>
  </div>
  )
}

export default AudioSuggestion
