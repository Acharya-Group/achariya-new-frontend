import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CheckKisockId from '@/componets/sections/CheckKisockId'
import CommonHero from '@/componets/sections/CommonHero'

import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title='Verify Kiosks Identity Card'/>
    <CheckKisockId/>
    <Footer/>
    </>
  )
}

export default page