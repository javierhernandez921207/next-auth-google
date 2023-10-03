"use client"
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react"



export default function Home() {
  const {data: session} = useSession()
  console.log(session)
    return (
      <nav className="bg-slate-900 flex justify-between px-24 text-white items-center py-3">
        <div>
            <Link href={"/"}>
              Next Google
            </Link>
        </div>
        <div className="flex items-center gap-2">
            <Link href={"/dashboard"}>
              Dashboard
            </Link>
            <button onClick={()=>signIn()} className="bg-sky-400 px-3 py-2 rounded">signIn</button>
        </div>
      </nav>
    )
  }