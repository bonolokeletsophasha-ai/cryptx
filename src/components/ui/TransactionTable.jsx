import transactionData from '../../data/transactionData'

function TransactionTable() {
  return (
    <div className="mt-6 rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

      {/* Table heading */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#252525]">
          Recent Transactions
        </h2>

        <button className="text-sm font-medium text-[#5546f6] hover:underline">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">

          {/* Table headings */}
          <thead>
            <tr className="border-b border-gray-100 text-xs text-gray-400">
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Coin</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Price</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          {/* Table rows */}
          <tbody>
            {transactionData.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-gray-50 last:border-0"
              >

                {/* Type */}
                <td className="py-4 text-sm font-medium text-[#252525]">
                  {transaction.type}
                </td>

                {/* Coin */}
                <td className="py-4">
                  <div>
                    <p className="text-sm font-medium text-[#252525]">
                      {transaction.coin}
                    </p>

                    <p className="text-xs text-gray-400">
                      {transaction.symbol}
                    </p>
                  </div>
                </td>

                {/* Amount */}
                <td className="py-4 text-sm text-gray-600">
                  {transaction.amount}
                </td>

                {/* Price */}
                <td className="py-4 text-sm font-medium text-[#252525]">
                  {transaction.price}
                </td>

                {/* Date */}
                <td className="py-4 text-sm text-gray-500">
                  {transaction.date}
                </td>

                {/* Status */}
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
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