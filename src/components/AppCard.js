import React from 'react'
import "./AppCard.css"

const AppCard = (props) => {
  return (
    <div className="col flex w-full flex-col justify-between bg-gray-200 shadow-2xl hover:border-gray-300 hover:bg-transparent card border-transparent transition border-[1px] rounded-[2rem] p-5" >
    <div>
    <img className=' m-auto rounded-lg overflow-hidden' src={props.image} />
    <h4 className=' my-2 text-center font-bold'>{props.title}</h4>
    <p className='text-center font-'>({props.descript})</p>
    </div>
    <div>
    <a href={`${props.link}`} className='flex w-fit m-auto justify-center rounded-xl p-3 hover:bg-white transition hover:text-gray-500 border-[1px] mt-3 border-gray-500'>Source Code</a>
    </div>
  </div>
  )
}

export default AppCard