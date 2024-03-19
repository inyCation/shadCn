import Features from "./components/Features"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Pricing from "./components/Pricing"
import Quality from "./components/Quality"
import Steps from "./components/Steps"
import Testimonials from "./components/Testimonials"
import Values from "./components/Values"


const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Quality />
      <Steps />
      <Values />
      <Pricing />
      <Testimonials />
    </>
  )
}

export default App