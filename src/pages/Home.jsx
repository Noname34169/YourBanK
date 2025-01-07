import React from 'react'
import Hero from '../components/Hero/Hero'
import TabsWrap from '../components/TabsWrap/TabsWrap'
import Category from '../components/Category/Category'
import FinanceJourney from '../components/FinanceJourney/FinanceJourney'
import SwiperWrap from '../components/SwiperWrap/SwiperWrap'

const Home = () => {
  return (
    <>
    <Hero />
    <TabsWrap />
    <Category />
    <SwiperWrap />
    <FinanceJourney />
    </>
  )
}

export default Home