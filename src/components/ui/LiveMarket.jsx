const marketData = [
  {
    id: 1,
    icon: '₿',
    iconBg: 'bg-[#ffb511]',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$40,291',
    change: '+0.25%',
    positive: true,
  },
  {
    id: 2,
    icon: '♦',
    iconBg: 'bg-[#5b4df5]',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$18,291',
    change: '+0.25%',
    positive: true,
  },
  {
    id: 3,
    icon: 'Ł',
    iconBg: 'bg-[#3f5bea]',
    name: 'Litecoin',
    symbol: 'LTC',
    price: '$8,291',
    change: '+0.25%',
    positive: true,
  },
  {
    id: 4,
    icon: '✳',
    iconBg: 'bg-[#19c957]',
    name: 'Cardano',
    symbol: 'ADA',
    price: '$3,291',
    change: '-2.05%',
    positive: false,
  },
]

function LiveMarket() {
  return (
    <section className="h-full">

      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-[#252525]">
          Live Market
        </h2>
      </div>

      {/* Market Items */}
      <div className="space-y-1">

        {marketData.map((coin) => (
          <div
            key={coin.id}
            className="grid grid-cols-[1.5fr_0.8fr_0.9fr_1.5fr] items-center gap-4 py-4"
          >

            {/* Coin */}
            <div className="flex items-center gap-3">

              {/* Circular Icon */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white ${coin.iconBg}`}
              >
                {coin.icon}
              </div>

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
              <p
                className={`text-sm font-medium ${
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
              <p className="text-sm font-semibold text-[#252525]">
                {coin.price}
              </p>
            </div>

            {/* Graph */}
            <div className="flex justify-end">

              <svg
                viewBox="0 0 100 40"
                className="h-10 w-28"
                fill="none"
              >
                <path
                  d={
                    coin.positive
                      ? 'M2 30 C12 25 15 27 23 20 C31 13 37 22 45 18 C54 14 58 21 65 14 C72 7 78 12 84 8 C90 5 94 8 98 3'
                      : 'M2 8 C12 10 17 6 25 13 C34 20 39 12 47 17 C56 23 61 18 68 25 C76 32 83 24 89 29 C94 32 97 35 98 37'
                  }
                  stroke={coin.positive ? '#19c957' : '#ff8a00'}
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