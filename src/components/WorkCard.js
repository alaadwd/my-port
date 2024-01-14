import React from 'react'
import "./WorkCard.css"
import { Link, useParams } from 'react-router-dom'
import dataSets from './dataSet'
import 'react-slideshow-image/dist/styles.css';
import {FaArrowLeft} from "react-icons/fa"
import {Swiper} from "swiper/react"
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "swiper/css"

const WorkCard = () => {
  const {ProjId} = useParams();
  const singlePro = dataSets.find((Proj) => Proj.id == ProjId)
  const {descript , image , link , title, imgsArray , smolDescript} = singlePro



  const swipe = singlePro.imgsArray.map((img)=>{
    return (
      <SwiperSlide>
        <img className='m-auto rounded-2xl' src={img}/>
      </SwiperSlide>
    )
  } )


  return (
    <div className=' home_container flex-col gap-12 px-16 rounded-xl flex shadow-2xl w-9/12 m-auto my-8 bg-zinc-900'>
    <Link className='p-3 m-3 hover:border-cyan-400 gobacklink w-fit rounded-xl hover:text-cyan-400 transition' to={"/Portfolio"}><FaArrowLeft/></Link>
    <Swiper
    style={{
      paddingBottom:"40px"

    }}
    pagination={{
      type:"bullets"

    }}
    navigation ={true}
    modules={[Pagination,Navigation]}
    >
      {swipe}
    </Swiper>

      {/* <img src={image} /> */}
      <h2 className='text-center font-bold text-lg'>{title}</h2>
      <p className=' text-cyan-400 text-center text-sm'>{descript}</p>
        <p className='text-center'>{smolDescript}</p>
      <div className='flex justify-evenly mb-6'>
      <a className='flex w-fit m-auto justify-center rounded-xl p-3 hover:border-cyan-400 transition hover:text-cyan-400 border-[1px] mt-3 border-gray-500' href={link}>Source Code</a>
    </div>
    </div>
  )
}

export default WorkCard