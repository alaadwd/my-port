import React from 'react'
import WorkCard from './WorkCard'
import Jack from "../mywork/BlackJack-1.png"
import "./Portfolio.css"
import AppCard from './AppCard'
import ToDoApp from "../mywork/ToDoApp.jpg"
import Counter from "../mywork/Counter.png"
// import Quiz1 from "../mywork/Quiz1.png"

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import dataSets from "./dataSet.js"
import {nanoid} from "nanoid"
import dataSetApp from './dataSetApp'

const Portfolio = () => {
  
  const dataSetMapped = dataSets.map((data) => {
    return (
      <div key={nanoid()} className="flex h-auto flex-col justify-between  shadow-2xl hover:border-cyan-400 hover:bg-transparent card border-transparent transition border-[1px] rounded-[2rem] p-5" >
      <div>
      <img className='rounded-lg overflow-hidden' src={data.image} />
      <h4 className=' my-2 text-center font-bold'>{data.title}</h4>
      <p className='text-center '>({data.descript})</p>
      <p className='text-center text-xs mt-1'>{data.moredetails}</p>
      </div>
      <div>
      <Link to={`/Portfolio/${data.id}`} className='flex w-fit m-auto justify-center rounded-xl p-3 hover:border-cyan-400 transition hover:text-cyan-400 border-[1px] mt-3 border-gray-500'>More Info</Link>
      </div>
    </div>
    )

  })
  const dataSetAppMapped = dataSetApp.map((data) => {
    return (
      <div  key={nanoid()} className=" col flex h-auto flex-col justify-between  shadow-2xl hover:border-cyan-400 hover:bg-transparent card border-transparent transition border-[1px] rounded-[2rem] p-5" >
      <div>
      <img className='rounded-lg overflow-hidden' src={data.image} />
      <h4 className=' my-2 text-center font-bold'>{data.title}</h4>
      <p className='text-center '>({data.descript})</p>
      <p className='text-center text-xs mt-1'>{data.moredetails}</p>
      </div>
      <div>
      <Link to={`/Portfolio/App/${data.id}`} className='flex w-fit m-auto justify-center rounded-xl p-3 hover:border-cyan-400 transition hover:text-cyan-400 border-[1px] mt-3 border-gray-500'>More Info</Link>
      </div>
    </div>
    )
  })
  return (
    <div className='py-5 home_container h-auto flex-col gap-12 px-16 rounded-xl flex shadow-2xl w-9/12 m-auto my-8 bg-zinc-900'>
      <h3 className='text-center font-bold'>Work Gallery :</h3>
      <p className='text-center text-sm'>- If this work gallery dosen't match your expectaions , I'm looking forward to add your project into my Portfolio! :) - </p>
      <div className='Portfolio_Container w-auto'>
        {dataSetAppMapped}
        {dataSetMapped}
        {/* <WorkCard
        image={Port}
        link="https://github.com/alaadwd/SourceCode_For_Gallery"
        descript="Web Dev"
        title="An Old Portfolio"
        />
      <WorkCard
      image={Quiz2}
      link="https://github.com/alaadwd/SourceCode_For_Gallery"
      descript="Web Dev"
      title="Quizzical App"
      moredetails="Using The Open Trivia Database API"
      />
      <WorkCard
      image={Exten2}
      link="https://github.com/alaadwd/SourceCode_For_Gallery"
      descript="Web Dev"
      title="Google Extension"
      moredetails="To Save Website's Link Easier"
      />
      
      <WorkCard
        image={Tenzies}
        link="https://github.com/alaadwd/SourceCode_For_Gallery"
        descript="Web Dev"
        title="Tenzies Game"
      />
      <WorkCard
        image={Journal}
        link="https://github.com/alaadwd/SourceCode_For_Gallery"
        descript="Web Dev"
        title="Travel Journal"
      />
      <WorkCard
        image={Jack}
        link="https://github.com/alaadwd/SourceCode_For_Gallery"
        descript="Web Dev"
        title="BlackJack Game"
      />
      <WorkCard
      image={ToDoWeb}
      link="https://github.com/alaadwd/SourceCode_For_Gallery"
      descript="Web Dev"
      title="To Do List"
      /> */}
      {/* <WorkCard
      image={Counter}
      link="https://github.com/alaadwd/SourceCode_For_Gallery"
      descript="Web Dev"
      title="A Simple Counter App"
      /> */}
      {/* <AppCard
      image={ToDoApp}
      link="https://github.com/alaadwd/SourceCode_For_Gallery"
      descript="App Dev"
      title="To Do List"
      /> */}

      </div>
    </div>
  )
}

export default Portfolio



