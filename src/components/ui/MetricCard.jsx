function MetricCard({
  icon,
  iconBg,
  name,
  symbol,
  price,
  change,
  positive = true,
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">

      {/* Top section */}
      <div className="flex items-start justify-between">

        {/* Coin icon */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-white ${iconBg}`}
        >
          {icon}
        </div>

        {/* Percentage */}
        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
            positive
              ? 'bg-green-50 text-green-500'
              : 'bg-orange-50 text-orange-500'
          }`}
        >
          <span>
            {positive ? '▲' : '▼'}
          </span>

          <span>
            {change}
          </span>
        </div>

      </div>

      {/* Price */}
      <div className="mt-5">

        <h2 className="text-2xl font-bold tracking-tight text-[#252525]">
          {price}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {name} - {symbol}
        </p>

      </div>

    </div>
  )
}

export default MetricCard