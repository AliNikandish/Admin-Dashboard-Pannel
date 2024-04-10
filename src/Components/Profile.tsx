import { FaLock, FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="bg-white px-4 py-2 rounded w-1/4 hidden lg:block">
        <div
          className="flex flex-col
             justify-center items-center"
        >
          <img
            className="rounded-full w-28 h-28"
            src="/src/assets/img/profile.webp"
            alt=""
          />
          <p className="mt-2">نازی جمالی</p>
        </div>
        <div className="mt-10">
          <span
            className="flex items-center gap-x-2 py-2 px-4 bg-orange-300 rounded-md text-orange-600 cursor-pointer"
          >
            <FaUser />
            <span>اطلاعات کاربری</span>
          </span>
          <span  className="mt-5 flex items-center gap-x-2 py-2 px-4 cursor-pointer ">
            <FaLock />
            تغییر رمز عبور
          </span>
          <span  className="mt-5 flex items-center gap-x-2 py-2 px-4 cursor-pointer ">
            <IoLogOutOutline />
            خروج
          </span>
        </div>
      </div>
      <div className="bg-white px-6 py-2 rounded w-full block lg:hidden">
        <div
          className="flex flex-col
             justify-center items-center"
        >
          <img
            className="rounded-full w-28 h-28"
            src="/src/assets/img/profile.webp"
            alt=""
          />
          <p className="mt-2">نازی جمالی</p>
        </div>
        <div className="mt-10">
          <span
            className="flex items-center gap-x-2 py-2 px-4 bg-orange-300 rounded-md text-orange-600 cursor-pointer"
          >
            <FaUser />
            <span>اطلاعات کاربری</span>
          </span>
          <span  className="mt-5 flex items-center gap-x-2 py-2 px-4 cursor-pointer ">
            <FaLock />
            تغییر رمز عبور
          </span>
          <span  className="mt-5 flex items-center gap-x-2 py-2 px-4 cursor-pointer ">
            <IoLogOutOutline />
            خروج
          </span>
        </div>
      </div>
      <div className="bg-white px-6 py-2 rounded w-full lg:w-3/4">
        <p>اطلاعات کاربری</p>
        <div className="mt-4 flex gap-x-4">
          <div className="flex gap-x-1">
            <input type="radio" name="gender" />
            <label htmlFor="">خانم</label>
          </div>
          <div className="flex gap-x-1">
            <input type="radio" name="gender" />
            <label htmlFor="">آقا</label>
          </div>
        </div>

        <div className="mt-4 flex justify-between flex-col md:flex-row gap-x-5">
          <div className="w-full md:w-1/2 flex flex-col gap-y-2">
            <label htmlFor="">نام</label>
            <input
              className="p-1 border-none bg-gray-200 rounded outline-none px-2 "
              type="text"
              placeholder="نام"
            />
          </div>
          <div className="max-md:mt-4 w-full md:w-1/2 flex flex-col gap-y-2">
            <label htmlFor="">نام خانوادگی</label>
            <input
              className="p-1 border-none bg-gray-200 rounded outline-none px-2 "
              type="text"
              placeholder="نام"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-between flex-col md:flex-row gap-x-5">
          <div className="w-full md:w-1/2 flex flex-col gap-y-2">
            <label htmlFor="">شماره موبایل</label>
            <input
              className="p-1 border-none bg-gray-200 rounded outline-none px-2"
              type="text"
              placeholder="نام"
            />
          </div>
          <div className="max-md:mt-4 w-full md:w-1/2 flex flex-col gap-y-2">
            <label htmlFor="">تاریخ تولد</label>
            <input
              className="p-1 border-none bg-gray-200 rounded outline-none px-2 "
              type="date"
              placeholder="نام"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="">ایمیل</label>
            <input
              className="p-1 border-none bg-gray-200 rounded outline-none px-2 "
              type="text"
              placeholder="نام"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="w-full flex flex-col gap-y-2">
            <label htmlFor="">آدرس</label>
            <textarea
              className="bg-gray-200 rounded outline-none p-2"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-x-5">
          {" "}
          <button className="rounded py-1 text-green-700 border border-green-700 w-28">
            انصراف
          </button>
          <button className="rounded py-1 text-white border bg-green-700 w-28">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
