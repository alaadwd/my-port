import React from "react";
import Img1 from "../assets/me3.jpg";
import "./Home.css";
import CV from "../assets/MonCv.pdf";
import {AiOutlineCheck} from "react-icons/ai"

const Home = () => {
  return (
    <div className="home_container h-auto flex-col gap-12 px-16 rounded-xl flex shadow-2xl w-9/12 m-auto my-8 bg-neutral-100">
      <img className="me_Image shadow-2xl rounded-full" alt="Thats Me!"src={Img1} />
       <p className="text-center text-lg para font-bold">Hello Visitors :) !</p> 
      <p className="break-words para px-8">
        I'm Abd , 22 years old , fifth year medical school
        studnet and also a programmer :D I love Physics , Math and Programming
        :p , Isn't it mind-blowing? you learn a programming language and BOOM
        the device you have completely obeys you blindly every imagine you get ,
        every thought passes by you after you learn a certain programming
        language , YOU can make that idea reals Thats why i adore programming
        tho im a medical school student X)
      </p>
          <h3 className="text-center exp_head">Field Of Expertise</h3>
      <div className="exp_container w-full flex justify-evenly">
          <div className="exp_boxes" >
            <h3 className="exp_header font-bold hover:text-white transition hover:bg-gray-400 ">Programming</h3>
            <ul className="exp_list mt-12">
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>HTML , CSS , JS (Web Dev)</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>Tailwind (CSS Framework)</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>React (JS Framework), React Router</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>React Native (App Dev)</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>Python (General Purpose Dev) </li>
            </ul>
          </div>

          <div className="exp_boxes other" >
            <h3 className="exp_header font-bold hover:text-white transition hover:bg-gray-400 ">Others</h3>
            <ul className="exp_list mt-12">
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>Translation</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>Medical Translation</li>
            <li className="exp hover:text-gray-400 transition"><AiOutlineCheck/>Transcription</li>
            </ul>

          </div>
        </div>
      <a download href={CV} className="hover:text-neutral-200 hover:bg-gray-600 btn rounded-lg transition border-2 border-gray-400 ">
        Download CV
      </a>
    </div>
  );
};

export default Home;
