import { FcHome } from "react-icons/fc";
import { AiFillAppstore, AiFillHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const SIdeBar = () => {
  return (
    <div className='w-60 p-3 border-l-2 shadow fixed top-0 right-0 bg-white h-screen z-10 hidden xl:block '>
        <div className="logo flex justify-center">
        <FcHome size={40}/>
        </div>
        <div className='mt-10'>
            <NavLink className='flex items-center gap-x-2 py-2 px-4' to={'/'}>
                <AiFillAppstore/>
                <span>داشبورد</span>
            </NavLink>
            <NavLink to="orders" className='mt-5 flex items-center gap-x-2 py-2 px-4 '>
            <AiOutlineShoppingCart />
                سفارشات
            </NavLink>
            <NavLink to="favorites"  className='mt-5 flex items-center gap-x-2 py-2 px-4 '>
            <AiFillHeart />
                علاقه مندی ها
            </NavLink>
            <NavLink to="profile" className='mt-5 flex items-center gap-x-2 py-2 px-4 '>
            <AiOutlineUser />
                پروفایل
            </NavLink>
        </div>
    </div>
  )
}

export default SIdeBar