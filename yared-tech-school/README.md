# Yared Technology School Website

Responsive course website built with **React + Vite + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev
```
Open the link shown in the terminal (usually http://localhost:5173).

Build for production: `npm run build`

## Folder structure

```
yared-tech-school/
├── public/              static files
├── src/
│   ├── assets/          images
│   ├── components/      all React components
│   ├── data/            course, benefit, plan and testimonial data
│   ├── App.jsx          puts all sections together
│   ├── main.jsx         React entry point
│   └── index.css        Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Reusable components
Button, Badge, Input, CourseCard, TestimonialCard (plus the section components).

## Main Tailwind classes explained

| Class | Purpose |
|---|---|
| `max-w-6xl mx-auto` | limits content width and centers it |
| `px-4 py-16` | horizontal / vertical padding |
| `flex items-center justify-between` | row layout, vertically centered, items pushed apart |
| `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4` | 1 column on mobile, 2 on tablet, 4 on desktop |
| `gap-6` | space between flex/grid children |
| `hidden md:flex` / `block md:hidden` | show desktop links or mobile menu button |
| `text-4xl sm:text-5xl lg:text-6xl` | font size grows with screen size (mobile-first) |
| `font-bold`, `leading-8` | font weight, line height |
| `bg-slate-900 text-white` | dark background with white text |
| `rounded-xl border shadow-sm` | card look: curved corners, border, soft shadow |
| `hover:bg-blue-700` | color change on hover |
| `focus:ring-2 focus:ring-blue-400` | visible keyboard focus ring |
| `transition hover:-translate-y-1` | smooth lift animation on hover |
| `relative` + `absolute right-3 top-3` | badge in the top-right of a card |
| `sticky top-0 z-50` | navbar stays at top and above other content |
| `space-y-4` | vertical spacing between form fields |
