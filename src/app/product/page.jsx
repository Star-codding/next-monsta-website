import React from 'react'
import image from '../../../public/Images/Home Page/1617829052195Caroline Study Tables__.jpg'
import Image from 'next/image'
import { Sliders } from 'lucide-react'
import BestsellingSlider from '../Common/UniversalSlider'
import Footer from '../Common/Footer'


export default function page() {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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


    return (
        <div>
            <div className='max-w-[1320px] mx-auto'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>Caroline Study Tables</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p>Nest of Tables &gt;</p>
                        <p>Caroline Study Tables  </p>
                    </div>
                </div>




                <div className='mt-[15px]'>
                    <div className='grid  lg:grid-cols-[50%_50%] grid-cols-1'>
                        <div className=' p-[15px] '>
                            <Image src={image} alt='image1' />
                            <div>
                                <div className='grid grid-cols-4 pt-[15px] p-[0px_25px]   '>
                                    <div><Image src={image} alt='image1' className='w-[100px]' /></div>
                                    <div><Image src={image} alt='image1' className='w-[100px]' /></div>
                                    <div><Image src={image} alt='image1' className='w-[100px]' /></div>
                                    <div><Image src={image} alt='image1' className='w-[100px]' /></div>

                                </div>

                            </div>
                        </div>
                        <div className=' p-[15px] '>

                            <h1 className='text-[22px] font-semibold font-serif  '>Caroline Study Tables</h1>

                            <div className='grid grid-cols-2 w-[180px] items-center pt-[15px] font-sans'>
                                <p className='line-through text-[rgb(164,164,164)]'>Rs. 3,000</p>
                                <p className='text-[18px] font-semibold'> Rs. 2,500</p>
                            </div>

                            <p className='mt-[25px] text-[rgb(90,90,90)] '>The Drawer is for your storage needs and camouflages perfectly with the tables carved front. The use of Sheesham ensures its longevity.</p>


                            <button className='border p-[7px_75px] rounded text-white bg-[rgb(192,149,120)] hover:bg-black font-bold mt-[50px] cursor-pointer'>Add to Cart</button>

                            <div className='mt-[25px] leading-[30px] font-semibold'>
                                <p>Code: jodST0011</p>
                                <p>Dimension: 72L * 32H * 30W</p>
                                <p>Estimate Delivery Days: "40-45" Days</p>
                                <p>Category: Nest Of Tables</p>
                                <p>Color: Cobalt Blue</p>
                                <p>Material: Deodar Wood</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='p-[15px_30px] '>
                    <div className='mt-[25px] font-semibold text-[25px] text-[rgb(192,149,120)] '>Description</div>

                    <p className='mt-[30px] text-[rgb(90,90,90)] font-semibold'>The caroline table is sure to make you travel back in time, aesthetics that have a royal and periodic feel will enhance the look and feel of any space. The Drawer is for your storage needs and camouflages perfectly with the tables carved front. The use of Sheesham ensures its longevity.</p>
                </div>



                <div >
                
                    <BestsellingSlider/>
                </div>

                 <div >
                
                    <BestsellingSlider/>
                </div>

                <Footer/>

            </div>
        </div>
    )
}
