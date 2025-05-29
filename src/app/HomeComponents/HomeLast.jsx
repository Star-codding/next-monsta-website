import Image from 'next/image'
import React from 'react'
import { IoEarth } from "react-icons/io5";
import { TfiCheckBox } from "react-icons/tfi";
import { MdOutlineAccessTime } from "react-icons/md";
import photo from '../../../public/Images/Home Page/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg'
import photo2 from '../../../public/Images/Home Page/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png'
import photo3 from '../../../public/Images/Home Page/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg'
import { IoIosStar } from "react-icons/io";
import Slider from 'react-slick';


export default function HomeLast() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true

    };



    return (
        <div>
            <div className='mt-[30px] bg-[rgb(248,249,249)] '>
                <div className='lg:flex block justify-between items-center max-w-[1050px] mx-auto p-[70px_50px]  '>
                    <div className='text-center '>
                        <IoEarth className='mx-auto border p-[25px] text-[80px] rounded-[50%]' />
                        <p className='font-semibold text-[18px] pt-[15px] font-serif '>Free Shipping</p>
                        <p className='pt-[7px]'>Free shipping on all order</p>
                    </div>
                    <div className='text-center mt-[15px] lg:mt-0'>
                        <TfiCheckBox className='mx-auto border p-[25px] text-[80px] rounded-[50%]' />
                        <p className='font-semibold text-[18px] pt-[15px] font-serif'>Money Return</p>
                        <p className='pt-[7px]'>Back guarantee under 7 days</p>
                    </div>
                    <div className='text-center mt-[15px] lg:mt-0'>
                        <MdOutlineAccessTime className='mx-auto border p-[25px] text-[80px] rounded-[50%]' />
                        <p className='font-semibold text-[18px] pt-[15px] font-serif'>Online Support</p>
                        <p className='pt-[7px]'>Support online 24 hours a day</p>
                    </div>
                </div>
            </div>




            <div>
                <div className='max-w-[1450px] mx-auto text-center  p-4 mt-[15px]'>
                    <Slider {...settings}>
                        <div>
                            <h1 className='text-[22px] font-bold font-serif'>What Our Customer Says?</h1>

                            <p className='max-w-[950px] mx-auto mt-[15px] text-[rgb(90,90,90)] text-justify'>These guys have been absolutely outstanding. Perfect themes and the best of all that you have many options to choose.Best Support team ever! Very fast responding! Thank fast responding! Thank you very much! highly recommend this theme and these people!</p>

                            <Image src={photo} className='mx-auto mt-[20px]' />

                            <p className='mt-[10px] font-semibold font-serif text-[14px]'>KATHY YOUNG</p>

                            <p className='mt-[5px] text-[rgb(90,90,90)]'>CEO of SunPark</p>
                            <p className='flex justify-center mt-[10px]'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </p>
                        </div>

                        <div>
                            <h1 className='text-[22px] font-bold font-serif'>What Our Customer Says?</h1>

                            <p className='max-w-[950px] mx-auto mt-[15px] text-[rgb(90,90,90)] text-justify'>These guys have been absolutely outstanding. Perfect themes and the best of all that you have many options to choose.Best Support team ever! Very fast responding! Thank fast responding! Thank you very much! highly recommend this theme and these people!</p>

                            <Image src={photo2} className='mx-auto mt-[20px]' />
                            <p className='mt-[10px] font-semibold font-serif text-[14px]'>KATHY YOUNG</p>

                            <p className='mt-[5px] text-[rgb(90,90,90)]'>CEO of SunPark</p>
                            <p className='flex justify-center mt-[10px]'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </p>
                        </div>

                        <div>
                            <h1 className='text-[22px] font-bold font-serif'>What Our Customer Says?</h1>

                            <p className='max-w-[950px] mx-auto mt-[15px] text-[rgb(90,90,90)] text-justify'>These guys have been absolutely outstanding. Perfect themes and the best of all that you have many options to choose.Best Support team ever! Very fast responding! Thank fast responding! Thank you very much! highly recommend this theme and these people!</p>

                            <Image src={photo3} className='mx-auto mt-[20px]' />
                            <p className='mt-[10px] font-semibold font-serif text-[14px]'>KATHY YOUNG</p>

                            <p className='mt-[5px] text-[rgb(90,90,90)]'>CEO of SunPark</p>
                            <p className='flex justify-center mt-[10px]'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </p>
                        </div>

                    </Slider>
                </div>
            </div>


            <div className='mt-[30px] bg-[rgb(248,249,249)] '>
                <div className='max-w-[1050px] mx-auto p-[90px_50px] text-center' >

                    <h1 className='text-[22px] font-semibold font-serif'>Our Newsletter</h1>
                    <p className='text-[rgb(90,90,90)] mt-[5px]'>Get E-mail updates about our latest shop and special offers.</p>
                    <div className='flex justify-center mt-[20px] mx-auto max-w-[60%]'>
                        <input type="text" placeholder='Email Address.....' className='border p-[7px_15px] rounded-[5px_0px_0px_5px] max-w-[70%] outline-none' />
                        <button className=' border p-[5px_50px] rounded-[0px_5px_5px_0px]  border-[rgb(192,149,120)] bg-[rgb(192,149,120)] text-white font-semibold cursor-pointer text-[14px] hover:text-white hover:bg-black max-w-[30%]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
