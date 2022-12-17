import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogpostImagePrimary from '../images/water-lilies-white-pond-leaves-wallpaper.jpg'
import UserAvatar from '../images/user_avatar.jpg'
import { BsFillBookmarkFill, BsFillBookmarkCheckFill } from "react-icons/bs";


// Card porps take id, title, author, content, date, time as parameters
const CardPrimary = (props) => {
    const [bookmarkValue, setBookmarkValue] = useState(false);
    return (
        <div className="my-5">
            <div className="" style={{ 'backgroundColor': 'rgb(245 245 245)' }}>
                <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">

                    <Link to={`blogpost/${props.slug}`}>
                        <div className="overflow-hidden">
                            <img className="h-52 w-full object-cover" src={BlogpostImagePrimary} alt="blogpost_image" />
                        </div>
                    </Link>

                    <div className="sm:col-span-2 py-3 px-3">
                        <div>
                            <span className='font-bold text-md text-blue-800'>{props.category}</span>
                            <Link to={`blogpost/${props.slug}`} className="group">
                                <h4 className="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary mt-2">{props.title}</h4>
                            </Link>

                            <p className="mt-1 text-sm font-normal text-skin-base leading-5">
                                {props.description}
                            </p>

                            <div className="mt-3 flex items-center font-sans">

                                <div className="shrink-0">
                                    <Link to={"/author"}>
                                        <span className="sr-only">{props.author}</span>
                                        <img className="h-10 w-10 rounded-full" src={UserAvatar} alt="blogpost_image" />
                                    </Link>
                                </div>

                                <div className="ml-3">
                                    <p className="text-sm font-medium text-skin-inverted">
                                        <Link to="/author">
                                            {(props.author == null ? "Technospace" : props.author)}
                                        </Link>
                                    </p>

                                    <div className="flex space-x-1 text-sm text-skin-muted">
                                        <div >{props.date}</div>
                                        <div >{props.time}</div>

                                        <span aria-hidden="true">·</span>

                                        <span>3 min read time</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-between space-x-3 mt-5 pr-5">

                            <div className="flex items-center space-x-2">
                                <span className="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input border-solid border-grey-400">
                                    {props.category}
                                </span>
                            </div>
                            <div className="bookmark_holder btext-[#07174D] hover:opacity-90 flex flex-row cursor-pointer" onClick={() => setBookmarkValue(!bookmarkValue)}>
                                {bookmarkValue ?
                                    <div className="un_bookmarked text-yellow-500">
                                        <BsFillBookmarkCheckFill />
                                    </div> :
                                    <div className="bookmarked ">
                                        <BsFillBookmarkFill />
                                    </div>
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardPrimary