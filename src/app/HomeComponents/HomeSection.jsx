import Image from 'next/image'
import React, { act, useEffect, useState } from 'react'
import image from '../../../public/Images/Home Page/1617829052195Caroline Study Tables__.jpg'
import image2 from '../../../public/Images/Home Page/1617829892944Evan Coffee Table__.jpg'
import image3 from '../../../public/Images/Home Page/1620666061907Gloria Shoe Racks_.jpg'
import image4 from '../../../public/Images/Home Page/1620077669499Erica Bookshelfs_brown.jpg'
import image5 from '../../../public/Images/Home Page/1615277326496Sapien Sofa Cum Bed__.jpg'
import image6 from '../../../public/Images/Home Page/1615225341228Ganthur Sheesham Wood Sofa Set___.jpg'
import image7 from '../../../public/Images/Home Page/1615277326496Sapien Sofa Cum Bed__.jpg'


import image8 from '../../../public/Images/Home Page/1608312103476Dorian Shoe Rack_.jpg'
import image9 from '../../../public/Images/Home Page/1617828302132Godfrey Coffee Table Set__.jpg'
import image10 from '../../../public/Images/Home Page/1617981904164Hrithvik Stool__.jpg'
import image11 from '../../../public/Images/Home Page/1617989633213Winona Mirror__.jpg'
import image12 from '../../../public/Images/Home Page/16253167208651620078433247Louise Cabinet_.jpg'
import image13 from '../../../public/Images/Home Page/1663411513681Group 1.jpg'
import image14 from '../../../public/Images/Home Page/1661502549484Group 1.jpg'


import image15 from '../../../public/Images/Home Page/1617828789760Rex Console Table__.jpg'
import image16 from '../../../public/Images/Home Page/16253179270591620747711033Hardwell Temple Prayer Unit__.jpg'
import image17 from '../../../public/Images/Home Page/1621171973378Isaac Chest of Drawer_.jpg'
import image18 from '../../../public/Images/Home Page/1619988418966Leo TV Cabinets.jpg'
import image19 from '../../../public/Images/Home Page/1661762520951Group 1.jpg'
import image20 from '../../../public/Images/Home Page/1661502549484Group 1.jpg'



import { FaRegHeart } from "react-icons/fa";

export default function HomeSection() {

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
        {
            id: 2,
            image: image2,
            title: "Evan Coffee Table",
            category: "Coffee Tables",
            price: 2300,
            originalPrice: 2600,
            category: "featured"
        },
        {
            id: 3,
            image: image3,
            title: "Gloria Shoe Racks",
            category: "Shoe Racks",
            price: 2900,
            originalPrice: 3400,
            category: "featured"
        },
        {
            id: 4,
            image: image4,
            title: "Erica Bookshelfs",
            category: "Bookshelves",
            price: 30000,
            originalPrice: 38000,
            category: "featured"
        },
        {
            id: 5,
            image: image5,
            title: "Sapien Sofa Cum Bed",
            category: "Wooden Sofa Cum Bed",
            price: 54000,
            originalPrice: 64000,
            category: "featured"
        },
        {
            id: 6,
            image: image6,
            title: "Ganthur Sheesham Wood Sofa Set",
            category: "2 Seater Sofa",
            price: 7600,
            originalPrice: 8000,
            category: "featured"
        },
        {
            id: 7,
            image: image7,
            title: "Calina Swing Jhula",
            category: "Wooden Jhula",
            price: 58000,
            originalPrice: 65000,
            category: "featured"
        },









         {
            id: 8,
            image: image8,
            title: "Caroline Study Tables",
            category: "Nest of Tables",
            price: 2500,
            originalPrice: 3000,
            category: "new arrivals"
        },
        {
            id: 9,
            image: image9,
            title: "Evan Coffee Table",
            category: "Coffee Tables",
            price: 2300,
            originalPrice: 2600,
            category: "new arrivals"
        },
        {
            id: 10,
            image: image10,
            title: "Gloria Shoe Racks",
            category: "Shoe Racks",
            price: 2900,
            originalPrice: 3400,
            category: "new arrivals"
        },
        {
            id: 11,
            image: image11,
            title: "Erica Bookshelfs",
            category: "Bookshelves",
            price: 30000,
            originalPrice: 38000,
            category: "new arrivals"
        },
        {
            id: 12,
            image: image12,
            title: "Sapien Sofa Cum Bed",
            category: "Wooden Sofa Cum Bed",
            price: 54000,
            originalPrice: 64000,
            category: "new arrivals"
        },
        {
            id: 13,
            image: image13,
            title: "Ganthur Sheesham Wood Sofa Set",
            category: "2 Seater Sofa",
            price: 7600,
            originalPrice: 8000,
            category: "new arrivals"
        },
        {
            id: 14,
            image: image14,
            title: "Calina Swing Jhula",
            category: "Wooden Jhula",
            price: 58000,
            originalPrice: 65000,
            category: "new arrivals"
        },






          {
            id: 20,
            image: image15,
            title: "Caroline Study Tables",
            category: "Nest of Tables",
            price: 2500,
            originalPrice: 3000,
            category: "onsale"
        },
        {
            id: 15,
            image: image16,
            title: "Evan Coffee Table",
            category: "Coffee Tables",
            price: 2300,
            originalPrice: 2600,
            category: "onsale"
        },
        {
            id: 16,
            image: image17,
            title: "Gloria Shoe Racks",
            category: "Shoe Racks",
            price: 2900,
            originalPrice: 3400,
            category: "onsale"
        },
        {
            id: 17,
            image: image18,
            title: "Erica Bookshelfs",
            category: "Bookshelves",
            price: 30000,
            originalPrice: 38000,
            category: "onsale"
        },
        {
            id: 18,
            image: image19,
            title: "Sapien Sofa Cum Bed",
            category: "Wooden Sofa Cum Bed",
            price: 54000,
            originalPrice: 64000,
            category: "onsale"
        },
        {
            id: 19,
            image: image20,
            title: "Ganthur Sheesham Wood Sofa Set",
            category: "2 Seater Sofa",
            price: 7600,
            originalPrice: 8000,
            category: "onsale"
        },
     





    ]


    const [tabData, setTabData] = useState(dummData);
    const [activeTab, setActiveTab] = useState("featured");
   


        const tabings = (tab) => {
            setActiveTab(tab);  
        }

        useEffect(()=>{
             let newData=dummData.filter((v,i)=>{
                return v.category===activeTab
            })
           setTabData(newData)
        },[activeTab])


       
    return (
        <div>
            <div>
                <div>
                    <ul className='lg:flex block text-center justify-center gap-[20px] text-[22px] font-bold p-[20px_0]'>
                        <li className='border  p-[10px_15px] text-[rgb(192,149,120)] border-[rgb(192,149,120)]  cursor-pointer' onClick={()=>tabings("featured")}>Featured</li>
                        <li className=' border hover:border-[rgb(192,149,120)] p-[10px_15px] text-[rgb(192,149,120)] cursor-pointer' onClick={()=>tabings("new arrivals")} >New Arrivals</li>
                        <li className='border hover:border-[rgb(192,149,120)] p-[10px_15px] text-[rgb(192,149,120)] cursor-pointer' onClick={()=>tabings("onsale")} >Onsale</li>
                    </ul>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-[20px] max-w-[1450px] mx-auto p-[20px_50px]'>

                {tabData.map((v, i) => {
                    return (
                        <div key={v.id} className='bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                            <Image src={v.image} alt='image' className='w-full h-auto' />
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
    )
}
