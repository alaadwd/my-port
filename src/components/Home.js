import React from "react";
import Img1 from "../assets/me3.jpg";
import "./Home.css";
import CV from "../assets/MonCv2.pdf";
import {AiOutlineCheck} from "react-icons/ai"
import {IoIosRadioButtonOn} from "react-icons/io"
const Home = () => {
  return (
    <div className="home_container h-auto flex-col gap-12 px-16 rounded-xl flex shadow-2xl w-9/12 m-auto my-8 bg-zinc-900">
      <img className="me_Image border-cyan-200 shadow-2xl rounded-full" alt="Thats Me!"src={Img1} />
      <small className="text-center text-[8px] m-[-10px]">Small update : I'm Bald Now lol</small>
       <p className="text-center text-lg para font-bold">Hello Visitors :) !</p> 
      <p className="break-words para px-8">
        I'm Abd , 22 years old located in Syria - Aleppo, a self-taught programmer :D I love Physics , Math and Programming
        :p , Isn't it mind-blowing? you learn a programming language and BOOM
        the device you have completely obeys you , blindly in every way you imagine ,
        and every thought passes by you after you learn a certain programming
        language , YOU can make that idea get real! Thats why i adore programming
        X)
      </p>
          <h3 className="text-center exp_head">Field Of Expertise</h3>
      <div className="exp_container w-full flex justify-evenly">
          <div className="exp_boxes" >
            <h3 className="exp_header font-bold hover:border-cyan-400 transition  hover:text-cyan-400">Programming</h3>
            <ul className="exp_list mt-12">
            <li className="exp hover:white transition"><AiOutlineCheck/>HTML , CSS , JS (Web Dev)</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>Tailwind (CSS Framework)</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>React (JS Framework), React Router</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>React Native (App Dev)</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>Node Js (Back-end) </li>
            <li className="exp hover:white transition"><AiOutlineCheck/>Express Js (Node Back-end framework) </li>
            <li className="exp hover:white transition"><AiOutlineCheck/>MongoDB (NoSQL Database) </li>

            </ul>
          </div>

          <div className="exp_boxes other" >
            <h3 className="exp_header font-bold hover:border-cyan-400 transition hover:text-cyan-400">Others</h3>
            <ul className="exp_list mt-12">
            <li className="exp hover:white transition"><AiOutlineCheck/>Translation (English to Arabic -vice versa-)</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>Medical Translation (English to Arabic -vice versa-)</li>
            <li className="exp hover:white transition"><AiOutlineCheck/>Transcription</li>
            </ul>

          </div>
        </div>
      <a download href={CV} className="hover:text-cyan-400 hover:border-cyan-400 btn rounded-lg transition border-2 border-white ">
        Download CV
      </a>
      <a className="sad pb-4" target="_blank"href="https://youtu.be/ur48jVNNlKk?si=YxC1UtBbE2VpVgdd"><p>Press This If You Are Sad</p><IoIosRadioButtonOn className="text-red-600 active:text-red-800" size={36}/></a>
    </div>
  );
};

export default Home;
