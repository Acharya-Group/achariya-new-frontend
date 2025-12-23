import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import PaymentNow from '@/componets/sections/PaymentNow'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Pay Now'/>
    <PaymentNow/>
    <Footer/>
    </>
  )
}

export default page