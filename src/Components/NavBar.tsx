import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const NavBar = () => {
  return (
    <div className=' flex justify-between bg-[#dae5dd] px-8 py-2'>
        <div className='flex gap-x-3'>
            <div>
                <img className='w-12 h-12 rounded-full' src="/src/assets/img/profile.webp" alt="" />
            </div>
            <div>
                <div className="flex gap-x-2 items-center">
                <p className='text-sm'>نازی جمالی</p><MdOutlineArrowDropDown />

                </div>
                <p className='mt-1 text-[10px] font-VazirLight'>09120001112</p>
            </div>
        </div>
        <div className='items-center gap-x-4 hidden xl:flex'>
            <div className='relative'>
                <input type="text" className='rounded-xl px-2 py-1 w-40  text-sm ' placeholder='جست و جو ...'/>
                <div className='absolute left-2 top-2'>
                <PiMagnifyingGlassDuotone fill='#9ca5a0'/>

                </div>
            </div>
            <IoMail fill='#9ca5a0'/>
            <div className='relative'>
            <FaBell fill='#9ca5a0'/>
            <div className='absolute w-3 h-3 bg-red-600 rounded-full -top-3 -left-2 flex justify-center items-center text-[10px] text-white p-2'>1</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar