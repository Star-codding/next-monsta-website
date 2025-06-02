"use client"
import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function Page() {
    const [openIndex, setOpenIndex] = useState(null)

    const allfaq = [
        {
            id: 1,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 2,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 3,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 4,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 5,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 6,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 7,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
        {
            id: 8,
            question: 'Mauris Congue euised purus at semper. Morbi et vulputate masa?',
            answer: 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo...'
        },
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div>
            <div className='max-w-[1320px] mx-auto mb-[35px]'>
                <div className='mt-[15px] shadow p-[15px_0px] text-center'>
                    <h1 className='text-[32px] font-bold mb-[5px] font-serif'>Frequently Questions</h1>
                    <div className='flex gap-[10px] justify-center text-[15px] font-semibold font-sans'>
                        <p>Home &gt; </p>
                        <p className='text-[rgb(192,149,120)]'>Frequently Questions</p>
                    </div>
                </div>

                <div className='mt-[45px] p-[5px_20px]'>
                    {allfaq.map((v, i) => (
                        <div key={v.id}>
                            <div
                                onClick={() => toggleFAQ(i)}
                                className='flex justify-between border p-[10px_20px] items-center rounded mt-[10px] bg-[rgb(242,242,242)] cursor-pointer'
                            >
                                <h1 className='font-semibold font-serif'>{v.question}</h1>
                                <span>{openIndex === i ? <FaMinus /> : <FaPlus />}</span>
                            </div>

                            {openIndex === i && (
                                <div className='p-[10px_20px] border border-t-0 bg-white'>
                                    <p className='text-[15px] font-semibold text-[rgb(90,90,90)] font-sans'>{v.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
