import React from 'react'
import HeroSectionImage from '../images/HeroSectionImage.jpg'
import ButtonPrimary from './ButtonPrimary'

const HeroSection = () => {
    return (
        <>
            <div className="hero_container">
                <figure className='overflow-hidden'>
                    <img src={HeroSectionImage} alt="" className='w-full h-80 object-cover' />
                </figure>
                <div className="hero_floatbox_container flex items-center justify-center relative">
                    <div className="container mx-auto px-10 lg:px-20 absolute">
                        <div className=" px-5 rounded border border-grey-400 w-full h-fit shadow-md bg-white sm:p-0">
                            <p className="pt-5 text-lg font-bold text-center text-[#07174D]">
                                Subscribe to Technospace
                            </p>
                            <p className="text-md text-gray-500 text-center">
                                Subscribe Technospace Blogs to get latest blogpost of your interest and from your favourite author.
                            </p>
                            <div className="justify-center mx-auto mt-4 max-w-xl">
                                <form action="#" className="sm:flex sm:gap-4 p-5">
                                    <div className="sm:flex-1">

                                        <input type="email" placeholder="Email address" className="w-full rounded outline-none border border-gray-300 bg-white text-sm py-2 px-3 text-gray-700 shadow-sm transition"
                                        />
                                    </div>
                                    <div className="subscribe_btn flex items-center my-2 sm:my-0 ">
                                        <ButtonPrimary text="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection