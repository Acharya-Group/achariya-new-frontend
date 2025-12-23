import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import SchoolEasy from '@/componets/sections/SchoolEasy'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='School Easy'/>
    <SchoolEasy/>
    <Footer/>
    </>
  )
}

export default page