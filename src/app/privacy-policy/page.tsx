import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import PrivacyPolicy from '@/componets/sections/PrivacyPolicy'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Privacy Policy'/>
    <PrivacyPolicy/>
    <Footer/>
    </>
  )
}

export default page