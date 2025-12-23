import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import YogaCertificate from '@/componets/sections/YogaCertificate'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero  title="Yoga certification" />
    <YogaCertificate/>
    <Footer/>
    </>
  )
}

export default page