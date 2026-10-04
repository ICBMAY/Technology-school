import Button from './Button'
import Badge from './Badge'
import plans from '../data/plans'

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Choose Your Plan
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Simple pricing. Enroll today and start building.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border p-8 shadow-sm ${
                plan.highlight ? 'border-blue-600 shadow-lg' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                {plan.highlight && <Badge text="Most popular" type="success" />}
              </div>

              <p className="mt-4 text-4xl font-extrabold text-blue-600">{plan.price}</p>

              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <div className="mt-8">
                <Button fullWidth variant={plan.highlight ? 'primary' : 'secondary'}>
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
