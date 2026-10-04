import Badge from './Badge'
import Button from './Button'

function CourseCard({ title, description, price, icon, level }) {
  return (
    <article className="relative rounded-xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* badge in the top right corner */}
      <div className="absolute right-3 top-3">
        <Badge text={level} type={level === 'Beginner' ? 'success' : 'info'} />
      </div>

      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600">{price}</span>
        <Button>Enroll</Button>
      </div>
    </article>
  )
}

export default CourseCard
