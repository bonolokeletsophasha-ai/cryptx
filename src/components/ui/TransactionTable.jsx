import transactionData from '../../data/transactionData'

function TransactionTable() {
  return (
    <section className="h-full">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#252525]">
          Transactions
        </h2>
      </div>

      {/* Transactions */}
      <div className="space-y-5">

        {transactionData.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >

            {/* Left: Coin Icon + Name + Type */}
            <div className="flex items-center gap-3">

              {/* Circular Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <span
                  className={`text-lg font-bold ${
                    transaction.symbol === 'BTC'
                      ? 'text-[#f7931a]'
                      : transaction.symbol === 'ETH'
                      ? 'text-[#627eea]'
                      : transaction.symbol === 'LTC'
                      ? 'text-[#345d9d]'
                      : 'text-[#0033ad]'
                  }`}
                >
                  {transaction.symbol === 'BTC'
                    ? '₿'
                    : transaction.symbol === 'ETH'
                    ? '♦'
                    : transaction.symbol === 'LTC'
                    ? 'Ł'
                    : '✳'}
                </span>
              </div>

              {/* Coin Name + Type */}
              <div>
                <p className="text-sm font-semibold text-[#252525]">
                  {transaction.coin}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {transaction.type === 'Sell'
                    ? 'Received'
                    : 'Buy'}
                </p>
              </div>

            </div>

            {/* Right: Price + Date */}
            <div className="text-right">

              <p className="text-sm font-semibold text-[#252525]">
                {transaction.price.replace('$', '')} USD
              </p>

              <p className="mt-1 text-xs text-gray-400">
                {transaction.date === 'Sep 21, 2026'
                  ? 'Today'
                  : transaction.date}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default TransactionTable