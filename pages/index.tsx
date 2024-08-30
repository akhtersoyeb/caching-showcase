import CachedList from "@/components/CachedList"
import Hero from "@/components/Hero"
import NonCachedList from "@/components/NonCachedList"
import PaginationBar from "@/components/PaginationBar"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
  const [page, setPage] = useState(1)
  return (
    <>
      <Head>
        <title>Caching Showcase</title>
      </Head>
      <main className="">
        <Hero page={page} setPage={setPage} />

        <div className="max-w-4xl mx-auto px-5 py-10 flex justify-between">
          <NonCachedList page={page} />
          <CachedList page={page} />
        </div>
      </main>
    </>
  )
}
