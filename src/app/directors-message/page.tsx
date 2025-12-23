import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import DirectorMessage from '@/componets/sections/DirectorMessage'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero  title="Director's Message" />
    <DirectorMessage/>
    <Footer/>
    </>
  )
}

export default page