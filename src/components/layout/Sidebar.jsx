function Sidebar() {
  return (
    <aside className="hidden w-56 shrink-0 bg-gray-100 p-6 lg:block">
      
      <h2 className="text-xl font-bold text-purple-600">
        CryptX
      </h2>

      <nav className="mt-10 space-y-4">
        <p className="text-purple-600">Overview</p>
        <p className="text-gray-400">Chart</p>
        <p className="text-gray-400">Transactions</p>
        <p className="text-gray-400">Wallet</p>
        <p className="text-gray-400">Mail Box</p>
        <p className="text-gray-400">Setting</p>
        <p className="text-gray-400">Logout</p>
      </nav>

    </aside>
  )
}

export default Sidebar