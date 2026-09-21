function ChartVisual() {
  return (
    <div className="h-full rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Chart heading */}
      <h2 className="text-lg font-semibold text-[#252525]">
        BTC Prices
      </h2>

      {/* Chart */}
      <div className="mt-4">

        <svg
          viewBox="0 0 420 230"
          className="h-[230px] w-full"
          preserveAspectRatio="none"
        >

          {/* Y-axis labels */}
          <text x="0" y="25" className="fill-gray-400 text-[9px]">
            $800
          </text>

          <text x="0" y="67" className="fill-gray-400 text-[9px]">
            $600
          </text>

          <text x="0" y="109" className="fill-gray-400 text-[9px]">
            $400
          </text>

          <text x="0" y="151" className="fill-gray-400 text-[9px]">
            $200
          </text>

          <text x="4" y="193" className="fill-gray-400 text-[9px]">
            $0
          </text>

          {/* Horizontal baseline */}
          <line
            x1="40"
            y1="190"
            x2="400"
            y2="190"
            stroke="#e5e7eb"
            strokeWidth="1"
          />

          {/* Highlight bar */}
          <rect
            x="174"
            y="107"
            width="22"
            height="83"
            rx="2"
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
            strokeWidth="1.7"
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

          {/* Month labels */}
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