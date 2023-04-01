import React from 'react'
import WorkCard from './WorkCard'
import Jack from "../mywork/BlackJack-1.png"
import Port from "../mywork/PortCard.png"
import "./Portfolio.css"
import AppCard from './AppCard'
import ToDoApp from "../mywork/ToDoApp.jpg"
import Counter from "../mywork/Counter.png"
// import Quiz1 from "../mywork/Quiz1.png"
import Quiz2 from "../mywork/Quiz2.png"
import ToDoWeb from "../mywork/ToDoWeb.png"
import Exten2 from "../mywork/Exten2.png"
import Journal from "../mywork/Journal.png"
import Tenzies from "../mywork/Tenzies.png"

const Portfolio = () => {
  return (
    <div className='py-5 home_container h-auto flex-col gap-12 px-16 rounded-xl flex shadow-2xl w-9/12 m-auto my-8 bg-neutral-100'>
      <h3 className='text-center font-bold'>Work Gallery :</h3>
      <p className='text-center text-sm'>- If this work gallery dosen't match your expectaions , I'm looking forward to add your project into my Portfolio! :) - </p>
      <div className='Portfolio_Container w-auto'>
        <WorkCard
        image={Port}
        link="#"
        descript="Web Dev"
        title="An Old Portfolio"
        />
      <WorkCard
      image={Quiz2}
      link="#"
      descript="Web Dev"
      title="Quizzical App"
      moredetails="Using The Open Trivia Database API"
      />
      <WorkCard
      image={Exten2}
      link="#"
      descript="Web Dev"
      title="Google Extension"
      moredetails="To Save Website's Link Easier"
      />
      <AppCard
      image={ToDoApp}
      link="#"
      descript="App Dev"
      title="To Do List"
      />
      <WorkCard
        image={Tenzies}
        link="#"
        descript="Web Dev"
        title="Tenzies Game"
      />
      <WorkCard
        image={Journal}
        link="#"
        descript="Web Dev"
        title="Travel Journal"
      />
      <WorkCard
        image={Jack}
        link="#"
        descript="Web Dev"
        title="BlackJack Game"
      />
      <WorkCard
      image={ToDoWeb}
      link="#"
      descript="Web Dev"
      title="To Do List"
      />
      <WorkCard
      image={Counter}
      link="#"
      descript="Web Dev"
      title="A Simple Counter App"
      />

      </div>
    </div>
  )
}

export default Portfolio