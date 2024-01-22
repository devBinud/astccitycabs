import React from 'react'
import Testimonial from '../testimonials/Testimonial'
import About from '../about/About'
import CTA from '../cta/CTA'
import Hero from "../../components/hero/Hero"
import WhyUs from '../whyus/WhyUs'


const Home = () => {
  return (
    <>
     <Hero/>
     <About/>
     <WhyUs/>
     <Testimonial/>
     <CTA/>
    </>
  )
}

export default Home