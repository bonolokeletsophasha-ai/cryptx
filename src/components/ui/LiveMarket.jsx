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
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Heading */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#252525]">
            Live Market
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Current crypto market
          </p>
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-green-500">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Live
        </div>
      </div>

      {/* Market List */}
      <div className="space-y-2">

        {marketData.map((coin) => (
          <div
            key={coin.id}
            className="flex items-center justify-between rounded-xl px-2 py-3 transition hover:bg-gray-50"
          >

            {/* Coin information */}
            <div className="flex items-center gap-3">

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-semibold text-white ${coin.iconBg}`}
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

            {/* Price and change */}
            <div className="text-right">

              <p className="text-sm font-semibold text-[#252525]">
                {coin.price}
              </p>

              <p
                className={`mt-0.5 text-xs font-medium ${
                  coin.positive
                    ? 'text-green-500'
                    : 'text-orange-500'
                }`}
              >
                {coin.positive ? '▲' : '▼'} {coin.change}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default LiveMarket