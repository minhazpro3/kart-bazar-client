import React from "react";
import Image from "next/image";
import vegetable from "../images/vagetable-r.png";
import right_arrow from "../svg/right-arrow.svg";
import nut from "../images/lohri-r.png";
import healthy from "../images/helathy-r.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="row gap-4 my-3 justify-center items-center ">
        <div className="col-md-7  bg-[#f5f4f0] h-full rounded-xl ">
          <div className="md:flex justify-between items-center ml-4 sm:py-4 md:py-0 lg:py-0">
            <div>
              <h4 className=" font-medium opacity-75">
                Exclusive offer{" "}
                <span className="bg-red-100 px-3 py-1 rounded-full text-red-600">
                  30% off
                </span>
              </h4>
              <h3 className="text-4xl font-medium my-2 mt-2">
                STAY HOME & DELIVERED YOUR <br />{" "}
                <span className=" text-green-500">DAILY NEEDS</span>
              </h3>
              <p className="font-medium opacity-75 py-2 mt-8">
                Vegetables contain many vitamins and minerals that are good for
                your health.
              </p>
              <button className="bg-red-600 hover:ml-2 hover:bg-red-800 duration-500 text-white rounded-full px-4 py-2 mb-8 font-medium text-base ">
                Shop Now{" "}
                <Image
                  style={{
                    marginLeft: "2px",
                    paddingRight: "3px",
                    marginTop: "2px",
                  }}
                  src={right_arrow}
                  alt="pic of arrow icon"
                />{" "}
              </button>
            </div>
            <div>
              <Image
                src={vegetable}
                alt="Picture of banner"
                width={800}
                height={950}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4   h-full   ">
          <div className=" bg-[#f5f4f0]  mb-3 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="pl-4">
                <h2 className="  text-red-600 font-medium text-4xl">
                  45%{" "}
                  <span className=" text-xl text-black opacity-80">OFF</span>
                </h2>
                <h4 className="text-2xl text-green-600 font-medium my-2">
                  Nut Collection
                </h4>
                <h4 className=" opacity-70 font-medium">
                  We deliver organic vegetables & fruits
                </h4>
                <button className=" font-bold my-3 hover:ml-2 text-white bg-red-600 hover:bg-red-800 duration-500 px-4   py-1 rounded-full">
                  Shop Now
                </button>
              </div>
              <Image
                height={240}
                width={250}
                src={nut}
                alt="Picture of banner"
              />
            </div>
          </div>
          <div className="bg-[#f5f4f0] rounded-xl ">
            <div className="flex justify-between ">
              <div className="pl-4">
               
                <h4 className="text-2xl text-green-600 font-medium my-2">
                  Healthy Food
                              </h4>
                              <h2 className="  text-red-600 font-medium text-4xl">
                  45%{" "}
                
                </h2>
                <h4 className=" opacity-70 font-medium">
                  Start your daily shopping with some...
                </h4>
                <button className=" font-bold my-3  hover:ml-2 text-white bg-red-600 hover:bg-red-800 duration-500 px-4  py-1 rounded-full">
                  Shop Now
                </button>
              </div>
              <Image
                height={240}
                width={250}
                src={healthy}
                alt="Picture of banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
