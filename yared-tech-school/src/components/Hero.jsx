import Button from './Button'

function Hero() {
  return (
    <section className="bg-slate-900 px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Build Skills. Build Your Future.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Learn practical technology skills through real projects. Start with HTML,
          CSS and JavaScript, then move on to React and Tailwind.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="#courses">
            <Button variant="pink">Explore Courses</Button>
          </a>
          <a href="#contact">
            <Button variant="secondary">Talk to Us</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
