import React, { useEffect } from 'react'

function Navbar() {
  return (
<nav className="w-full bg-blue-600 shadow-sm py-3 px-6 sticky top-0 z-10">
  <div className="max-w-5xl mx-auto flex justify-between items-center">

    {/* Logo */}
    <div className="font-bold text-xl text-white tracking-tight">
      Task Planner
    </div>

    {/* Navigation */}
    <ul className="flex gap-6 text-white">
      <li className="cursor-pointer hover:text-gray-900 transition-colors">
        Home
      </li>
      <li className="cursor-pointer hover:text-gray-900 transition-colors">
        Your Todos
      </li>
    </ul>

  </div>
</nav>

  )
}

export default Navbar
