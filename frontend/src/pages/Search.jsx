import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TitlePrimary from '../components/TitlePrimary'
import CardPrimary from '../components/CardPrimary'
import { useParams } from 'react-router-dom'
import { api } from '../api/rootApi'
import { useQuery } from 'react-query'


const Search = () => {
    const { text } = useParams()

    const searchBlogposts = async (text) => {
        const response = await api.get(`allposts/?search=${text}`)
        return response.data;
    }
    const { data, isLoading } = useQuery(['blogpost_search', text], () => searchBlogposts(text))

    return (
        <div>
            <Header />
            <div className="container mx-auto px-20 ">
                <TitlePrimary title="Search Results :" />
                {
                    isLoading ?
                        <p>Loading...</p> :
                        data.length > 0 ?
                            data&&data.map((post, index) => {
                                        return (
                                            <CardPrimary key={index} id={post.id} slug={post.slug} title={post.title} author={post.author} description={`${post.content.slice(0, 150)}...`} date={post.created_at.slice(0, 10)} time={post.created_at.slice(11, 19)} />)
                                    })
                            :
                            <TitlePrimary className="mt-20" title={`No search results with keyword "${text}" found.`} />
                }
            </div>
            <Footer />
        </div >
    )
}

export default Search