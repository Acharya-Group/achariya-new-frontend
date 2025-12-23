"use client"
import Header from "@/componets/layout/Header";
import Hero from "@/componets/sections/Hero";
import VerifyApply from "@/componets/sections/VerifyApply";
import About from "@/componets/sections/About";
import Projects from "@/componets/sections/Projects";
import Collaborations from "@/componets/sections/Collaborations";
import Services from "@/componets/sections/Services";
import Testimonials from "@/componets/sections/Testimonials";
import Faqs from "@/componets/sections/Faqs";
import Blog from "@/componets/sections/Blog";
import Contact from "@/componets/sections/Contact";
import Footer from "@/componets/layout/Footer";
import Popup from "@/componets/sections/Popup";
import { Analytics } from "@vercel/analytics/next"
export default function Home() {

  return (
    <>
    <Analytics/>
      <Header />
      <Hero />
      <VerifyApply />
      <About />
      <Projects />
      <Collaborations />
      <Services />
      <Testimonials />
      <Faqs />
      <Blog />
      <Contact />
      <Footer />
      <Popup />
    </>
  );
}
