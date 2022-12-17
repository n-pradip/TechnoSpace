import React from 'react'
import TitlePrimary from './TitlePrimary'

const HeroSectionSecondary = (props) => {
    return (
        <>
            <div className="hero_container mb-[100px]">
                <div className='w-full h-20 xl:h-40 bg-[#07174D]'>

                </div>

                <div className="hero_floatbox_container flex items-center justify-center relative">
                    <div className="container mx-auto px-20 absolute">
                        <div className="rounded border border-grey-400 w-full h-[50px] sm:h-20 shadow-md bg-white flex items-center justify-center">
                            <TitlePrimary title={props.title} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSectionSecondary