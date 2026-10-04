function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Yared Tech School</h3>
            <p className="text-sm text-slate-400">
              Building the next generation of web developers.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#courses" className="transition hover:text-white">Courses</a></li>
              <li><a href="#pricing" className="transition hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Addis Ababa, Ethiopia</li>
              <li>info@yaredtech.example</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p>&copy; 2026 Yared Technology School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
