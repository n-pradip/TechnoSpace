import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardSecondary from '../components/CardSecondary';
import AuthorInfo from '../components/AuthorInfo';
import TitleSecondary from '../components/TitleSecondary';
import BlogpostContainer from '../components/BlogpostContainer';
import { useParams } from 'react-router-dom';
import useBlogpostsData from '../hooks/useBlogpostsData';

const Blogpost = () => {
  const { slug } = useParams();
  const { data, isLoading } = useBlogpostsData()


  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          <div className="main_content_container col-span-3 py-5 px-5 xl:px-10">
            <BlogpostContainer />
          </div>

          {
            isLoading ? <p>loading...</p> :
              data.title
          }
          <div className="right_sidebar_container p-5">
            <AuthorInfo />
            <TitleSecondary text={data?.title} />
            <CardSecondary />
            <CardSecondary />

            <TitleSecondary text="More from the author" />
            <CardSecondary />
            <CardSecondary />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogpost