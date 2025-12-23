import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import TermsAndConditions from '@/componets/sections/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Tearms & Conditions'/>
    <TermsAndConditions/>
    <Footer/>
    </>
  )
}

export default page