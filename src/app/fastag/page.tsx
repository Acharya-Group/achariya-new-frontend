import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import Fastag from '@/componets/sections/Fastag'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title="Fastag" />
    <Fastag/>
    <Footer/>
    </>
  )
}

export default page