// Reusable button. variant can be "primary", "secondary" or "pink"
function Button({ children, variant = 'primary', type = 'button', fullWidth = false, onClick }) {
  let styles = ''

  if (variant === 'primary') {
    styles = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400'
  } else if (variant === 'pink') {
    styles = 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-400'
  } else {
    styles = 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
  }

  const width = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg px-6 py-3 font-semibold transition focus:outline-none focus:ring-2 ${styles} ${width}`}
    >
      {children}
    </button>
  )
}

export default Button
