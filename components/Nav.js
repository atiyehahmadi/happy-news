import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800	 flex-wrap p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">NEWS App</span>
  </div>
      <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200	 duration-100 transition-shadow	 hover:text-white ml-3">
          <Link href='/'>Home</Link>
        </li>
        <li className="block mt-4 lg:inline-block lg:mt-0 text-gray-200	 duration-100 transition-shadow	 hover:text-white ml-6">
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav