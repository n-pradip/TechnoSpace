import React from 'react'
import BlogpostCardSecondaryImage from '../images/water-lilies-white-pond-leaves-wallpaper.jpg'

const CardSecondary = (props) => {
    return (
        <div>
            <div className="card_container grid grid-cols-4 rounded border border-gray-300 my-3">
                <img src={BlogpostCardSecondaryImage} alt="card_image" className="h-30 w-full col-span-1 hidden sm:block lg:hidden " />
                <div className="text_container p-2 col-span-3">
                    <a href="#" className='text-sm xl:text-base font-semibold '>{props.title}</a>
                    <p className="mt-3 text-sm text-gray-600 block lg:hidden">
                        {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardSecondary