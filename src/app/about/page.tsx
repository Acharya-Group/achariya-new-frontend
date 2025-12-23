import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import AboutAchariya from '@/componets/sections/AboutAchariya'
import CommonHero from '@/componets/sections/CommonHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
<CommonHero  title="About Us" />  
<AboutAchariya/> 
<Footer/>
    </>
  )
}

export default page