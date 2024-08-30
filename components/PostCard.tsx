import { Post } from "@/lib/types/PostType"

export default function PostCard({ userId, id, title, body }: Post) {
  return (
    <div className="bg-white p-3 shadow-md rounded-md space-y-2">
      <p className="font-medium">{title}</p>
      <p className="text-gray-600 font-light text-sm">{body}</p>
    </div>
  )
}
