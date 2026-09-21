function Header() {
  return (
    <header className="flex flex-col gap-4 border-b border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

      {/* Search */}
      <div className="w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search type of keywords"
          className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-[#5546f6] sm:w-64"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center justify-between gap-4 sm:justify-end">

        {/* Notifications */}
        <button className="text-lg text-gray-500 transition hover:text-[#5546f6]">
          🔔
        </button>

        {/* Help */}
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-500 transition hover:border-[#5546f6] hover:text-[#5546f6]">
          ?
        </button>

        {/* User */}
        <div className="flex items-center gap-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-500">
            L
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#252525]">
              Laurice
            </p>

            <p className="text-xs text-gray-400">
              @laurice22
            </p>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header