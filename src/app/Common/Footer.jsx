"use client"
import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className='shadow  w-full '>
                <div className='grid lg:grid-cols-[30%_20%_20%_30%] p-[45px]    max-w-[1450px] justify-center   mx-auto  gap-[20px]'>


                    <ul className='leading-[30px] text-[rgb(90,90,90)] text-[15px]  '>
                        <li className='font-bold text-[18px] pb-[15px] text-black'>Contact Us</li>


                        <li>Address: Claritas est etiam processus dynamicus</li >

                        <li>  Phone: 9781234560</li>

                        <li>  Email: furniture@gmail.com</li>


                        <li className='grid grid-cols-6 max-w-[80%] mt-[5px] opacity-[0.6]'>
                            <FaFacebookF className='text-[35px] p-[5px] border rounded-[20px] ' />
                            <FaInstagram className='text-[35px] p-[5px] border rounded-[20px] ' />
                            <FaTwitter className='text-[35px] p-[5px] border rounded-[20px] ' />
                            <FaLinkedinIn className='text-[35px] p-[5px] border rounded-[20px] ' />
                            <FaYoutube className='text-[35px] p-[5px] border rounded-[20px] ' />
                            <FaTelegram className='text-[35px] p-[5px] border rounded-[20px] ' />
                        </li>
                    </ul>


                    <ul className='leading-[30px] text-[rgb(90,90,90)]  pl-[25px]'>
                        <li className='font-bold text-[18px] pb-[15px] text-black'>Information</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Frequently Questions</li>
                    </ul>

                    <ul className='leading-[30px] text-[rgb(90,90,90)]  pl-[25px]'>
                        <li className='font-bold text-[18px] pb-[15px] text-black'>My Account</li>
                        <li>My Dashboard</li>
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                    </ul>


                    <ul className='leading-[30px] text-[rgb(90,90,90)]  pl-[25px]'>
                        <li className='font-bold text-[18px] pb-[15px] text-black'>Top Rated Products</li>
                        <li className='flex items-center '>
                            <li>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg" className='w-[110px]' alt="" />
                            </li>
                            <li className='p-[15px_10px] text-[14px] font-semibold leading-[20px]'>
                                <li>Wooden Jhula</li>
                                <li>Calina Swing Jhula</li>
                                <li><span className='line-through'>Rs.65.000</span>Rs.58,000</li>
                            </li>
                        </li>
                        <hr className='text-[rgb(90,90,90)] shadow'/>
                        <li className='flex items-center'>
                            <li>
                                <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1663411513681Group%201.jpg" className='w-[110px]' alt="" />
                            </li>
                            <li className='p-[15px_10px] text-[14px] font-semibold leading-[20px]'>
                                <li>1 Seater Sofa</li>
                                <li>Yuvi sheesham wood sofa set</li>
                                <li> <span className='line-through'>Rs. 10,000</span> Rs. 7,600</li>
                            </li>
                        </li>

                    </ul>
                </div>

                <div className=' shadow'>
                    <ul className='flex max-w-[500px] p-[20px] text-[rgb(90,90,90)] mx-auto justify-evenly'>
                        <li>Home</li>
                        <li>Online Store</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>


                <div className='shadow  '>
                    <div className='max-w-[500px]  text-center mx-auto'>
                        <p className='p-[5px] text-[15px] text-[rgb(90,90,90)]'>All Rights Reserved By Furniture | © 2025</p>
                        <p className='p-[5px] ml-[30%]'><img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" /></p>
                    </div>
                </div>
            </div>
        </>
    )
}
