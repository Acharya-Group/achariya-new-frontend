import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Shopneo from '@/componets/sections/Shopneo'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>
    <Header/>
    <CommonHero  title="Shopneo" />
    <Shopneo/>
    <Footer/>
    </div>
  )
}

export default page