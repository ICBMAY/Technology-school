import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Benefits />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
