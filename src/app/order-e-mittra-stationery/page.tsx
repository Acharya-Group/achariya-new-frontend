import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import OrderStationery from '@/componets/sections/OrderStationery'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Order e-Mitra Stationery'/>
    <OrderStationery/>
    <Footer/>
    </>
  )
}

export default page