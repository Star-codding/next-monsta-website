'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/Images/Home Page/logo.png';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='font-[arial,sans-serif]'>
        {/* Top Bar */}
        <div className='shadow hidden lg:block'>
          <div className='max-w-[1450px] mx-auto p-[10px_55px]'>
            <div className='grid text-[13px] items-center font-semibold grid-cols-2 justify-between'>
              <div>
                <p>Contact us 24/7 : +91-9781234560 / furniture@gmail.com</p>
              </div>
              <div className='text-right'>
                <button>Login / Register</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className='shadow'>
          <div className='max-w-[1450px] mx-auto p-[20px_20px] md:p-[20px_50px] flex items-center justify-between'>
            {/* Logo */}
            <div className='max-w-[160px]'>
              <Image
                src={logo}
                alt="Furniture Logo"
                className='max-w-full h-auto'
                priority
              />
            </div>

            {/* Search & Icons - Desktop */}
            <div className='hidden lg:flex items-center justify-around gap-5'>
              <div className='flex shadow items-center p-[8px_15px] text-[14px] rounded font-semibold'>
                <input
                  type="text"
                  placeholder='Search Products....'
                  className='p-[2px_10px] outline-none'
                />
                <FaMagnifyingGlass />
              </div>

              <div className='shadow rounded p-[8px] cursor-pointer'>
                <FaHeart className='text-[20px]' />
              </div>

              <div className='flex items-center'>
                <IoMdCart className='shadow rounded text-[35px] p-[5px] cursor-pointer' />
                <p className='shadow rounded p-[5px_15px] ml-2'>Rs.0.00</p>
              </div>
            </div>

            {/* Hamburger - Mobile */}
            <div className='lg:hidden'>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose size={30} /> : <RxHamburgerMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='max-w-[700px] mx-auto relative z-50 hidden lg:block'>
          <div className='flex justify-evenly p-[20px] text-[14px] text-[rgb(90,90,90)]'>
            {["HOME", "LIVING", "SOFA", "PAGES", "CONTACT US"].map((item, idx) => (
              <div key={idx} className={item === "HOME" || item === "CONTACT US" ? "cursor-pointer hover:text-[rgb(192,149,120)]" : "group relative"}>
                {item === "HOME" || item === "CONTACT US" ? (
                  <p className='cursor-pointer hover:text-[rgb(192,149,120)]'>{item}</p>
                ) : (
                  <>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-[rgb(192,149,120)]'>
                      <p>{item}</p>
                      <FaAngleDown />
                    </div>

                    {/* DROPDOWN */}
                    {item === "LIVING" && (
                      <div className="absolute left-0 top-full w-[600px] bg-white shadow-lg p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                        <div className='grid grid-cols-3 gap-6'>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>TABLES</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>Side And End Tables</li>
                              <li>Nest Of Tables</li>
                              <li>Console Table</li>
                              <li>Coffee Table Sets</li>
                              <li>Coffee Tables</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>LIVING STORAGE</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>Prayer Units</li>
                              <li>Display Unit</li>
                              <li>Shoe Racks</li>
                              <li>Chest Of Drawers</li>
                              <li>Cabinets And Sideboard</li>
                              <li>Bookshelves</li>
                              <li>Tv Units</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>MIRRORS</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>Wooden Mirrors</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {item === "SOFA" && (
                      <div className="absolute left-0 top-full w-[600px] bg-white shadow-lg p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                        <div className='grid grid-cols-3 gap-6'>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>SOFA CUM BED</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>Wooden Sofa Cum Bed</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>SOFA SETS</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>L Shape Sofa</li>
                              <li>1 Seater Sofa</li>
                              <li>2 Seater Sofa</li>
                              <li>3 Seater Sofa</li>
                              <li>Wooden Sofa Sets</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>SWING JHULA</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <li>Wooden Jhula</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {item === "PAGES" && (
                      <div className="absolute left-0 top-full w-[200px] bg-white shadow-lg p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                        <ul className='leading-[35px] text-gray-700'>
                          <li>About us</li>
                          <li>Cart</li>
                          <li>Checkout</li>
                          <li>Frequently Questions</li>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className='lg:hidden bg-white shadow-lg p-6 w-full z-50'>
            <ul className='space-y-4 text-[15px] text-gray-800'>
              <li>HOME</li>
              <li>LIVING
                <ul className='ml-4 mt-2 text-sm space-y-1'>
                  <li>Side And End Tables</li>
                  <li>Nest Of Tables</li>
                  <li>Console Table</li>
                  <li>Coffee Table Sets</li>
                  <li>Coffee Tables</li>
                </ul>
              </li>
              <li>SOFA
                <ul className='ml-4 mt-2 text-sm space-y-1'>
                  <li>Sofa Cum Bed</li>
                  <li>Wooden Sofa Cum Bed</li>
                  <li>Sofa Sets</li>
                  <li>L Shape Sofa</li>
                  <li>1 Seater Sofa</li>
                  <li>2 Seater Sofa</li>
                </ul>
              </li>
              <li>PAGES
                <ul className='ml-4 mt-2 text-sm space-y-1'>
                  <li>About Us</li>
                  <li>Cart</li>
                  <li>Checkout</li>
                  <li>Frequently Questions</li>
                </ul>
              </li>
              <li>CONTACT US</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
