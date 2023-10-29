"use client";

import Image from 'next/image';
import {useState} from 'react';

const QuesCard = ({question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  }

  return (
    // md:max-w-3xl m-3
    <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden  bg-white dark:bg-gray-800">
      <section className="flex flex-col p-5 w-full">
        <div>
          <p className="font-satoshi font-semibold text-xl text-black dark:text-white">
            <span className="inline-block ">
              <span className="material-symbols-outlined mr-3">
              contact_support
              </span>
              {question}
            </span>
          </p>
        </div>
      
        <div className='mt-5 justify-end items-center relative'>
          <Image 
          src="/assets/images/heart-icon.svg"
          alt="heart icon"
          width={24}
          height={24}
          onClick={handleClick}
          className={isLiked ? 'text-red-500 fill-current absolute bottom-5 left-5' : '' }
          />
        </div>
      </section>
    </div>


    // <div className='flex flex-col justify-center max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md md:max-w-3xl m-3'>
    //     <div className='font-satoshi font-semibold text-xl mb-2 text-left '>
    //       {question}
    //     </div>
    //     <div className='mt-6 justify-end items-center relative'>
    //       <Image 
    //         src="/assets/images/heart-icon.svg"
    //         alt="heart icon"
    //         width={24}
    //         height={24}
    //         onClick={handleClick}
    //         className={isLiked ? 'text-red-500 fill-current absolute top-10 left-0' : 'absolute top-0 left-0' }
    //       />
    //     </div>
    // </div>
  )
}

export default QuesCard