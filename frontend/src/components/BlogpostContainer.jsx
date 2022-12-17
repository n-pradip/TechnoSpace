import React from 'react'
import { CiBookmark } from "react-icons/ci";
// import CommentSection from './CommentSection';
import Avatar from '../images/user_avatar.jpg'

const BlogpostContainer = (props) => {
    return (
        <div>
            <h1 className=' font-bold text-4xl'>{props.title}</h1>
            <span className='blogpost_details flex items-center color-black font-md text-md justify-between py-3'>
                <div className="details text-xs font-base text-gray-700 px-1">
                    <div className="flex flex-row">
                        <div className="author_image_container flex items-center">
                            <img src={Avatar} alt="" className="h-10 w-10 object-cover rounded"/>
                        </div>
                        <div className="flex flex-col pl-3">
                            <div className="author_name">
                                {props.author}
                            </div>
                            <div className="date mt-1">
                                {props.date} . {props.time}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bookmark_container">
                    <CiBookmark />
                </div>

            </span>
            <section className="content">
                 {props.content}
            </section>

            {/* <section className="comment_section py-5">
                <CommentSection />
            </section> */}
        </div>
    )
}

export default BlogpostContainer