import benefits from '../data/benefits'

function Benefits() {
  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose Yared Tech?
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.id} className="text-center">
              <div className="mb-4 inline-block rounded-lg bg-blue-100 px-4 py-3">
                <span className="text-2xl text-blue-600">✓</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
