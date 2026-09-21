import transactionData from '../../data/transactionData'

function TransactionTable() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[#252525]">
          Transactions
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Recent transactions
        </p>
      </div>

      {/* Transactions */}
      <div className="space-y-1">

        {transactionData.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-xl px-2 py-3 transition hover:bg-gray-50"
          >

            {/* Coin */}
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#252525]">
                {transaction.coin}
              </p>

              <p className="mt-0.5 text-xs text-gray-400">
                {transaction.symbol} · {transaction.type}
              </p>
            </div>

            {/* Price and status */}
            <div className="ml-3 text-right">

              <p className="text-sm font-semibold text-[#252525]">
                {transaction.price}
              </p>

              <span
                className={`text-xs font-medium ${
                  transaction.status === 'Completed'
                    ? 'text-green-500'
                    : 'text-orange-500'
                }`}
              >
                {transaction.status}
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default TransactionTable