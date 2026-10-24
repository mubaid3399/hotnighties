import React from 'react'
import Hero from '../components/Home/Hero'
import Tittle from '../components/Common/Tittle'
import NewArrivals from '../components/Home/NewArrivals'
import Nighties from '../components/Home/Nighties'
import Bras from '../components/Home/Bras'
import Panties from '../components/Home/Panties'
import CategoryProductGrid from '../components/Home/CategoryProductGrid'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Faqs from '../components/Home/Faqs'
import useSEO from '../utils/useSEO'

const Home = () => {
  useSEO({
    title: 'Buy Nighty Online in Pakistan | Ladies Nightwear & Lingerie',
    description: 'Buy nighties online in Pakistan. Shop bridal nightwear, silk night suits, sexy babydoll sets, bras and panties with 100% discreet packaging and Cash on Delivery.',
    canonical: 'https://hotnighties.pk/',
  });

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

      {/* Sexy Lingerie & Bikinis */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Sexy Lingerie & Bikinis" />
        <CategoryProductGrid 
          filterFn={(p) => p.subcategory === 'Bikini' || p.subcategory === 'Body Stocking' || p.type === 'lingerie'} 
          limit={10} 
        />
      </section>

      {/* Bras Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Featured Bras" />
        <Bras />
      </section>

      {/* Panties Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Comfort Panties" />
        <Panties />
      </section>

      {/* Luxury Bathrobes Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Luxury Bathrobes" />
        <CategoryProductGrid 
          filterFn={(p) => p.subcategory === 'Bathrobe' || p.title?.toLowerCase().includes('bathrobe')} 
          limit={10} 
        />
      </section>

      {/* Bridal Gowns & Robes Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Bridal Silk Gowns" />
        <CategoryProductGrid 
          filterFn={(p) => p.subcategory === 'Gown' || p.title?.toLowerCase().includes('gown')} 
          limit={10} 
        />
      </section>

      {/* Matching Bra & Panty Sets Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Tittle title="Matching Bra & Panty Sets" />
        <CategoryProductGrid 
          filterFn={(p) => p.subcategory === 'Bra Panty Sets' || p.title?.toLowerCase().includes('bra panty')} 
          limit={10} 
        />
      </section>

      {/* Everyday Camisoles Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 mb-10">
        <Tittle title="Everyday Camisoles & Tanks" />
        <CategoryProductGrid 
          filterFn={(p) => p.subcategory === 'Camisole' || p.title?.toLowerCase().includes('camisole')} 
          limit={10} 
        />
      </section>

      <WhyChooseUs />
      
      <Faqs />
    </div>
  )
}

export default Home