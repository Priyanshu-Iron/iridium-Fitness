import React from 'react'
import '../Class_Programs/ClassPrograms.css'

const ClassPrograms = () => {
  return (
    <div id='ClassPrograms'>
    <h1 id='headingCP'>Class Programs</h1>
    <div className='ClassPrograms'>
        <div className='ClassProgramsCards'>
            <h2 id='ClassProgramsCardsHeading'>Basic</h2>
            <p id='ClassProgramsCardsParagraph'>Our Basic program is designed for beginners looking to build a solid foundation in fitness. This program covers fundamental exercises, focuses on proper form, and includes basic cardio and strength training to enhance your stamina and overall fitness.</p>
            <button id='ByuNowButton'>Buy Now</button>
        </div>
        <div className='ClassProgramsCards1'>
            <h2 id='ClassProgramsCardsHeading'>Intermediate</h2>
            <p id='ClassProgramsCardsParagraph'>The Intermediate program is tailored for those with some fitness experience. It includes more challenging workouts, advanced techniques, and introduces variety in cardio, strength, and flexibility training. Ideal for enhancing endurance, building lean muscle, and improving flexibility.</p>
            <button id='ByuNowButton'>Buy Now</button>
        </div>
        <div className='ClassProgramsCards'>
            <h2 id='ClassProgramsCardsHeading'>Advanced</h2>
            <p id='ClassProgramsCardsParagraph'>Our Advanced program is for experienced fitness enthusiasts looking to reach peak performance. This program includes high-intensity interval training, advanced strength workouts, and performance-focused exercises aimed at maximizing strength, agility, and endurance.</p>
            <button id='ByuNowButton'>Buy Now</button>
          </div>
      </div>
  </div>
  )
}

export default ClassPrograms