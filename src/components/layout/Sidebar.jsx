function Sidebar() {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-gray-100 bg-white px-5 py-6 lg:block">

      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#5546f6]">
          CryptX
        </h2>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        {/* Overview */}
        <p className="rounded-xl bg-[#5546f6]/10 px-4 py-3 text-sm font-medium text-[#5546f6]">
          Overview
        </p>

        {/* Other links */}
        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Chart
        </p>

        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Transactions
        </p>

        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Wallet
        </p>

        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Mail Box
        </p>

        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Setting
        </p>

      </nav>

      {/* Logout */}
      <div className="mt-10 border-t border-gray-100 pt-5">
        <p className="cursor-pointer rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">
          Logout
        </p>
      </div>

    </aside>
  )
}

export default Sidebar