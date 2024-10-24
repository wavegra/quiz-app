export function Progress({ value = 0, className, ...props }) {
    return (
      <div className={`w-full h-2 bg-gray-200 rounded-full ${className}`} {...props}>
        <div
          className="h-full bg-pink-400 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }