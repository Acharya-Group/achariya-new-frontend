import Footer from '@/componets/layout/Footer'
import Header from '@/componets/layout/Header'
import CommonHero from '@/componets/sections/CommonHero'
import ComplaintAndFeedback from '@/componets/sections/ComplaintAndFeedback'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <CommonHero title="We Want Your Feedback" />
    <ComplaintAndFeedback/>
    <Footer/>
    </>
  )
}

export default page