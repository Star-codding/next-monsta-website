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
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <>
      <div className='font-[arial,sans-serif] relative'>
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

            {/* Mobile Icons */}
            <div className='flex items-center gap-4 lg:hidden'>
              <FaMagnifyingGlass className='text-xl' />
              <FaHeart className='text-xl' />
              <IoMdCart className='text-2xl' />
              <button onClick={toggleMenu}>
                {menuOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='max-w-[700px] mx-auto relative z-40 hidden lg:block'>
          <div className='flex justify-evenly p-[20px] text-[14px] text-[rgb(90,90,90)]'>
            {["HOME", "LIVING", "SOFA", "PAGES", "CONTACT US"].map((item, idx) => (
              <div key={idx} className={item === "HOME" || item === "CONTACT US" ? "cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(192,149,120)] hover:scale-105" : "group relative"}>
                {item === "HOME" || item === "CONTACT US" ? (
                  <Link href={item === "HOME" ? "/" : "/contact"}>
                    <p className='cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(192,149,120)] hover:scale-105'>{item}</p>
                  </Link>
                ) : (
                  <>
                    <div className='flex items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(192,149,120)] hover:scale-105'>
                      <p>{item}</p>
                      <FaAngleDown />
                    </div>

                    {/* Desktop Dropdowns */}
                    <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md p-4 min-w-[200px] transition-all duration-300 ease-in-out">
                      {item === "LIVING" && (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold mb-2 text-gray-800">TABLES</h3>
                            <ul className="space-y-2">
                              {["Side And End Tables", "Nest Of Tables", "Console Table", "Coffee Table Sets", "Coffee Tables"].map((subItem, i) => (
                                <li key={i} className="hover:text-[rgb(192,149,120)] transition-all duration-300">
                                  <Link href="/product-listing">{subItem}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 text-gray-800">LIVING STORAGE</h3>
                            <ul className="space-y-2">
                              {["Prayer Units", "Display Unit", "Shoe Racks", "Chest Of Drawers", "Cabinets And Sideboard", "Bookshelves", "Tv Units"].map((subItem, i) => (
                                <li key={i} className="hover:text-[rgb(192,149,120)] transition-all duration-300">
                                  <Link href="/product-listing">{subItem}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      {item === "SOFA" && (
                        <div>
                          <h3 className="font-semibold mb-2 text-gray-800">SOFA SETS</h3>
                          <ul className="space-y-2">
                            {["L Shape Sofa", "1 Seater Sofa", "2 Seater Sofa", "3 Seater Sofa", "Wooden Sofa Sets"].map((subItem, i) => (
                              <li key={i} className="hover:text-[rgb(192,149,120)] transition-all duration-300">
                                <Link href="/product-listing">{subItem}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {item === "PAGES" && (
                        <ul className="space-y-2">
                          {["About us", "Cart", "Checkout", "Frequently Questions"].map((subItem, i) => (
                            <li key={i} className="hover:text-[rgb(192,149,120)] transition-all duration-300">
                              <Link 
                                href={
                                  subItem === "About us" ? "/about" :
                                  subItem === "Cart" ? "/cart" :
                                  subItem === "Checkout" ? "/" :
                                  "/frequently-questions"
                                }
                              >
                                {subItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-xl overflow-y-auto transform transition-all duration-300 ease-in-out translate-x-0">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={toggleMenu}>
                  <IoClose size={24} />
                </button>
              </div>
            </div>

            <div className="py-4">
              <div className="px-4 py-2">
                <Link href="/" onClick={toggleMenu}>
                  <span className="block py-2 transition-all duration-300 ease-in-out hover:text-[rgb(192,149,120)] hover:translate-x-2">HOME</span>
                </Link>
              </div>

              {/* Mobile Accordion Menu */}
              <div className="border-t">
                <div 
                  className="px-4 py-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory('living')}
                >
                  <span>LIVING</span>
                  <FaAngleDown className={`transform transition-transform ${activeCategory === 'living' ? 'rotate-180' : ''}`} />
                </div>
                {activeCategory === 'living' && (
                  <div className="bg-gray-50 px-6 py-3 transition-all duration-300 ease-in-out">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">TABLES</h3>
                      <ul className="space-y-2 text-sm">
                        {["Side And End Tables", "Nest Of Tables", "Console Table", "Coffee Table Sets", "Coffee Tables"].map((item, i) => (
                          <li key={i} className="hover:text-[rgb(192,149,120)]">
                            <Link href="/product-listing" onClick={toggleMenu}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">LIVING STORAGE</h3>
                      <ul className="space-y-2 text-sm">
                        {["Prayer Units", "Display Unit", "Shoe Racks", "Chest Of Drawers", "Cabinets And Sideboard", "Bookshelves", "Tv Units"].map((item, i) => (
                          <li key={i} className="hover:text-[rgb(192,149,120)]">
                            <Link href="/product-listing" onClick={toggleMenu}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t">
                <div 
                  className="px-4 py-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory('sofa')}
                >
                  <span>SOFA</span>
                  <FaAngleDown className={`transform transition-transform ${activeCategory === 'sofa' ? 'rotate-180' : ''}`} />
                </div>
                {activeCategory === 'sofa' && (
                  <div className="bg-gray-50 px-6 py-3 transition-all duration-300 ease-in-out">
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">SOFA SETS</h3>
                      <ul className="space-y-2 text-sm">
                        {["L Shape Sofa", "1 Seater Sofa", "2 Seater Sofa", "3 Seater Sofa", "Wooden Sofa Sets"].map((item, i) => (
                          <li key={i} className="hover:text-[rgb(192,149,120)]">
                            <Link href="/product-listing" onClick={toggleMenu}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t">
                <div 
                  className="px-4 py-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCategory('pages')}
                >
                  <span>PAGES</span>
                  <FaAngleDown className={`transform transition-transform ${activeCategory === 'pages' ? 'rotate-180' : ''}`} />
                </div>
                {activeCategory === 'pages' && (
                  <div className="bg-gray-50 px-6 py-3 transition-all duration-300 ease-in-out">
                    <ul className="space-y-2 text-sm">
                      {["About us", "Cart", "Checkout", "Frequently Questions"].map((item, i) => (
                        <li key={i} className="hover:text-[rgb(192,149,120)]">
                          <Link 
                            href={
                              item === "About us" ? "/about" :
                              item === "Cart" ? "/cart" :
                              item === "Checkout" ? "/" :
                              "/frequently-questions"
                            } 
                            onClick={toggleMenu}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t">
                <Link href="/contact" onClick={toggleMenu}>
                  <div className="px-4 py-3 hover:text-[rgb(192,149,120)]">
                    CONTACT US
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="border-t px-4 py-4">
              <Link href="/register" onClick={toggleMenu}>
                <button className="w-full py-2 px-4 bg-[rgb(192,149,120)] text-white rounded">
                  Login / Register
                </button>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Contact us 24/7: +91-9781234560
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
