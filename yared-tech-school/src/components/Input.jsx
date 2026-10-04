// Reusable form input with a label
function Input({ label, name, type = 'text', placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  )
}

export default Input
