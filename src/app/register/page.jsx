import React from 'react'

export default function page() {
    return (
        <div>
            <div className='max-w-[1320px] mx-auto mb-[35px]'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>My Account</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p className='text-[rgb(192,149,120)]'>My Account</p>
                    </div>
                </div>


                <div className='grid lg:grid-cols-2 grid-cols-1 mt-[20px] '>
                    <div className='p-[15px]'>
                        <h1 className='text-[30px] font-serif font-semibold'>Login</h1>

                        <div className='mt-[20px] shadow p-[15px] rounded-md'>
                           <p  className='mt-[10px]'> Email * <br /></p>
                            <input type="text" placeholder='Email Address' className='border p-[5px_10px] w-[99%] mt-[15px] rounded ' /> <br />
                            <p className='mt-[10px]'> Password * <br /></p>
                            <input type="password" placeholder='Password' className='border p-[5px_10px] w-[99%] mt-[15px] rounded' /> <br />
                            <div className='flex justify-between items-center mt-[10px]'>
                                <p className='text-[rgb(192,149,120)] text-[14px] cursor-pointer font-semibold'>Lost Your Password ?</p>
                            <button className='bg-[rgb(192,149,120)] text-white p-[5px_15px] rounded-[20px] mt-[25px] font-bold hover:bg-black'>Login</button>
                            </div>
                           
                        </div>
                    </div>
                    <div className='p-[15px]'>
                        <h1 className='text-[30px] font-serif font-semibold'>Register</h1>


                        <div className='mt-[20px] shadow p-[15px] rounded-md'>
                           <p  className='mt-[10px]'> Email * <br /></p>
                            <input type="text" placeholder='Email Address' className='border p-[5px_10px] w-[99%] mt-[15px] rounded' /> <br />
                            <p className='mt-[10px]'> Password * <br /></p>
                            <input type="password" placeholder='Password' className='border p-[5px_10px] w-[99%] mt-[15px] rounded' /> <br />
                            <div className='flex justify-between items-center mt-[10px]'>
                                <p className='text-[rgb(192,149,120)] text-[14px] cursor-pointer font-semibold'></p>
                            <button className='bg-[rgb(192,149,120)] text-white p-[5px_15px] rounded-[20px] mt-[25px] font-bold hover:bg-black'>Register</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
