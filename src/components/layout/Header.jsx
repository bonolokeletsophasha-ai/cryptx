function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-100 px-6">

      <input
        type="text"
        placeholder="Search type of keywords"
        className="w-64 rounded-lg border border-gray-200 px-4 py-2 text-sm outline-none"
      />

      <div className="flex items-center gap-4">

        <span>🔔</span>

        <span>?</span>

        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>

          <div>
            <p className="text-sm font-semibold">
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