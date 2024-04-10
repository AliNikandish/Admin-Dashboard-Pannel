import { ReactNode } from 'react'


type StatsCard={
  bgColor:string,
  bgColor2:string,
  color:string,
  icon:ReactNode,
  icon2:ReactNode,
  title:string,
  desc:string,
  more:string
}

const StatsCard = ({bgColor,bgColor2,color,icon,icon2,title,desc,more}:StatsCard) => {
  return (
    <div className=" bg-white w-80 xl:w-64 h-36 p-2 border-2 rounded">
      <div className='hidden bg-[#727270] bg-[#498058] bg-[#f39318] bg-[#da4200] bg-[#df6733] bg-[#8f8f8d] bg-[#699a7a] bg-[#f8aa48] text-[#699a7a] text-gray-500 '></div>
    <div className="flex gap-x-3 justify-center items-center">
      <div className={`bg-[${bgColor}] p-2 rounded-full`}>
        {icon}
      </div>
      <p className={`text-sm text-${color}`}>{title}</p>
    </div>
    <div className="mt-2 flex justify-center ">
      <span className="">{desc}</span>
    </div>
    <div className="flex justify-center items-center">
      <div className={`mt-2 p-2 bg-[${bgColor2}] text-white flex gap-x-3 items-center justify-evenly rounded-2xl text-sm w-36`}>
        {more}
        {icon2}
      </div>
    </div>
  </div>
  )
}

export default StatsCard