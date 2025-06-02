"use client"
import Image from 'next/image'
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../public/Images/About Page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg'
import image2 from '../../../public/Images/About Page/c65c4789-c1eb-4cfc-9961-3ab025317e08-1670161041.jpg'
import image3 from '../../../public/Images/About Page/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg'
import image4 from '../../../public/Images/About Page/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg'
import image5 from '../../../public/Images/About Page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg'
import image6 from '../../../public/Images/About Page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg'
import image7 from '../../../public/Images/About Page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg'
import photo from '../../../public/Images/Home Page/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg'
import photo2 from '../../../public/Images/Home Page/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png'
import photo3 from '../../../public/Images/Home Page/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg'
import Slider from 'react-slick';
import { IoIosStar } from 'react-icons/io'

export default function page() {
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
            <div className='max-w-[1320px] mx-auto mb-[35px]'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>About Us</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p className='text-[rgb(192,149,120)]'>About Us</p>
                    </div>
                </div>



                <div className='mt-[40px] '>
                    <Image src={image1} alt='image1' className='mx-auto' />
                </div>


                <div className='mt-[40px] text-center p-[5px_20px]'>
                    <h1 className='font-bold text-black text-[25px] font-serif'>Welcome to Monsta!</h1>
                    <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>

                    <p className='mt-[20px] text-[rgb(192,149,120)] italic font-semibold'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
                </div>



                <div className='mt-[40px]  p-[5px_20px]'>
                    <h1 className='text-black text-[25px] font-bold font-serif text-center'>Why Choose Us</h1>
                    <div className='grid lg:grid-cols-3 gap-[20px] mt-[20px]'>
                        <div className='text-center'>
                            <Image src={image2} alt='image2' className='mx-auto' />
                            <h1 className='text-[18px] font-bold font-serif mt-[10px]'>Creative Design</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                        </div>

                        <div className='text-center'>
                            <Image src={image3} alt='image2' className='mx-auto' />
                            <h1 className='text-[18px] font-bold font-serif mt-[10px]'>100% Money Back Guarantee</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                        </div>

                        <div className='text-center'>
                            <Image src={image4} alt='image2' className='mx-auto' />
                            <h1 className='text-[18px] font-bold font-serif mt-[10px]'>Online Support 24/7</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
                        </div>
                    </div>
                </div>



                <div className='mt-[45px] p-[5px_20px]'>
                    <div className='grid lg:grid-cols-3 gap-[20px] text-center'>
                        <div>
                            <Image src={image5} alt='image5' className='mx-auto' />
                            <h1 className='text-[16px] font-bold font-serif mt-[10px]'>What Do We Do?</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>

                        <div>
                            <Image src={image6} alt='image5' className='mx-auto' />
                            <h1 className='text-[16px] font-bold font-serif mt-[10px]'>Our Mission</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>

                        <div>
                            <Image src={image7} alt='image5' className='mx-auto' />
                            <h1 className='text-[16px] font-bold font-serif mt-[10px]'>History Of Us</h1>
                            <p className='text-[rgb(90,90,90)] text-[15px] font-semibold mt-[10px]  font-sans'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                        </div>
                    </div>

                </div>



                <div>
                <div className='max-w-[1450px] mx-auto text-center  p-4 mt-[45px]'>
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
            </div>
        </div>
    )
}
