import  { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart, FaStar, FaTrash } from "react-icons/fa6";

export const favoritesData = [
  {
    title: "دلمه برگ مو",
    ordersCount: 36,
    price: "178000",
    img:'Dolmeh.webp',
    // img: "/src/assets/img/Dolmeh.webp",
    // img:"https://imgurl.ir/viewer.php?file=w52286_Dolmeh.webp",
    type: "mainFood",
  },
  {
    title: "سوپ جو پرک",
    ordersCount: 25,
    price: "200000",
    img: "soupJo.jpg",
    // img: "/src/assets/img/soupJo.jpg",
    // img:"https://imgurl.ir/uploads/c816996_soupJo.jpg",
    type: "Appetizer",
  },
  {
    title: "دوغ محلی",
    ordersCount: 10,
    price: "50000",
    img: "doogh.jpg",
    // img: "/src/assets/img/doogh.jpg",
    // img:"https://imgurl.ir/uploads/j9720_doogh.jpg",
    type: "Beverages",
  },
  {
    title: "ژله بستنی",
    ordersCount: 18,
    price: "80000",
    img: "zhele.jpg",
    // img: "/src/assets/img/zhele.jpg",
    // img:"https://imgurl.ir/uploads/p75115_zhele.jpg",
    type: "dessert",
  },
];

