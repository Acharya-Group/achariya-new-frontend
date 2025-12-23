import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Rajpay from '@/componets/sections/Rajpay'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Rajpay'/>
    <Rajpay/>
    <Footer/>
    </>
  )
}

export default page