import CourseCard from './CourseCard'
import courses from '../data/courses'

function Courses() {
  return (
    <section id="courses" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Popular Courses
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Pick a course and start learning today.
        </p>

        {/* 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              icon={course.icon}
              level={course.level}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
