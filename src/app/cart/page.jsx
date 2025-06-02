import Image from 'next/image'
import React from 'react'
import photo from '../../../public/Images/Cart Page/my-Order.jpg'

export default function page() {
    return (
        <div>
            <div>
                <div className='max-w-[1320px] mx-auto mb-[35px]'>
                    <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                        <h1 className='text-[32px] font-bold mb-[5px] font-serif'>Shopping Cart</h1>
                        <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                            <p>Home &gt; </p>
                            <p className='text-[rgb(192,149,120)]'>Shopping Cart</p>
                        </div>
                    </div>


                    <div className='mt-[45px] ' >
                        <Image src={photo} alt='photo' className='mx-auto' />
                        <p className='text-center text-[18px] font-semibold font-serif'>Your shopping cart is empty!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
