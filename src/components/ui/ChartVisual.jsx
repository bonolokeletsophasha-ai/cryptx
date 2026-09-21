import chartStaticData from '../../data/chartStaticData'

function ChartVisual() {
  return (
    <div className="h-full min-h-[320px] rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Chart Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#252525]">
            BTC Prices
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Bitcoin price overview
          </p>
        </div>

        <span className="rounded-lg bg-[#5546f6]/10 px-3 py-1 text-xs font-medium text-[#5546f6]">
          BTC
        </span>
      </div>

      {/* Chart */}
      <div className="mt-5 w-full overflow-hidden">

        <svg
          viewBox="0 0 420 230"
          className="h-[230px] w-full"
          preserveAspectRatio="none"
        >

          {/* Horizontal guide lines */}
          <line
            x1="40"
            y1="25"
            x2="400"
            y2="25"
            stroke="#f1f1f5"
            strokeWidth="1"
          />

          <line
            x1="40"
            y1="67"
            x2="400"
            y2="67"
            stroke="#f1f1f5"
            strokeWidth="1"
          />

          <line
            x1="40"
            y1="109"
            x2="400"
            y2="109"
            stroke="#f1f1f5"
            strokeWidth="1"
          />

          <line
            x1="40"
            y1="151"
            x2="400"
            y2="151"
            stroke="#f1f1f5"
            strokeWidth="1"
          />

          <line
            x1="40"
            y1="190"
            x2="400"
            y2="190"
            stroke="#e5e7eb"
            strokeWidth="1"
          />

          {/* Y-axis labels */}
          {chartStaticData.yAxis.map((label, index) => (
            <text
              key={label}
              x={index === 4 ? '4' : '0'}
              y={29 + index * 42}
              className="fill-gray-400 text-[9px]"
            >
              {label}
            </text>
          ))}

          {/* Highlighted period */}
          <rect
            x={chartStaticData.highlightBar.x}
            y={chartStaticData.highlightBar.y}
            width={chartStaticData.highlightBar.width}
            height={chartStaticData.highlightBar.height}
            rx="3"
            fill="#ddd9ff"
          />

          {/* BTC price line */}
          <path
            d={chartStaticData.path}
            fill="none"
            stroke="#5546f6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Highlighted point */}
          <circle
            cx={chartStaticData.highlightedPoint.x}
            cy={chartStaticData.highlightedPoint.y}
            r="4"
            fill="#5546f6"
            stroke="white"
            strokeWidth="2"
          />

          {/* Tooltip */}
          <rect
            x={chartStaticData.tooltip.x}
            y={chartStaticData.tooltip.y}
            width={chartStaticData.tooltip.width}
            height={chartStaticData.tooltip.height}
            rx="6"
            fill="#5546f6"
          />

          <text
            x="190"
            y="58"
            textAnchor="middle"
            className="fill-white text-[9px] font-semibold"
          >
            {chartStaticData.tooltip.value}
          </text>

          {/* X-axis labels */}
          {chartStaticData.months.map((month, index) => {
            const positions = [50, 105, 181, 239, 300, 365]

            return (
              <text
                key={month}
                x={positions[index]}
                y="215"
                className="fill-gray-400 text-[9px]"
              >
                {month}
              </text>
            )
          })}

        </svg>
      </div>
    </div>
  )
}

export default ChartVisual