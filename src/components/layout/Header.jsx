function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-5 sm:px-6 lg:px-8">

      {/* Search Bar */}
      <div className="relative w-full max-w-md">

       <input
        type="text"
        placeholder="Search type of keywords"
        className="h-11 w-full rounded-xl border border-gray-100 bg-[#f8f8fc] pl-4 pr-11 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#5546f6] focus:bg-white"
       />

       {/* Search Icon */}
        <svg
          className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >  

         <circle cx="11" cy="11" r="7" />
         <path d="M20 20l-4-4" />
       </svg>

</div>

      {/* Right Side */}
      <div className="ml-4 flex items-center gap-3 sm:gap-5">

        {/* Notification */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-[#f8f8fc] hover:text-[#5546f6]"
          aria-label="Notifications"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

        </button>

        {/* Info */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition hover:bg-[#f8f8fc] hover:text-[#5546f6]"
          aria-label="Information"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 10v6" />
            <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
          </svg>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-100 pl-3 sm:pl-5">

          {/* Profile Picture */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-500">
            L
          </div>

          {/* Profile Information */}
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#252525]">
              Laurice
            </p>

            <p className="mt-0.5 text-xs text-gray-400">
              @laurice22
            </p>
          </div>

          {/* Dropdown Arrow */}
          <svg
            className="hidden h-4 w-4 text-gray-400 sm:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>

        </div>
      </div>
    </header>
  )
}

export default Header