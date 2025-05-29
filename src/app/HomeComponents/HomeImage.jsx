import Image from 'next/image'
import React from 'react'
import image from '../../../public/Images/Home Page/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.webp'
import image2 from '../../../public/Images/Home Page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp'

export default function HomeImage() {
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-[20px] max-w-[1450px] mx-auto p-[20px_50px]'>
                <div className='relative overflow-hidden'>
                    <Image src={image} className='hover:scale-[1.1] duration-[0.5s] cursor-pointer '/>
                    <div className='absolute top-0 p-[20px]'>
                        <p className='font-semibold'>Design Creative</p>
                        <p className='text-[22px] font-bold font-serif'>Chair Collection</p>
                    </div>

                </div>
                <div className='relative overflow-hidden'>
                    <Image src={image2} className='hover:scale-[1.1] duration-[0.5s] cursor-pointer '/>
                    <div className='absolute top-0 p-[20px]'>
                        <p className='font-semibold'>BestSelling Product</p>
                        <p className='text-[22px] font-bold font-serif'>Chair Collection</p>
                    </div>

                </div>
                <div className='relative overflow-hidden'>
                    <Image src={image} className='hover:scale-[1.1] duration-[0.5s] cursor-pointer '/>
                    <div className='absolute top-0 p-[20px]'>
                        <p className='font-semibold'>Onsale Products</p>    
                        <p className='text-[22px] font-bold font-serif'>Chair Collection</p>
                    </div>

                </div>
            </div>





            
        </div>
    )
}
