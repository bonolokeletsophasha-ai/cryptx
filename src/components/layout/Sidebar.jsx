function Sidebar() {
    return (
        <aside className="hidden w-56 shrink-0 bg-[#f7f7f7] px-6 py-7 lg:block">

            /* Logo*/ 
            <div className="mv-12 flex items-center gap-2">
                <div className="text-2xl font-bold text-{#5b4df5]">
                     ∞
                </div>
                <span className="text-lg font-bold text-[#252525]">
                    CryptX
                </span>
            </div>

            /* Navigation */
            <nav className="space-y-3">

             /* Overiew */
             <div className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[#5b4df5]">
          <div className="flex items-center gap-3">
            <span className="grid grid-cols-2 gap-1">
              <span className="h-1.5 w-1.5 rounded-sm bg-[#5b4df5]"></span>
              <span className="h-1.5 w-1.5 rounded-sm bg-[#5b4df5]"></span>
              <span className="h-1.5 w-1.5 rounded-sm bg-[#5b4df5]"></span>
              <span className="h-1.5 w-1.5 rounded-sm bg-[#5b4df5]"></span>
            </span>
            <span>Overview</span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-[#5b4df5]"></span>
        </div>

        /* Chart */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">◷</span>
          <span>Chart</span>
        </div>

        /* Transactions */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">▱</span>
          <span>Transactions</span>
        </div>

        * Wallet */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">♧</span>
          <span>Wallet</span>
        </div>

        /* Mail Box */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">▢</span>
          <span>Mail Box</span>
        </div>

        /* Settings */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">⚙</span>
          <span>Setting</span>
        </div>

        /* Logout */
        <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-400">
          <span className="text-lg">↪</span>
          <span>Logout</span>
        </div>

          </nav>
        </aside>
    )
}