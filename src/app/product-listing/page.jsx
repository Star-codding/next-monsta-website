"use client"
import React, { useEffect, useState } from 'react'
import image from '../../../public/Images/Home Page/1617829052195Caroline Study Tables__.jpg'
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa6';
import Image from 'next/image';

export default function page() {

    let dummData = [
        {
            id: 1,
            image: image,
            title: "Caroline Study Tables",
            category: "Nest of Tables",
            price: 2500,
            originalPrice: 3000,
            category: "featured"
        },
    ]



    const [tabData, setTabData] = useState(dummData);
    const [activeTab, setActiveTab] = useState("featured");



    const tabings = (tab) => {
        setActiveTab(tab);
    }

    useEffect(() => {
        let newData = dummData.filter((v, i) => {
            return v.category === activeTab
        })
        setTabData(newData)
    }, [activeTab])



    return (
        <div>
            <div className='max-w-[1320px] mx-auto'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>Product Listing</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p className='text-[rgb(192,149,120)]'>Product Listing</p>
                    </div>
                </div>

                <div className='grid lg:grid-cols-[20%_auto] grid mt-[30px]'>
                    <div>
                        <div className='p-[15px]  h-[600px] overflow-y-scroll  scroll '>
                            <h1 className='text-[22px] font-serif font-bold'>Categories</h1>

                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Tables</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> Side and End Tables
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Nest Of Tables
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Console Table
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Coffee Table Sets
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Coffee Tables
                                    </li>

                                </ul>
                            </div>


                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Living Storage</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> Prayer Units
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Display Unit
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Shoe Racks
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Cabinets and Sideboard
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Bookshelves
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Tv Units
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Mirrors</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> Wooden Mirrors
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Sofa Cum Bed</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> Wooden Sofa Cum Bed
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Sofa Sets</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> L Shape Sofa
                                    </li>
                                    <li>
                                        <input type="checkbox" /> 1 Seater Sofa
                                    </li>
                                    <li>
                                        <input type="checkbox" /> 2 Seater Sofa
                                    </li>
                                    <li>
                                        <input type="checkbox" /> 3 Seater Sofa
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Wooden Sofa Sets
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <p className='text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]'>Swing Jhula</p>
                                <ul className='leading-[35px] text-[rgb(90,90,90)]'>
                                    <li>
                                        <input type="checkbox" /> Wooden Jhula
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className=' p-[15px] h-[350px] overflow-y-scroll scroll'>
                            <div>
                                <h1 className='text-[22px] font-serif font-bold'>Material</h1>
                            </div>


                            <div>

                                <ul className='leading-[35px] text-[rgb(90,90,90)] mt-[10px]'>
                                    <li>
                                        <input type="checkbox" /> Sheesham Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Teak Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Rose Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Satin Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Sal Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Marandi Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Mahogany Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Deodar Wood
                                    </li>
                                    <li>
                                        <input type="checkbox" /> JackFruit
                                    </li>

                                </ul>
                            </div>
                        </div>


                        <div className=' p-[15px]'>
                            <div>
                                <h1 className='text-[22px] font-serif font-bold'>Color</h1>
                            </div>


                            <div>

                                <ul className='leading-[35px] text-[rgb(90,90,90)] mt-[10px]'>
                                    <li>
                                        <input type="checkbox" /> Burnt Amber
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Golden Teak
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Carbon Black
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Faded Oak
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Weathered French Grey
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Faded Ochre
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Weathered Walnut
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Mango Green
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Cobalt Blue
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Black Finish
                                    </li>

                                </ul>
                            </div>

                            <div>
                                <div className='mt-[10px]'>
                                    <h1 className='text-[22px] font-serif font-bold'>Filter by price</h1>
                                </div>

                                <div className='mt-[10px]'>
                                    <input type="range" />
                                    <p className='text-[rgb(90,90,90)]'>Rs. 0 - Rs. 200000</p>
                                </div>

                                <button className='border text-white bg-[rgb(33,33,33)] p-[2px_15px] rounded mt-[5px] cursor-pointer hover:bg-[rgb(192,149,120)]'>Filter</button>
                            </div>
                        </div>





                    </div>


                    <div >
                        <div className='lg:flex shadow p-[15px] md:block md:text-center gap-[20px] text-[15px] text-[rgb(90,90,90)]  lg:justify-end lg:items-center '>
                            <p className=' text-center'>Short By :</p>
                            <div className=' mx-auto text-center mt-[10px]'>
                                <select name="" className='w-[150px] border p-[3px_10px] rounded' id="">
                                    <option value="">Short By</option>
                                    <option value="">Featured Products</option>
                                    <option value="">New Arrivals</option>
                                    <option value="">Onsale</option>
                                    <option value="">Best Selling</option>
                                    <option value="">Short by Price: Low to High</option>
                                    <option value="">Short by Price: High to Low</option>
                                    <option value="">Short by Name: A to Z</option>
                                    <option value="">Short by Name: Z to A</option>

                                </select>
                            </div>
                            <p className='text-center mt-[10px]'>Showing 1-1 of 1 results</p>
                        </div>



                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-[20px] max-w-[1450px] mx-auto p-[20px_50px]'>

                            {tabData.map((v, i) => {
                                return (
                                    <div key={v.id} className='bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                                        <Link href={"/product"}>  <Image src={v.image} alt='image' className='w-full h-auto' /> </Link>
                                        <div className='text-center leading-[30px] p-4'>
                                            <p className='text-[14px] text-[rgb(90,90,90)] font-semibold'>{v.category}</p>
                                            <h1 className='font-bold'>{v.title}</h1>
                                            <p className='pt-[10px] text-[rgb(192,149,120)] font-bold'>
                                                <span className='line-through text-[grey]'>Rs. 3,000</span> Rs. 2,500
                                            </p>
                                            <div className='flex items-center justify-center gap-4 pt-4 '>
                                                <FaRegHeart className='p-[5px] text-[34px] bg-[rgb(241,241,241)] rounded hover:bg-[rgb(192,149,120)]' />
                                                <button className='px-4 py-2 bg-[rgb(241,241,241)] text-[14px] font-semibold rounded hover:bg-[rgb(192,149,120)]  transition-colors duration-300 ease-in-out cursor-pointer'>
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>


                    </div>







                </div>





            </div>




        </div>
    )
}
