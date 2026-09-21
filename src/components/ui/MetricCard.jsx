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
    <div className="rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition duration-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]">

      /* Top section */
      <div className="flex items-start justify-between"> 

        /* Coin icon */
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg text-white ${iconBg}`}
        >
          {icon}
        </div>

        /* Percentage */
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            positive ? 'text-green-500' : 'text-orange-500'
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

      /* Price */
      <div className="mt-4">
        <h2 className="text-xl font-bold tracking-tight text-[#252525]">
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