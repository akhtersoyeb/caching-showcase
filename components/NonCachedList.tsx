import getPosts from "@/lib/queries/getPosts"
import { Post } from "@/lib/types/PostType"
import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import ListPanelUI from "./ListPanelUI"

type Props = {
  page: number
}

export default function NonCachedList({ page }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    fetchPosts()
  }, [page])

  useEffect(() => {
    if (posts) {
      console.log("posts: ", posts)
    }
  }, [posts])

  async function fetchPosts() {
    try {
      setIsLoading(true)
      const data = await getPosts(page)
      setPosts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <ListPanelUI page={page} badge="Without Caching 😴">
        {new Array(10).fill(null).map((item, index) => (
          <div
            key={index}
            className="w-full h-32 bg-white p-3 shadow-md rounded-md space-y-2"
          >
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </ListPanelUI>
    )
  }

  return (
    <ListPanelUI page={page} badge="Without Caching 😴">
      {posts?.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </ListPanelUI>
  )
}
