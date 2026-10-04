// Small label. type can be "success", "info" or "gray"
function Badge({ text, type = 'info' }) {
  let styles = ''

  if (type === 'success') {
    styles = 'bg-green-100 text-green-700'
  } else if (type === 'gray') {
    styles = 'bg-gray-100 text-gray-600'
  } else {
    styles = 'bg-blue-100 text-blue-700'
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles}`}>
      {text}
    </span>
  )
}

export default Badge
