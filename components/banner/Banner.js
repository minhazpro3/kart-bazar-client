import React from 'react';
import Image from 'next/image'
import vegetable from '../images/vagetable-r.png'
import right_arrow from '../svg/right-arrow.svg'


const Banner = () => {
    return (
        <div className='container' >
            <div className='row'>
            <div className='col-md-7 bg-[#f5f4f0]'>
           <div className='md:flex justify-center items-center'>
           <div>
            <h4 className=' font-medium opacity-75'>Exclusive offer <span className='bg-red-100 px-3 py-1 rounded-full text-red-600'>30% off</span></h4>
            <h3 className='text-4xl font-medium my-4'>STAY HOME & DELIVERED YOUR <br/> <span className=' text-green-500'>DAILY NEEDS</span></h3>
            <p className='font-medium opacity-75 py-4'>Vegetables contain many vitamins and minerals that are good for your health.</p>
            <button className='bg-red-600 text-white rounded-full px-4 py-2 font-medium text-base hover:opacity-75'>Shop Now  <Image style={{marginLeft:"2px", paddingRight:"3px", marginTop:"2px"}} src={right_arrow} alt='pic of arrow icon' /> </button>
           
           </div>
           <div>
           <Image
      
      src={vegetable}
     alt="Picture of banner"
      width={500}
      height={500}
         />
           </div>
           </div>
            </div>
            <div className='col-md-5'>
            <div>
        <h4>slkdfjlkkkkkkkkkkkkkkkkkkkk</h4>
            </div>
            <div>
                <h4>sljflskjfffffffffffffffffff</h4>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;