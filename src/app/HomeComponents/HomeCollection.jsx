import React from 'react'
import photo from '../../../public/Images/Home Page/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.jpg'
import Image from 'next/image'

export default function HomeCollection() {
  return (
    <div>
      <div className='m-[20px_0px] relative'>
        <Image src={photo} alt="Image" className='max-w-[100%] h-[450px]   ' />

        <div className='absolute max-w-[600px] top-[130px] left-[200px] hover:scale-[1.1] duration-[0.5s] cursor-pointer'>
            <p className='text-[42px] font-bold font-serif'>New Trending Collection</p>
            <p className='pt-[5px]'>We Believe That Good Design in Always in Season</p>

            <button className='mt-[60px] border p-[10px_30px] rounded text-[rgb(192,149,120)] border-[rgb(192,149,120)] hover:bg-[rgb(192,149,120)] hover:text-white font-semibold cursor-pointer text-[14px]'>SHOPPING NOW</button>
        </div>
      </div>
    </div>
  )
}
