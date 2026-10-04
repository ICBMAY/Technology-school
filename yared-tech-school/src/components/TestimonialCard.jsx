function TestimonialCard({ icon, name, role, text }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center">
        <span className="text-4xl">{icon}</span>
        <div className="ml-3">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600">"{text}"</p>
      <div className="mt-4 text-yellow-400">★★★★★</div>
    </div>
  )
}

export default TestimonialCard
