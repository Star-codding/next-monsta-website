import React from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import image from '../../../public/Images/Home Page/1617829052195Caroline Study Tables__.jpg'
import image2 from '../../../public/Images/Home Page/1617829892944Evan Coffee Table__.jpg'
import image3 from '../../../public/Images/Home Page/1620666061907Gloria Shoe Racks_.jpg'
import image4 from '../../../public/Images/Home Page/1620077669499Erica Bookshelfs_brown.jpg'
import image5 from '../../../public/Images/Home Page/1615277326496Sapien Sofa Cum Bed__.jpg'
import image6 from '../../../public/Images/Home Page/1615225341228Ganthur Sheesham Wood Sofa Set___.jpg'





import image8 from '../../../public/Images/Home Page/1608312103476Dorian Shoe Rack_.jpg'
import image9 from '../../../public/Images/Home Page/1617828302132Godfrey Coffee Table Set__.jpg'
import image10 from '../../../public/Images/Home Page/1617981904164Hrithvik Stool__.jpg'
import image11 from '../../../public/Images/Home Page/1617989633213Winona Mirror__.jpg'
import image12 from '../../../public/Images/Home Page/16253167208651620078433247Louise Cabinet_.jpg'


import Image from "next/image";

export default function BestsellingSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    { name: "Isaac Chest Of Drawer", type: "Chest Of Drawers", oldPrice: "32,000", newPrice: "25,000", image: image },
    { name: "Louise Cabinet", type: "Cabinets and Sideboard", oldPrice: "28,000", newPrice: "23,000", image: image2 },
    { name: "Hrithvik Stool", type: "Side and End Tables", oldPrice: "7,000", newPrice: "6,000", image: image3 },
    { name: "Caroline Study Tables", type: "Nest Of Tables", oldPrice: "3,000", newPrice: "2,500", image: image4 },
    { name: "Evan Coffee Table", type: "Coffee Tables", oldPrice: "2,600", newPrice: "2,300", image: image5 },
    { name: "Rex Console Table", type: "Console Table", oldPrice: "3,000", newPrice: "2,200", image: image6 },
    { name: "Gloria Shoe Racks", type: "Shoe Racks", oldPrice: "3,400", newPrice: "2,900", image: image8 },
    { name: "Zane Coffee Table", type: "Coffee Tables", oldPrice: "5,000", newPrice: "4,000", image: image9 },
    { name: "Emily Bookshelf", type: "Bookshelves", oldPrice: "8,000", newPrice: "6,500", image: image10 },
    { name: "Nora Wardrobe", type: "Wardrobes", oldPrice: "20,000", newPrice: "17,500", image: image11 },
    { name: "Liam Dining Set", type: "Dining Table Sets", oldPrice: "35,000", newPrice: "30,000", image: image12 },
    { name: "Olivia Bed", type: "Beds", oldPrice: "40,000", newPrice: "33,000" },
  ];

  return (
    <div className="max-w-[1450px] mx-auto  p-4">
      <div className="flex justify-between items-center px-6 py-4 text-[25px] font-bold">
        <p>Bestselling Products</p>
        <p>
          <RiArrowLeftRightLine />
        </p>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div className="px-2">
            <div className="shadow  rounded-lg overflow-hidden ">
              <div className="relative w-full h-[200px]">
                <Image
                  src={product.image || "/Images/Home Page/default.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-sm text-gray-600">{product.type}</p>
                <p className="font-semibold text-lg mb-2">{product.name}</p>
                <div className="flex justify-center gap-2 items-center text-sm mb-3">
                  <span className="line-through text-gray-500">Rs. {product.oldPrice}</span>
                  <span className="text-[#C08457] font-bold">Rs. {product.newPrice}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <button className="border px-4 py-2 flex items-center gap-2 hover:bg-[rgb(192,149,120)] cursor-pointer">
                    <span >♡</span>
                  </button>
                  <button className="bg-gray-100 px-4 py-2 hover:bg-[rgb(192,149,120)] cursor-pointer">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
