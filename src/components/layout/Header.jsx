function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-100 px-6">

      /* Search */
      <div className="relative w-64">
        <input type="text" placeholder="Search type of keywords" className="h-10 w-full rounded-lg border border-gray-200 bg-white px-4 pr-10 text-xs text-gray-600 outline-none placeholder:text-gray-400 focus:border-[#5b4df5]"/>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ⌕
        </span>
      </div>

      /* Right side */
      <div className="flex items-center gap-6">

        /* Notification */
        <button className="text-gray-400 hover:text-[#5b4df5]">
          ♧
        </button>

        /* Help */
        <button className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs text-gray-400 hover:border-[#5b4df5] hover:text-[#5b4df5]">
          ?
        </button>

        /* User */
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-400"></div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-700">
              Laurice
            </p>

            <p className="text-[10px] text-gray-400">
              @laurice22
            </p>
          </div>

          <span className="text-xs text-gray-400">
            ˅
          </span>
        </div>

      </div>

    </header>
  )
}

export default Header