import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

const ordersData = [
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
  {
    code: 1041,
    date: "1401/06/21",
    typeService: "سالن",
    price: "163.500",
    status: "deliverd",
  },
  {
    code: 1042,
    date: "1401/06/21",
    typeService: "بیرون بر",
    price: "180.000",
    status: "cancelled",
  },
  {
    code: 1043,
    date: "1401/06/21",
    typeService: "سالن",
    price: "175.000",
    status: "pending",
  },
];

const Orders = () => {
  const [status, setStatus] = useState("all");
  return (
    <div className="flex justify-between flex-col lg:flex-row gap-5 min-h-screen">
      <div className="bg-white py-2 px-4 w-full lg:w-8/12  rounded border overflow-scroll ">
        <p>لیست سفارشات</p>
        <div className="my-5 flex gap-x-1">
          <span onClick={()=>setStatus('all')} className={`${status==='all'?'bg-green-700 text-white':'text-green-700 border border-green-700'}  py-px px-2 rounded text-sm cursor-pointer `}>
            همه
          </span>
          <span onClick={()=>setStatus('pending')} className={`${status==='pending'?'bg-green-700 text-white':'text-green-700 border border-green-700'}  py-px px-2 rounded text-sm cursor-pointer `}>
            جاری
          </span>
          <span onClick={()=>setStatus('deliverd')} className={`${status==='deliverd'?'bg-green-700 text-white':'text-green-700 border border-green-700'}  py-px px-2 rounded text-sm cursor-pointer `}>
            تحویل شده
          </span>
          <span onClick={()=>setStatus('cancelled')} className={`${status==='cancelled'?'bg-green-700 text-white':'text-green-700 border border-green-700'}  py-px px-2 rounded text-sm cursor-pointer `}>
            لغو
          </span>
        </div>
        <div className="order-table">
          <table className="w-full overflow-scroll text-xs md:text-base">
            <thead>
              <tr className="bg-[#656563] text-white text-center">
                <td>ردیف</td>
                <td>کد سفارش</td>
                <td>تاریخ</td>
                <td>نوع سرویس</td>
                <td>مبلغ نهایی</td>
                <td>وضعیت</td>
              </tr>
            </thead>
            <tbody className="text-center">
              {status === "all" &&
                ordersData.map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order.code}</td>
                      <td>{order.date}</td>
                      <td>{order.price}</td>
                      <td>{order.typeService}</td>
                      <td>
                        {order.status === "deliverd" ? (
                          <button
                            type="button"
                            className="py-px  text-white bg-teal-600 rounded w-24 "
                          >
                            تحویل شده
                          </button>
                        ) : order.status === "cancelled" ? (
                          <button
                            type="button"
                            className="py-px  text-white bg-red-600 rounded w-24"
                          >
                            لغو شده
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="py-px  text-white bg-yellow-500 rounded w-24"
                          >
                            جاری
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}

              {status === "deliverd" &&
                ordersData.map((order, index) => {
                  if (order.status === "deliverd") {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{order.code}</td>
                        <td>{order.date}</td>
                        <td>{order.price}</td>
                        <td>{order.typeService}</td>
                        <td>
                          <button
                            type="button"
                            className="py-px  text-white bg-teal-600 rounded w-24 "
                          >
                            تحویل شده
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}

              {status === "cancelled" &&
                ordersData.map((order, index) => {
                  if (order.status === "cancelled") {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{order.code}</td>
                        <td>{order.date}</td>
                        <td>{order.price}</td>
                        <td>{order.typeService}</td>
                        <td>
                        <button
                            type="button"
                            className="py-px  text-white bg-red-600 rounded w-24"
                          >
                            لغو شده
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}

              {status === "pending" &&
                ordersData.map((order, index) => {
                  if (order.status === "pending") {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{order.code}</td>
                        <td>{order.date}</td>
                        <td>{order.price}</td>
                        <td>{order.typeService}</td>
                        <td>
                        <button
                            type="button"
                            className="py-px  text-white bg-yellow-500 rounded w-24"
                          >
                            جاری
                          </button>
                        </td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white py-2 px-4 w-full lg:w-4/12 rounded border ">
        <div className="flex justify-between text-gray-500 text-sm">
          <p>کد سفارش:1076</p>
          <p>تاریخ:1402/04/05</p>
        </div>
        <div className="flex justify-between border-b-2 pb-2 text-gray-500 text-sm">
          <p>نوع سرویس: بیرون بر</p>
          <p>ساعت:14:30</p>
        </div>
        <div className="border-2 mt-3">
          <div className="flex gap-x-2 my-2 px-2">
            <img
              className="w-16 h-16 rounded"
              src="https://ghazapaz.com/wp-content/uploads/2020/09/%D8%B7%D8%B1%D8%B2-%D8%AA%D9%87%DB%8C%D9%87-%D9%BE%D8%A7%D8%B3%D8%AA%D8%A7-%D8%B3%D8%A8%D8%B2%DB%8C%D8%AC%D8%A7%D8%AA-500x500.jpg"
              alt=""
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm">پاستا سبزیجات</p>
                <div className="rounded bg-[#cdded4] text-green-700 p-px w-12 flex gap-x-2 my-2">
                  <span className="">+</span>
                  <span className="">2</span>
                  <span className="">-</span>
                </div>
              </div>
              <div>
                <div className="flex justify-end text-gray-500">
                  <FaTrash />
                </div>
                <div className="mt-2 flex gap-x-2 text-sm items-center">
                  <del className="text-gray-500">175/000</del>
                  <span className="bg-red-100 text-red-700 py-px px-1 rounded">
                    20%
                  </span>
                </div>
                <span className="text-sm">140/000 تومان</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 my-2 px-2">
            <img
              className="w-16 h-16 rounded"
              src="https://ghazapaz.com/wp-content/uploads/2020/09/%D8%B7%D8%B1%D8%B2-%D8%AA%D9%87%DB%8C%D9%87-%D9%BE%D8%A7%D8%B3%D8%AA%D8%A7-%D8%B3%D8%A8%D8%B2%DB%8C%D8%AC%D8%A7%D8%AA-500x500.jpg"
              alt=""
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm">پاستا سبزیجات</p>
                <div className="rounded bg-[#cdded4] text-green-700 p-px w-12 flex gap-x-2 my-2">
                  <span className="">+</span>
                  <span className="">2</span>
                  <span className="">-</span>
                </div>
              </div>
              <div>
                <div className="flex justify-end text-gray-500">
                  <FaTrash />
                </div>
                <div className="mt-2 flex gap-x-2 text-sm">
                  <del>175/000</del>
                  <span className="bg-red-100 text-red-700 py-px px-1 rounded">
                    20%
                  </span>
                </div>
                <span className="text-sm">140/000 تومان</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 my-2 px-2">
            <img
              className="w-16 h-16 rounded"
              src="https://ghazapaz.com/wp-content/uploads/2020/09/%D8%B7%D8%B1%D8%B2-%D8%AA%D9%87%DB%8C%D9%87-%D9%BE%D8%A7%D8%B3%D8%AA%D8%A7-%D8%B3%D8%A8%D8%B2%DB%8C%D8%AC%D8%A7%D8%AA-500x500.jpg"
              alt=""
            />
            <div className="flex justify-between w-full">
              <div>
                <p className="text-sm">پاستا سبزیجات</p>
                <div className="rounded bg-[#cdded4] text-green-700 p-px w-12 flex gap-x-2 my-2">
                  <span className="">+</span>
                  <span className="">2</span>
                  <span className="">-</span>
                </div>
              </div>
              <div>
                <div className="flex justify-end text-gray-500">
                  <FaTrash />
                </div>
                <div className="mt-2 flex gap-x-2 text-sm">
                  <del>175/000</del>
                  <span className="bg-red-100 text-red-700 py-px px-1 rounded">
                    20%
                  </span>
                </div>
                <span className="text-sm">140/000 تومان</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-3 px-2">
          <div className="flex justify-between mb-2">
            <p>تخفیف:</p>
            <p className="text-black font-bold">161/000 تومان</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>هزینه ارسال</p>
            <p className="text-black font-bold">20/000 تومان</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>مبلغ قابل پرداخت:</p>
            <p className="text-black font-bold">929/000 تومان</p>
          </div>
        </div>
        <div className="mt-6 text-center px-6">
          <button className="text-sm bg-green-700 text-white w-full rounded py-2 flex items-center justify-center gap-x-2">
            <IoNewspaperOutline />
            تکمیل سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
