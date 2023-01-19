import React, { useContext } from 'react'
import Header from '../components/Header'
import CardPrimary from '../components/CardPrimary'
import TitlePrimary from '../components/TitlePrimary'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { BlogpostsContext } from '../context/BlogpostProvider'

const Homepage = () => {
  const { data, isLoading } = useContext(BlogpostsContext)
  console.log('Homepage ma context_api bata aayeko data ', data)

  return (
    <div>
      <Header />
      <div className="homepage_hero_container ">
        <HeroSection />

      </div>
      <div className='container mx-auto px-20 my-[150px] sm:my-[120px] lg:my-[100px]'>
        <TitlePrimary title="Popular posts" />
        {
          isLoading ?
            <p>Loading ...</p> :
            data?.map((post, index) => {
              return (
                <CardPrimary key={index} id={post.id} title={post.title} author={post.author} description={`${post.content.slice(0, 150)}...`} date={post.created_at.slice(0, 10)} time={post.created_at.slice(11, 19)} />
              )
            })
        }
      </div>
      <Footer />
    </div>

  )
}

export default Homepage