import React from 'react'
import {FaFacebook,FaTelegram} from "react-icons/fa"
import {MdMail} from "react-icons/md"

const ContactMe = () => {
  return (
    <div className="home_container h-[60vh] flex-col gap-12 px-16 rounded-xl flex justify-center align-middle shadow-2xl w-7/12 m-auto my-8 bg-neutral-100 pt-8">
        <h3 className='font-bold text-center text-xl'>Contact Me :</h3>
        <div className='m-auto icon_container pb-16  '>
          <a className="   text-lg flex gap-3 hover:text-gray-600 transition" href="https://mail.google.com/mail/" target="_blank">
          <MdMail className='text-2xl'/>
          <p>My Gmail</p>
          </a>
          <p className='text-sm'> On : alaadwd012@gmail.com</p>
          {/* <a aria-disabled className=" text-lg flex gap-3 hover:text-gray-600 transition" href="https://www.facebook.com/profile.php?id=100022162241845" target="_blank">
          <FaFacebook className='text-2xl'/>
          <p>My Facebook Profile Page</p>
          </a> */}
          <a className="  text-lg flex gap-3 mt-8 hover:text-gray-600 transition" href="https://t.me/AbdHyp" target="_blank">
          <FaTelegram className='text-2xl'/>
          <p>My Telegram Chat Link</p>
          </a>
          
        </div>
      </div>
  )
}

export default ContactMe