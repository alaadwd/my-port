import React from 'react'
import "./WorkCard.css"

const WorkCard = (props) => {
  return (
    <div className="flex h-auto flex-col justify-between bg-gray-200 shadow-2xl hover:border-gray-300 hover:bg-transparent card border-transparent transition border-[1px] rounded-[2rem] p-5" >
      <div>
      <img className='rounded-lg overflow-hidden' src={props.image} />
      <h4 className=' my-2 text-center font-bold'>{props.title}</h4>
      <p className='text-center '>({props.descript})</p>
      <p className='text-center text-xs mt-1'>{props.moredetails}</p>
      </div>
      <div>
      <a href={`${props.link}`} className='flex w-fit m-auto justify-center rounded-xl p-3 hover:bg-white transition hover:text-gray-600 border-[1px] mt-3 border-gray-500'>Source Code</a>
      </div>
    </div>
  )
}

export default WorkCard