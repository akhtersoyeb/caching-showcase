import getPosts from "@/lib/queries/getPosts"
import { useQuery } from "@tanstack/react-query"
import ListPanelUI from "./ListPanelUI"
import PostCard from "./PostCard"

type Props = {
  page: number
}

export default function CachedList({ page }: Props) {
  const postsQuery = useQuery({
    queryKey: ["posts", page],
    queryFn: () => {
      return getPosts(page)
    },
  })

  if (postsQuery.isLoading) {
    return (
      <ListPanelUI page={page} badge="With Caching ⚡">
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
    <ListPanelUI page={page} badge="With Caching ⚡">
      {postsQuery.data?.map((item) => (
        <PostCard key={item.id} {...item} />
      ))}
    </ListPanelUI>
  )
}
