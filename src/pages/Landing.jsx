import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Ticker from "../components/Ticker"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Comparison from "../components/Comparison"
import Quote from "../components/Quote"
import Products from "../components/Products"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <HowItWorks />
      <Comparison />
      <Quote />
      <Products />
      <CTA />
      <Footer />
    </>
  )
}
