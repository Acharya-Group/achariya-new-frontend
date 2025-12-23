import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import VerifyEmitra from '@/componets/sections/VerifyEmitra'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Verify E-Mitra'/>
    <VerifyEmitra/>
    <Footer/>
    </>
  )
}

export default page