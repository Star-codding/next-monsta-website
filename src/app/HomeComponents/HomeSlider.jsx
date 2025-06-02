import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from '../../../public/Images/Home Page/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg';
import image2 from '../../../public/Images/Home Page/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg';
import image3 from '../../../public/Images/Home Page/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg';
import Image from 'next/image';

export default function HomeSlider() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !isSmallScreen,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          autoplaySpeed: 2000
        }
      }
    ]
  };

  return (
    <div className="relative slider-container">
      <Slider {...settings}>
        <div className="w-full overflow-hidden">
          <Image
            src={image3}
            alt="Image 1"
            priority
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover"
          />
        </div>
        <div className="w-full overflow-hidden">
          <Image
            src={image2}
            alt="Image 2"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover"
          />
        </div>
        <div className="w-full overflow-hidden">
          <Image
            src={image}
            alt="Image 3"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}
