"use client"
import React from 'react'
import { FaAddressCard } from 'react-icons/fa6'
import { IoMdCall } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'

export default function page() {
    return (
        <div>
            <div className='max-w-[1320px] mx-auto mb-[35px]'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>Contact Us</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p className='text-[rgb(192,149,120)]'>Contact Us</p>
                    </div>
                </div>


                <div className='mx-auto mt-[50px]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.203130927924!2d73.00688287552729!3d26.27822137698317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418db2e058c3db%3A0xa39539c73dd83e38!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1717396822666!5m2!1sen!2sin"

                        className='w-full h-[450px]'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>


                <div className='grid lg:grid-cols-2 gap-[20px] mt-[50px]'>
                    <div className='leading-[45px] p-[5px_15px]'>
                        <h1 className='text-[22px] font-bold mb-[5px] font-serif'>Contact Us</h1>
                        <div className='flex gap-[10px] items-center text-[rgb(90,90,90)] '>
                            <p><FaAddressCard /></p>
                            <p> Address : Claritas est etiam processus dynamicus</p>
                        </div>
                        <div className='flex gap-[10px] items-center text-[rgb(90,90,90)]'>
                            <p><IoMdCall /></p>
                            <p> Phone : +91-9781234560</p>
                        </div>
                        <div className='flex gap-[10px] items-center text-[rgb(90,90,90)]'>
                            <p><IoMail /></p>
                            <p> Email : furniture@gmail.com</p>
                        </div>
                    </div>
                    <div className='p-[5px_15px]'>
                        <h1 className='text-[22px] font-bold mb-[5px] font-serif'>Tell us your question</h1>
                        <form>
                            <p className='font-semibold mt-[10px]'>Your Name (required)</p>
                            <input type="text" placeholder='Name' className='w-full p-[10px] border border-[rgb(221,221,221)] rounded-[5px] mt-[5px]' />
                            <p className='font-semibold mt-[10px]'>Your Email (required)</p>
                            <input type="email" placeholder='Email' className='w-full p-[10px] border border-[rgb(221,221,221)] rounded-[5px] mt-[5px]' />
                            <p className='font-semibold mt-[10px]'>Your Phone (required)</p>
                            <input type="text" placeholder='Phone' className='w-full p-[10px] border border-[rgb(221,221,221)] rounded-[5px] mt-[5px]' />
                            <p className='font-semibold mt-[10px]'>Subject</p>
                            <input type="text" placeholder='Subject' className='w-full p-[10px] border border-[rgb(221,221,221)] rounded-[5px] mt-[5px]' />
                            <p className='font-semibold mt-[10px]'>Your Message</p>
                            <textarea name="" id="" cols="20" rows="5" className='w-full p-[10px] border border-[rgb(221,221,221)] rounded-[5px] mt-[5px]'></textarea><br />
                            <button className='bg-[rgb(192,149,120)] text-white p-[10px] rounded-[5px] mt-[5px]'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
