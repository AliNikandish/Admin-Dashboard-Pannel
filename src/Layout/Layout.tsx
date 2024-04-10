import { NavLink } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SIdeBar from "../Components/SIdeBar";
import { ReactNode } from "react";

type layoutProps={
  children:ReactNode
}
const Layout = ({ children }: layoutProps) => {
  return (
    <div className="flex font-VazirMedium">
      <SIdeBar />
      <div className="w-full xl:mr-60">
        <NavBar />
        <div className="bg-slate-200 p-3 px-8">
        <div className='flex gap-x-3 p-3 justify-center xl:hidden text-sm md:text-base '>
                <NavLink to="/">داشبورد</NavLink>
                <NavLink to="/orders">سفارشات</NavLink>
                <NavLink to="/favorites">علاقه مندی ها</NavLink>
                <NavLink to="/profile">پروفایل</NavLink>
            </div>
          {children}
          </div>
      </div>
    </div>
  );
};

export default Layout;
