import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import ValidateLetter from '@/componets/sections/ValidateLetter'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Validate Reference Letters'/>
    <ValidateLetter/>
    <Footer/>
    </>
  )
}

export default page