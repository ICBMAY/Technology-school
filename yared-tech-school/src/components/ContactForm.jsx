import { useState } from 'react'
import Input from './Input'
import Button from './Button'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form data:', formData)
    setSent(true)
    setFormData({ name: '', email: '', course: '', message: '' })
  }

  return (
    <section id="contact" className="bg-blue-50 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Have a question? Send us a message.
        </p>

        {/* success alert */}
        {sent && (
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
            Thank you! Your message was sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          <div>
            <label htmlFor="course" className="mb-1 block text-sm font-medium text-gray-900">
              Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="">Select a course</option>
              <option value="web">Web Development Basics</option>
              <option value="react">React for Beginners</option>
              <option value="tailwind">Tailwind CSS Mastery</option>
              <option value="fullstack">Full Stack Development</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ></textarea>
          </div>

          <Button type="submit" fullWidth>Send Message</Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
