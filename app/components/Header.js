import Link from "next/link"

import {UserButton, auth } from "@clerk/nextjs"
const Header = () => {
  const {userId}=auth();
  return (
    <div>
        <nav className=" bg-blue-600 py-4 px-6 flex items-center justify-between ">
           <div>
              <Link href="/">
                Clerk app
              </Link>
           </div>
           { !userId && <div className="text-white flex gap-4">
              <Link href="/sign-in" className=" text-gray-200 hover:text-yellow-400">
                Sign-in
              </Link>
              <Link href="/sign-up" className=" text-gray-200 hover:text-yellow-400">
                Sign-up
              </Link>
           </div>}
           {userId &&
            <div className="text-white flex gap-4">
              <Link href="/profile" className=" text-gray-200 hover:text-yellow-400">
                Profile
              </Link>          
              <UserButton afterSignOutUrl="/"/>
           
           </div> }
        </nav>
    </div>
  )
}

export default Header