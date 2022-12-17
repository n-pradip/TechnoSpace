import React from 'react'
import Avatar from '../images/user_avatar.jpg'
import ButtonPrimary from './ButtonPrimary'


const AuthorInfo = () => {
  return (
    <div>
        <div className="author_profile_container col-auto">
            <div className="author_info my-3">
              <figure className="avatar_container py-2">
                <img src={Avatar} alt="avatar" className="rounded-full" width={50} />
              </figure>
              <div className="user_details mt-2">
                <div className="name font-semibold text-md">
                  Users name
                </div>
                <div className="user_details text-grey-500 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, perferendis inventore nihil deserunt enim eligendi iusto unde voluptates dolores! Neque, quasi maiores? Molestias voluptate dolorum veniam ab. Cumque sapiente inventore quisquam, minima perspiciatis esse alias eos in error fugit sint sit, distinctio itaque architecto obcaecati.
                </div>
              </div>
              <div className='my-3'>
              <ButtonPrimary text="Follow" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default AuthorInfo