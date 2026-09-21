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

      {/* Transaction List */}
      <div>

        {transactionData.map((transaction) => (
          <div
            key={transaction.id}
            className="flex h-[72px] items-center justify-between"
          >

            {/* Left Side */}
            <div className="flex items-center gap-3">

              {/* Circle Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dedee8] bg-[#f8f8fc]">
                <span
                  className={`text-xl font-bold ${transaction.iconColor}`}
                >
                  ▽
                </span>
              </div>

              {/* Coin Name + Transaction Type */}
              <div>
                <p className="text-sm font-semibold text-[#252525]">
                  {transaction.coin}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {transaction.type}
                </p>
              </div>

            </div>

            {/* Right Side */}
            <div className="text-right">

              {/* Price */}
              <p className="text-sm font-semibold text-[#252525]">
                {transaction.price}
              </p>

              {/* Today + Time */}
              <p className="mt-1 text-xs text-gray-400">
                Today&nbsp;&nbsp;{transaction.time}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default TransactionTable