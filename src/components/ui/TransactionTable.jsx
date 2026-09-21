import transactionData from '../../data/transactionData'

function TransactionTable() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Table heading */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#252525]">
            Recent Transactions
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Your latest crypto activity
          </p>
        </div>

        <button className="rounded-lg px-3 py-2 text-xs font-medium text-[#5546f6] transition hover:bg-[#5546f6]/10">
          View All
        </button>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">

          {/* Table headings */}
          <thead>
            <tr className="border-b border-gray-100 text-xs uppercase tracking-wide text-gray-400">
              <th className="px-2 pb-3 font-medium">Type</th>
              <th className="px-2 pb-3 font-medium">Coin</th>
              <th className="px-2 pb-3 font-medium">Amount</th>
              <th className="px-2 pb-3 font-medium">Price</th>
              <th className="px-2 pb-3 font-medium">Date</th>
              <th className="px-2 pb-3 font-medium">Status</th>
            </tr>
          </thead>

          {/* Table rows */}
          <tbody>
            {transactionData.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/70"
              >

                {/* Type */}
                <td className="px-2 py-4">
                  <span
                    className={`text-sm font-medium ${
                      transaction.type === 'Buy'
                        ? 'text-green-500'
                        : 'text-orange-500'
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>

                {/* Coin */}
                <td className="px-2 py-4">
                  <div>
                    <p className="text-sm font-semibold text-[#252525]">
                      {transaction.coin}
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      {transaction.symbol}
                    </p>
                  </div>
                </td>

                {/* Amount */}
                <td className="px-2 py-4 text-sm text-gray-600">
                  {transaction.amount}
                </td>

                {/* Price */}
                <td className="px-2 py-4 text-sm font-medium text-[#252525]">
                  {transaction.price}
                </td>

                {/* Date */}
                <td className="px-2 py-4 text-sm text-gray-500">
                  {transaction.date}
                </td>

                {/* Status */}
                <td className="px-2 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      transaction.status === 'Completed'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-orange-50 text-orange-500'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default TransactionTable