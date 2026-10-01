import React from 'react'
import Hero from '../components/Home/Hero'
import Tittle from '../components/Common/Tittle'
import NewArrivals from '../components/Home/NewArrivals'
import Nighties from '../components/Home/Nighties'
import Bras from '../components/Home/Bras'
import Panties from '../components/Home/Panties'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Faqs from '../components/Home/Faqs'

const Home = () => {
  return (
    <div>
      <Hero/>
      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <Tittle title="New Arrival" />
        <NewArrivals/>
      </section>
      
      {/* Nighties Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Trending Nighties" />
        <Nighties />
      </section>

      {/* Bras Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Featured Bras" />
        <Bras />
      </section>

      {/* Panties Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mb-10">
        <Tittle title="Comfort Panties" />
        <Panties />
      </section>

      <WhyChooseUs />
      
      <Faqs />
    </div>
  )
}

export default Home