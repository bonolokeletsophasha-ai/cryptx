const marketData = [
  {
    id: 1,
    icon: '₿',
    iconColor: 'text-[#f7931a]',
    name: 'Bitcoin',
    symbol: 'BTC/USDT',
    price: '39,786 USD',
    change: '+14.02%',
    positive: true,
  },
  {
    id: 2,
    icon: '♦',
    iconColor: 'text-[#627eea]',
    name: 'Ethereum',
    symbol: 'ETH/USDT',
    price: '21,786 USD',
    change: '+4.02%',
    positive: true,
  },
  {
    id: 3,
    icon: 'Ł',
    iconColor: 'text-[#345d9d]',
    name: 'Litecoin',
    symbol: 'LTC/USDT',
    price: '9,786 USD',
    change: '-4.02%',
    positive: false,
  },
  {
    id: 4,
    icon: '✳',
    iconColor: 'text-[#0033ad]',
    name: 'Cardano',
    symbol: 'ADA/USDT',
    price: '4,786 USD',
    change: '+0.02%',
    positive: false,
  },
]

function LiveMarket() {
  return (
    <section className="h-full">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#252525]">
          Live Market
        </h2>
      </div>

      {/* Market Items */}
      <div className="space-y-1">

        {marketData.map((coin) => (
          <div
            key={coin.id}
           className="grid h-[72px] grid-cols-[1.5fr_0.8fr_0.9fr_1.4fr] items-center gap-4"
          >

            {/* Coin */}
            <div className="flex items-center gap-3">

              {/* White Circular Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <span
                  className={`text-lg font-bold ${coin.iconColor}`}
                >
                  {coin.icon}
                </span>
              </div>

              {/* Coin Name */}
              <div>
                <p className="text-sm font-semibold text-[#252525]">
                  {coin.name}
                </p>

                <p className="mt-0.5 text-xs text-gray-400">
                  {coin.symbol}
                </p>
              </div>

            </div>

            {/* Change */}
            <div>
              <p className="text-[11px] text-gray-400">
                Change
              </p>

              <p
                className={`mt-1 text-sm font-medium ${
                  coin.positive
                    ? 'text-green-500'
                    : 'text-orange-500'
                }`}
              >
                {coin.positive ? '▲' : '▼'} {coin.change}
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-[11px] text-gray-400">
                Price
              </p>

              <p className="mt-1 text-sm font-semibold text-[#252525]">
                {coin.price}
              </p>
            </div>

            {/* Shaded Graph */}
            <div className="flex justify-end">

              <svg
                viewBox="0 0 120 45"
                className="h-11 w-32"
                fill="none"
              >

                {/* Shaded Area */}
                <path
                  d={
                    coin.positive
                      ? 'M2 34 C14 29 18 31 27 24 C36 17 43 26 52 21 C62 15 68 22 77 15 C86 8 94 13 101 9 C108 6 114 9 118 4 L118 45 L2 45 Z'
                      : 'M2 8 C14 10 19 7 28 14 C37 21 44 14 53 19 C62 24 70 19 78 27 C86 34 94 27 102 31 C109 34 114 37 118 39 L118 45 L2 45 Z'
                  }
                  fill={
                    coin.positive
                      ? 'rgba(25, 201, 87, 0.10)'
                      : 'rgba(255, 138, 0, 0.10)'
                  }
                />

                {/* Graph Line */}
                <path
                  d={
                    coin.positive
                      ? 'M2 34 C14 29 18 31 27 24 C36 17 43 26 52 21 C62 15 68 22 77 15 C86 8 94 13 101 9 C108 6 114 9 118 4'
                      : 'M2 8 C14 10 19 7 28 14 C37 21 44 14 53 19 C62 24 70 19 78 27 C86 34 94 27 102 31 C109 34 114 37 118 39'
                  }
                  stroke={
                    coin.positive
                      ? '#19c957'
                      : '#ff8a00'
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default LiveMarket