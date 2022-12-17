import React from 'react'
import Header from '../components/Header'
import CardPrimary from '../components/CardPrimary'
import TitlePrimary from '../components/TitlePrimary'
import Footer from '../components/Footer'
import useBlogpostsData from '../hooks/useBlogpostsData'
import HeroSection from '../components/HeroSection'

const Homepage = () => {
  const { data } = useBlogpostsData()
  console.log(111, data)
  // data.map((post)=>{console.log(post.title)})

  return (
    <div>
      <Header />
      <div className="homepage_hero_container ">
        <HeroSection />

      </div>
      <div className='container mx-auto px-20 my-[150px] sm:my-[120px] lg:my-[100px]'>
        <TitlePrimary title="Recent posts" />
        {
          data?.map((post,index) => {
            return (
              <CardPrimary key={index} id={post.id} slug={post.slug} title={post.title} author={post.author} description={`${post.content.slice(0,150)}...`} date={post.created_at.slice(0, 10)} time={post.created_at.slice(11, 19)}/>
              // <CardPrimary key={index} title={1} author={11} description={1} date={1} time={1} url={1} />

            )
          })
        }
      </div>
      <Footer />
    </div>

  )
}

export default Homepage