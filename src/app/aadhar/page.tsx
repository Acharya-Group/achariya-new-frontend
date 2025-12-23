import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import AadharSection from '@/componets/sections/AadharSection'
import CommonHero from '@/componets/sections/CommonHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Aadhaar'/>
    <AadharSection/>
    <Footer/>
    </>
  )
}

export default page