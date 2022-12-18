import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardSecondary from '../components/CardSecondary';
import AuthorInfo from '../components/AuthorInfo';
import TitleSecondary from '../components/TitleSecondary';
import BlogpostContainer from '../components/BlogpostContainer';
import { useParams } from 'react-router-dom';
import useBlogpostData from '../hooks/useBlogpostData';

const Blogpost = () => {
  const { id } = useParams();

  const { data, isLoading } = useBlogpostData(id)

  return (
    <div>
      <Header />
      {
        isLoading ?
          <p>Loading ...</p> :
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
              <div className="main_content_container col-span-3 py-5 px-5 xl:px-10">
                {data && <BlogpostContainer title={data.title} author={data.author} date={data.created_at.slice(0, 10)} time={data.created_at.slice(11, 19)} content={data.content} />}
              </div>

              <div className="right_sidebar_container p-5">
                <AuthorInfo />
                <TitleSecondary />
                <CardSecondary />
                <CardSecondary />

                <TitleSecondary text="More from the author" />
                <CardSecondary />
                <CardSecondary />

              </div>
            </div>
          </div>
      }
      <Footer />
    </div>
  )
}

export default Blogpost