import { Copyright } from '@/components/Copyright'
import { Profile } from '@/components/Profile'
import { EmptyMemories } from '@/components/emptyMemories'
import { Hero } from '@/components/hero'
import { SignIn } from '@/components/signIn'
import { cookies } from 'next/headers'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2 font-roboto">
      {/* LEFT */}
      <div className=" relative flex  flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* BLUR */}
        <div className=" absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        {/* STRIPES */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>
      {/* RIGHT */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
