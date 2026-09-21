function Sidebar() {
  const menuItems = [
    {
      name: 'Overview',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      name: 'Chart',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <line x1="4" y1="19" x2="20" y2="19" />
          <line x1="6" y1="16" x2="6" y2="10" />
          <line x1="10" y1="16" x2="10" y2="6" />
          <line x1="14" y1="16" x2="14" y2="12" />
          <line x1="18" y1="16" x2="18" y2="8" />
        </svg>
      ),
    },
    {
      name: 'Transactions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h13" />
          <path d="M14 4l3 3-3 3" />
          <path d="M20 17H7" />
          <path d="M10 14l-3 3 3 3" />
        </svg>
      ),
    },
    {
      name: 'Wallet',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M16 14h2" />
        </svg>
      ),
    },
    {
      name: 'Mail Box',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
    },
    {
      name: 'Setting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8.1 15a1.7 1.7 0 0 0-1.5-1H6.4v-2.5h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2H15v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="hidden w-60 shrink-0 border-r border-gray-100 bg-white px-4 py-7 lg:block">

      {/* Logo */}
      <div className="mb-12 px-4">
        <div className="flex items-center gap-2">

      {/* Infinity Logo */}
      <svg
       viewBox="0 0 48 24"
       className="h-10 w-14 text-[#5546f6]"
       fill="none"
       stroke="currentColor"
       strokeWidth="4"
       strokeLinecap="round"
      >
        <path d="M8 12c0-3.5 2.5-6 5.5-6 2.5 0 4 1.5 6.5 5 2.5 3.5 4 5 6.5 5 3 0 5.5-2.5 5.5-6s-2.5-6-5.5-6c-2.5 0-4 1.5-6.5 5-2.5 3.5-4 5-6.5 5C10.5 18 8 15.5 8 12z" />
    </svg>

      {/* Logo Text */}
      <h2 className="text-2xl font-bold tracking-tight text-[#252525]">
        Crypt<span className="text-[#252525]">X</span>
      </h2>

  </div>
</div>

      {/* Navigation */}
      <nav className="space-y-2">

        {menuItems.map((item) => (
          <p
            key={item.name}
            className={`flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3 text-sm transition ${
              item.name === 'Overview'
                ? 'bg-[#5546f6]/10 font-semibold text-[#5546f6]'
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700'
            }`}
          >

            {/* Icon */}
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              {item.icon}
            </span>

            {/* Menu Text */}
            <span className="flex-1">{item.name}</span>

            {/* Active Indicator */}
            {item.name === 'Overview' && (
              <span className="h-2 w-2 rounded-full bg-[#5546f6]"></span>
          )}

          </p>
        ))}

      </nav>

      {/* Logout */}
      <div className="mt-8 border-t border-gray-100 pt-5">

        <p className="flex cursor-pointer items-center gap-4 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-gray-50 hover:text-gray-700">

          <span className="flex h-5 w-5 shrink-0 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M21 19V5a2 2 0 0 0-2-2h-7" />
            </svg>
          </span>

          <span>Logout</span>

        </p>

      </div>
    </aside>
  )
}

export default Sidebar