const Favorites = () => {
  const [status, setStatus] = useState("all");

  return (
    <div className="bg-white py-2 px-4 rounded min-h-screen">
      <p>لیست علاقه مندی ها</p>
      <div className="mt-3 flex gap-3 flex-wrap ">
        <span
          onClick={() => setStatus("all")}
          className={`${
            status === "all"
              ? "bg-green-700 text-white"
              : "text-green-700 border border-green-700"
          }  py-px px-2 rounded text-sm cursor-pointer `}
        >
          همه
        </span>
        <span
          onClick={() => setStatus("Appetizer")}
          className={`${
            status === "Appetizer"
              ? "bg-green-700 text-white"
              : "text-green-700 border border-green-700"
          }  py-px px-2 rounded text-sm cursor-pointer `}
        >
          پیش غذا
        </span>
        <span
          onClick={() => setStatus("mainFood")}
          className={`${
            status === "mainFood"
              ? "bg-green-700 text-white"
              : "text-green-700 border border-green-700"
          }  py-px px-2 rounded text-sm cursor-pointer `}
        >
          غذای اصلی
        </span>
        <span
          onClick={() => setStatus("dessert")}
          className={`${
            status === "dessert"
              ? "bg-green-700 text-white"
              : "text-green-700 border border-green-700"
          }  py-px px-2 rounded text-sm cursor-pointer `}
        >
          دسر
        </span>
        <span
          onClick={() => setStatus("Beverages")}
          className={`${
            status === "Beverages"
              ? "bg-green-700 text-white"
              : "text-green-700 border border-green-700"
          }  py-px px-2 rounded text-sm cursor-pointer `}
        >
          نوشیدنی
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">

        {status === "all" &&
          favoritesData.map((favorite) => {
            return (
              <div className="border-2 rounded">
                <img
                  className="w-full h-52 rounded"
                  src={favorite.img}
                  alt=""
                />
                <div className="mt-2 flex gap-x-1 items-center justify-center">
                  <p className="text-center">{favorite.title}</p>
                  <FaHeart fill="red" />
                </div>
                <p className="mt-3 pr-3 text-gray-500 text-sm">
                  تعداد سفارش:{favorite.ordersCount}
                </p>
                <div className="mt-3 flex justify-between px-3 items-center">
                  <div className="flex gap-x-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-sm">{favorite.price} تومان</span>
                </div>
                <div className="my-3 px-3 flex justify-between items-center gap-x-2 ">
                  <button className="w-1/4  rounded py-1 text-gray-700 border border-gray-700 flex gap-x-1 items-center justify-center">
                    <FaTrash size={14} />
                    حذف
                  </button>
                  <button className="w-3/4  rounded py-1 text-green-700 border border-green-700 flex gap-x-1 items-center justify-center">
                    <FaShoppingCart size={16} />
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            );
          })}

        {status === "mainFood" &&
          favoritesData.map((favorite) => {
            if (favorite.type === "mainFood") {
              return (
                <div className="border-2 rounded">
                  <img
                    className="w-full h-52 rounded"
                    src={favorite.img}
                    alt=""
                  />
                  <div className="mt-2 flex gap-x-1 items-center justify-center">
                    <p className="text-center">{favorite.title}</p>
                    <FaHeart fill="red" />
                  </div>
                  <p className="mt-3 pr-3 text-gray-500 text-sm">
                    تعداد سفارش:{favorite.ordersCount}
                  </p>
                  <div className="mt-3 flex justify-between px-3 items-center">
                    <div className="flex gap-x-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="text-sm">{favorite.price} تومان</span>
                  </div>
                  <div className="my-3 px-3 flex justify-between items-center gap-x-2 ">
                    <button className="w-1/4  rounded py-1 text-gray-700 border border-gray-700 flex gap-x-1 items-center justify-center">
                      <FaTrash size={14} />
                      حذف
                    </button>
                    <button className="w-3/4  rounded py-1 text-green-700 border border-green-700 flex gap-x-1 items-center justify-center">
                      <FaShoppingCart size={16} />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              );
            }
          })}

        {status === "Appetizer" &&
          favoritesData.map((favorite) => {
            if (favorite.type === "Appetizer") {
              return (
                <div className="border-2 rounded">
                  <img
                    className="w-full h-52 rounded"
                    src={favorite.img}
                    alt=""
                  />
                  <div className="mt-2 flex gap-x-1 items-center justify-center">
                    <p className="text-center">{favorite.title}</p>
                    <FaHeart fill="red" />
                  </div>
                  <p className="mt-3 pr-3 text-gray-500 text-sm">
                    تعداد سفارش:{favorite.ordersCount}
                  </p>
                  <div className="mt-3 flex justify-between px-3 items-center">
                    <div className="flex gap-x-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="text-sm">{favorite.price} تومان</span>
                  </div>
                  <div className="my-3 px-3 flex justify-between items-center gap-x-2 ">
                    <button className="w-1/4  rounded py-1 text-gray-700 border border-gray-700 flex gap-x-1 items-center justify-center">
                      <FaTrash size={14} />
                      حذف
                    </button>
                    <button className="w-3/4  rounded py-1 text-green-700 border border-green-700 flex gap-x-1 items-center justify-center">
                      <FaShoppingCart size={16} />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              );
            }
          })}

        {status === "Beverages" &&
          favoritesData.map((favorite) => {
            if (favorite.type === "Beverages") {
              return (
                <div className="border-2 rounded">
                  <img
                    className="w-full h-52 rounded"
                    src={favorite.img}
                    alt=""
                  />
                  <div className="mt-2 flex gap-x-1 items-center justify-center">
                    <p className="text-center">{favorite.title}</p>
                    <FaHeart fill="red" />
                  </div>
                  <p className="mt-3 pr-3 text-gray-500 text-sm">
                    تعداد سفارش:{favorite.ordersCount}
                  </p>
                  <div className="mt-3 flex justify-between px-3 items-center">
                    <div className="flex gap-x-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="text-sm">{favorite.price} تومان</span>
                  </div>
                  <div className="my-3 px-3 flex justify-between items-center gap-x-2 ">
                    <button className="w-1/4  rounded py-1 text-gray-700 border border-gray-700 flex gap-x-1 items-center justify-center">
                      <FaTrash size={14} />
                      حذف
                    </button>
                    <button className="w-3/4  rounded py-1 text-green-700 border border-green-700 flex gap-x-1 items-center justify-center">
                      <FaShoppingCart size={16} />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              );
            }
          })}

        {status === "dessert" &&
          favoritesData.map((favorite) => {
            if (favorite.type === "dessert") {
              return (
                <div className="border-2 rounded">
                  <img
                    className="w-full h-52 rounded"
                    src={favorite.img}
                    alt=""
                  />
                  <div className="mt-2 flex gap-x-1 items-center justify-center">
                    <p className="text-center">{favorite.title}</p>
                    <FaHeart fill="red" />
                  </div>
                  <p className="mt-3 pr-3 text-gray-500 text-sm">
                    تعداد سفارش:{favorite.ordersCount}
                  </p>
                  <div className="mt-3 flex justify-between px-3 items-center">
                    <div className="flex gap-x-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="text-sm">{favorite.price} تومان</span>
                  </div>
                  <div className="my-3 px-3 flex justify-between items-center gap-x-2 ">
                    <button className="w-1/4  rounded py-1 text-gray-700 border border-gray-700 flex gap-x-1 items-center justify-center">
                      <FaTrash size={14} />
                      حذف
                    </button>
                    <button className="w-3/4  rounded py-1 text-green-700 border border-green-700 flex gap-x-1 items-center justify-center">
                      <FaShoppingCart size={16} />
                      افزودن به سبد خرید
                    </button>
                  </div>
                </div>
              );
            }
          })}

      </div>
    </div>
  );
};

export default Favorites;
