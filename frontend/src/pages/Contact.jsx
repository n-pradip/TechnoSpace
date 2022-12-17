import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSectionSecondary from '../components/HeroSectionSecondary'
import ButtonPrimary from '../components/ButtonPrimary'

const Contact = () => {
    return (
        <>
            <Header />
            <HeroSectionSecondary title="Contact" />
            <div classNameName="container mx-auto">
                <section className="text-gray-600 body-font relative">
                    <div className="absolute inset-0 bg-gray-300 shadow">
                        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5943.053309424359!2d85.37754452872464!3d27.662876370657038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1668707263879!5m2!1sen!2snp"></iframe>
                    </div>
                    <div className="container px-5 py-24 mx-auto flex">
                        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                            <p className="leading-relaxed mb-5 text-gray-600"></p>
                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Briefly describe your concern</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <ButtonPrimary text="Submit"/>
                            <p className="text-xs text-gray-500 mt-3">Our team will respond as soon as possible.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact