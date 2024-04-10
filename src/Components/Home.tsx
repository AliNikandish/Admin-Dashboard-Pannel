import { IoIosArrowDropleftCircle } from "react-icons/io";
import Chart from "./Chart";
import AreaChartComp from "./AreaChartComp";
import { FaHeart, FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoWalletSharp } from "react-icons/io5";
import StatsCard from "./StatsCard";
import  { favoritesData } from "./Favorites";

const Home = () => {
  return (
    <>
      <div className="max-xl:flex max-xl:justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:flex justify-between gap-y-5">
          <StatsCard
            bgColor={"#727270"}
            bgColor2={"#8f8f8d"}
            color={"gray-500"}
            icon={<IoWalletSharp fill="white" />}
            icon2={<BsFillArrowLeftCircleFill />}
            title={"موجودی کیف پول"}
            desc={"200.000 تومان"}
            more={"افزایش موجودی"}
          />

          <StatsCard
            bgColor={"#498058"}
            color={"#699a7a"}
            bgColor2={"#699a7a"}
            icon={<AiOutlineShoppingCart fill="white" />}
            icon2={<BsFillArrowLeftCircleFill />}
            title={"سفارشات"}
            desc={"138"}
            more={"مشاهده همه"}
          />

          <StatsCard
            bgColor={"#f39318"}
            color={"#699a7a"}
            bgColor2={"#f8aa48"}
            icon={<MdPayments fill="white" />}
            icon2={<FaMagnifyingGlassChart />}
            title={"پرداخت ها"}
            desc={"138"}
            more={"مشاهده لیست"}
          />

          <StatsCard
            bgColor={"#da4200"}
            bgColor2={"#df6733"}
            color={"#699a7a"}
            icon={<FaHeart fill="white" />}
            icon2={<FaMagnifyingGlassChart />}
            title={"علاقه مندی ها"}
            desc={"138"}
            more={"مشاهده لیست"}
          />
        </div>
      </div>

      <div className="mt-5  justify-between gap-x-5 hidden xl:flex">
        <div className="w-3/4 bg-white rounded">
          <AreaChartComp />
        </div>
        <div className="w-1/4 bg-white rounded h-80 flex flex-col pb-5">
          <Chart />
          <div className="px-4">
            <div className="flex">
              <div className="flex gap-x-1 items-center w-1/2">
                <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                <p className="">غذای اصلی</p>
              </div>
              <div className="flex gap-x-1 items-center w-1/2">
                <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                <p>نوشیدنی</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-x-1 items-center w-1/2">
                <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                <p>پیش غذا</p>
              </div>
              <div className="flex gap-x-1 items-center w-1/2">
                <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                <p>دسر</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-xl:flex max-xl:justify-center ">
        <div className=" xl:flex justify-between grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-5 ">
          <div className="w-80 xl:w-[550px] h-[360px] xl:h-[240px] bg-white py-5  px-6 xl:px-14 rounded border-2">
            <div className="flex justify-between">
              <p className="text-xs xl:text-base">علاقه مندی ها</p>
              <div className="text-xs xl:text-base flex items-center gap-x-1 text-orange-500">
                <p> مشاهده همه </p>
                <IoIosArrowDropleftCircle />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-y-5">
              {favoritesData.map(favorite=>{
                return <div className="flex gap-x-3 items-center">
                <img
                  className="w-16 h-16 rounded-md"
                  src={favorite.img}
                  alt=""
                />
                <div>
                  <p>{favorite.title}</p>
                  <p className="mt-1 text-xs text-gray-400">تعداد سفارش:{favorite.ordersCount}</p>
                </div>
              </div>
              })}
            </div>
          </div>

          <div className="w-80 xl:w-[550px] h-[360px] xl:h-[240px] bg-white py-5  px-6 xl:px-14 rounded border-2">
            <div className="flex justify-between">
              <p className="text-xs xl:text-base">وضعیت موجودی ها</p>
              <div className="text-xs xl:text-base flex items-center gap-x-1 text-orange-500">
                <p> مشاهده همه </p>
                <IoIosArrowDropleftCircle />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-2 xl:gap-y-5">
              {favoritesData.map(favorite=>{
                return <div className="flex gap-x-3 items-center">
                <img
                  className="w-16 h-16 rounded-md"
                  src={favorite.img}
                  alt=""
                />
                <div>
                  <p>{favorite.title}</p>
                  <p className="mt-1 text-xs text-gray-400">تعداد موجودی:{favorite.ordersCount+10}</p>
                </div>
              </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
