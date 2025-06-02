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
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategory = (category) => {
    setActiveCategory(prev => (prev === category ? null : category));
  };

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
              <div className='text-right cursor-pointer'>
                <button><Link href={"/register"}>Login / Register</Link></button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className='shadow'>
          <div className='max-w-[1450px] mx-auto p-[20px_20px] md:p-[20px_50px] flex items-center justify-between'>
            <div className='max-w-[160px]'>
              <Link href={"/"}>
                <Image src={logo} alt="Furniture Logo" className='max-w-full h-auto' priority />
              </Link>
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
                            <ul className='text-sm space-y-1 text-gray-700 leading-[25px]'>
                              {["Side And End Tables", "Nest Of Tables", "Console Table", "Coffee Table Sets", "Coffee Tables"].map((name, i) => (
                                <Link key={i} href={"/product-listing"}>
                                  <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>{name}</li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>LIVING STORAGE</h3>
                            <ul className='text-sm space-y-1 text-gray-700 leading-[25px]'>
                              {["Prayer Units", "Display Unit", "Shoe Racks", "Chest Of Drawers", "Cabinets And Sideboard", "Bookshelves", "Tv Units"].map((name, i) => (
                                <Link key={i} href={"/product-listing"}>
                                  <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>{name}</li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>MIRRORS</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <Link href={"/product-listing"}>
                                <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>Wooden Mirrors</li>
                              </Link>
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
                              <Link href={"/product-listing"}>
                                <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>Wooden Sofa Cum Bed</li>
                              </Link>
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>SOFA SETS</h3>
                            <ul className='text-sm space-y-1 text-gray-700 leading-[25px]'>
                              {["L Shape Sofa", "1 Seater Sofa", "2 Seater Sofa", "3 Seater Sofa", "Wooden Sofa Sets"].map((name, i) => (
                                <Link key={i} href={"/product-listing"}>
                                  <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>{name}</li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className='font-semibold text-black mb-2'>SWING JHULA</h3>
                            <ul className='text-sm space-y-1 text-gray-700'>
                              <Link href={"/product-listing"}>
                                <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>Wooden Jhula</li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {item === "PAGES" && (
                      <div className="absolute left-0 top-full w-[200px] bg-white shadow-lg p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 ease-in-out">
                        <ul className='leading-[30px] text-gray-700'>
                          {["About us", "Cart", "Checkout", "Frequently Questions"].map((name, i) => {
                            const href = name === "About us" ? "/about"
                              : name === "Cart" ? "/cart"
                              : name === "Checkout" ? "/" // you can change this
                              : "/frequently-questions";
                            return (
                              <Link key={i} href={href}>
                                <li className='cursor-pointer hover:text-[rgb(192,149,120)]'>{name}</li>
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Sidebar (menuOpen) */}
        {menuOpen && (
          <div className="fixed top-0 left-0 h-full w-3/4 max-w-[280px] bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out translate-x-0">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-xl">✕</button>

            <ul className="mt-12 px-6 py-8 space-y-6 text-[15px] text-gray-800">
              <li>
                <Link href="/" onClick={toggleMenu} className="block hover:text-[rgb(192,149,120)] transition-all duration-200 hover:translate-x-1">HOME</Link>
              </li>
              {/* Remaining Mobile Items TODO */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
