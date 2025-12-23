import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import AchariyaDrone from '@/componets/sections/AchariyaDrone'
import CommonHero from '@/componets/sections/CommonHero'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
<CommonHero  title="Achariya Drones" />  
<AchariyaDrone/> 
<Footer/>
    </>
  )
}

export default page