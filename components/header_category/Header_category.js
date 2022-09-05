import Image from "next/image";
import React from "react";
import cart_1 from "../images/cat-1.jpg";
import cart_2 from "../images/cat-2.jpg";
import cart_3 from "../images/cat-3.jpg";
import right_arrow_only from "../images/right_arrow_only.svg";

const Header_category = () => {
  return (
    <div className="container ">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 ">
        <div className="col relative">
          <div className="flex justify-center pt-3 md:pt-0 ">
            <Image className="rounded-xl " src={cart_3} alt="" />
          </div>
          <button className=" absolute bottom-0 left-20 hover:ml-4 duration-300">
            <Image src={right_arrow_only} alt="" />
          </button>
        </div>
        <div className="col relative">
          <div className="flex justify-center pt-3 md:pt-0">
            <Image className="rounded-xl" src={cart_2} alt="" />
          </div>
          <button className=" absolute bottom-0 left-20 hover:ml-4 duration-300">
            <Image src={right_arrow_only} alt="" />
          </button>
        </div>
        <div className="col relative">
          <div className="flex justify-center pt-3 md:pt-0">
            <Image className="rounded-xl" src={cart_1} alt="" />
          </div>
          <button className=" absolute bottom-0 left-20 hover:ml-4 duration-300">
            <Image src={right_arrow_only} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header_category;
