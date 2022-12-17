import React from 'react'
import { CiBookmark } from "react-icons/ci";
import CommentSection from './CommentSection';
import Avatar from '../images/user_avatar.jpg'

const BlogpostContainer = (props) => {
    return (
        <div>
            <h1 className=' font-bold text-4xl'>Title</h1>
            <span className='blogpost_details flex items-center color-black font-md text-md justify-between py-3'>
                <div className="details text-xs font-base text-gray-700 px-1">
                    <div className="flex flex-row">
                        <div className="author_image_container flex items-center">
                            <img src={Avatar} alt="" className="h-10 w-10 object-cover rounded"/>
                        </div>
                        <div className="flex flex-col pl-3">
                            <div className="author_name">
                                Authors name
                            </div>
                            <div className="date mt-1">
                                2022.18.15 . 08:23
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bookmark_container">
                    <CiBookmark />
                </div>

            </span>
            <section className="content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste doloribus officiis harum obcaecati ad cumque assumenda? Deleniti officia dolores eligendi ut! Ipsum reiciendis quae labore, illo ab sint fuga deserunt ullam corrupti officia impedit libero, recusandae veritatis laudantium quod doloribus tempora. Saepe exercitationem numquam unde distinctio ad nesciunt expedita commodi animi aperiam sequi temporibus blanditiis libero aut omnis illo, veritatis dignissimos explicabo officiis itaque consequatur vero laborum. Cupiditate illo, molestiae porro laboriosam hic sed quo consectetur, dolore ullam recusandae eveniet quae, tenetur fuga quod! Odit recusandae minima nam labore corporis ut suscipit, exercitationem in hic quisquam optio est provident reiciendis, similique eius obcaecati porro sit praesentium doloribus iure repudiandae nihil. Quae numquam quasi id! Ad, maiores itaque obcaecati esse excepturi velit non quisquam ipsam distinctio facere at voluptas recusandae corporis. Aperiam nemo asperiores eaque illum quidem molestiae error. Harum corporis ratione quaerat cumque ad fugit veritatis voluptatem mollitia ab excepturi. Quis, amet eaque nihil tenetur consequuntur facere tempora rem voluptates exercitationem repellendus eius doloribus, atque quae deserunt ratione quod inventore tempore? Nobis distinctio animi veniam similique ratione inventore ea alias. Ullam mollitia tempora, officia dolorum vero magnam assumenda nesciunt accusamus cupiditate, ab facere sapiente. Perferendis quos ratione aliquid id! Voluptatem exercitationem ipsa nisi. Nihil quos nulla laudantium recusandae amet maiores, quis vel voluptas, aspernatur a, perspiciatis ducimus! Eum quia tempore, magni quod quam, consequatur illum possimus aliquam dolorem numquam saepe modi nostrum aut alias adipisci ipsam excepturi esse quaerat ratione et hic qui tempora! Quae culpa aperiam fugiat minima est provident molestiae, nulla, minus modi iusto obcaecati accusamus ab illum molestias enim corrupti ut sequi asperiores rerum harum? Ex inventore facilis, iusto velit harum facere, nemo excepturi molestias, iure eos sint molestiae soluta aliquid illum ullam aperiam officia autem ipsam necessitatibus eius ducimus ipsa reprehenderit in. Accusantium perspiciatis expedita aliquid commodi, nostrum nisi dolore dolorem quibusdam sit esse consectetur delectus libero rem ad fugiat enim deserunt nobis qui laborum omnis molestiae vitae dignissimos blanditiis! Officiis iure consequatur deleniti mollitia quidem neque quia, alias aperiam dolor nemo, accusantium vel laboriosam cupiditate corporis. Numquam optio incidunt minima maiores illo delectus, consequatur in veritatis quam voluptate dicta repellendus. Facilis porro a autem voluptatibus, soluta magni aperiam maiores beatae minima, ducimus veniam natus esse voluptatum doloremque ex explicabo, minus reprehenderit harum eius nobis. Ad magni omnis inventore, iusto accusamus consequatur repellat quia nulla. Quia nemo, placeat, laboriosam optio ab suscipit sint velit voluptates ea sequi nostrum earum vel totam iure vero accusantium ipsum! Provident eligendi neque dolorem officia laboriosam corrupti temporibus numquam soluta sed error, qui quaerat voluptas explicabo totam obcaecati, cumque dignissimos quibusdam aperiam rem eaque! Omnis dolorum odit tenetur neque qui saepe commodi cupiditate, magnam nam explicabo sequi error quibusdam fuga, vitae autem, quas nulla et aut facere inventore similique quod fugiat voluptatum modi! Adipisci, aspernatur iusto. Quae velit dolor at. Quas voluptas incidunt dolore dignissimos, numquam labore perferendis deleniti aliquid nisi. Possimus nemo molestiae unde consectetur? Numquam quia, dolorum eaque corporis placeat labore laboriosam ipsam voluptates officiis iure enim necessitatibus soluta?
            </section>

            <section className="comment_section py-5">
                <CommentSection />


            </section>
        </div>
    )
}

export default BlogpostContainer