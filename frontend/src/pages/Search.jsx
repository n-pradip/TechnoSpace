import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitlePrimary from '../components/TitlePrimary'
import CardPrimary from '../components/CardPrimary'
import useSearch from '../hooks/useSearch'
import useBlogpostData from '../hooks/useBlogpostData'

const Search = () => {
    const { data } = useBlogpostData()
    return (
        <div>
            <Header />
            <div className="container mx-auto px-20 ">
                <TitlePrimary title="Search Results :" />
                {(data ?
                    <div>
                        {
                            data?.map((post, index) => {
                                return (
                                    <CardPrimary key={index} id={post.id} slug={post.slug} title={post.title} author={post.author} description={`${post.content.slice(0, 150)}...`} date={post.created_at.slice(0, 10)} time={post.created_at.slice(11, 19)} />
                                )
                            })
                        }
                    </div>
                    :
                    <TitlePrimary className="mt-20" title='No search results with keyword "....." found.' />
                )}
                <div className="error_message text-sm font-bold ">

                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Search