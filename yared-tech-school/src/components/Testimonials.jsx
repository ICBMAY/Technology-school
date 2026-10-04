import TestimonialCard from './TestimonialCard'
import testimonials from '../data/testimonials'

function Testimonials() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Student Success Stories
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              icon={t.icon}
              name={t.name}
              role={t.role}
              text={t.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
