import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardSecondary from '../components/CardSecondary'
import HeroSectionSecondary from '../components/HeroSectionSecondary'

const Bookmarks = () => {
    return (
        <div>
            <Header />
            <HeroSectionSecondary title="Bookmarks" />
            <div className="container mx-auto px-20 ">
                <CardSecondary />
            </div>
            <Footer />
        </div>
    )
}

export default Bookmarks