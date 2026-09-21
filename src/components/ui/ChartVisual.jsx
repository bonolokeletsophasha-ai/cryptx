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
          <text x="0" y="29" className="fill-gray-400 text-[9px]">
            $800
          </text>

          <text x="0" y="71" className="fill-gray-400 text-[9px]">
            $600
          </text>

          <text x="0" y="113" className="fill-gray-400 text-[9px]">
            $400
          </text>

          <text x="0" y="155" className="fill-gray-400 text-[9px]">
            $200
          </text>

          <text x="4" y="194" className="fill-gray-400 text-[9px]">
            $0
          </text>

          {/* Highlighted period */}
          <rect
            x="174"
            y="107"
            width="22"
            height="83"
            rx="3"
            fill="#ddd9ff"
          />

          {/* BTC price line */}
          <path
            d="
              M 40 82
              C 55 80, 65 60, 80 52
              C 95 43, 108 48, 122 60
              C 137 73, 148 88, 163 82
              C 178 76, 187 68, 200 69
              C 214 70, 225 58, 239 68
              C 253 78, 258 101, 274 106
              C 290 111, 301 103, 311 72
              C 322 40, 340 42, 355 39
              C 370 36, 385 38, 400 37
            "
            fill="none"
            stroke="#5546f6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Highlighted point */}
          <circle
            cx="187"
            cy="76"
            r="4"
            fill="#5546f6"
            stroke="white"
            strokeWidth="2"
          />

          {/* Tooltip */}
          <rect
            x="158"
            y="42"
            width="65"
            height="25"
            rx="6"
            fill="#5546f6"
          />

          <text
            x="190"
            y="58"
            textAnchor="middle"
            className="fill-white text-[9px] font-semibold"
          >
            $25,240
          </text>

          {/* X-axis labels */}
          <text x="50" y="215" className="fill-gray-400 text-[9px]">
            Jan
          </text>

          <text x="105" y="215" className="fill-gray-400 text-[9px]">
            Mar
          </text>

          <text x="181" y="215" className="fill-gray-400 text-[9px]">
            May
          </text>

          <text x="239" y="215" className="fill-gray-400 text-[9px]">
            Jul
          </text>

          <text x="300" y="215" className="fill-gray-400 text-[9px]">
            Sep
          </text>

          <text x="365" y="215" className="fill-gray-400 text-[9px]">
            Nov
          </text>

        </svg>
      </div>
    </div>
  )
}

export default ChartVisual