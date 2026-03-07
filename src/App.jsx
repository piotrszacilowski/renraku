import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Comparison from "./components/Comparison"
import Quote from "./components/Quote"
import Products from "./components/Products"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen font-mono bg-bg text-fg">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <Quote />
      <Products />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
