import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import RkclNetwork from '@/componets/sections/RkclNetwork'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='RKCL Network'/>
    <RkclNetwork/>
    <Footer/>
    </>
  )
}

export default page