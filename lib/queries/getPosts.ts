import { Post } from "../types/PostType"

export default async function getPosts(page = 1): Promise<Post[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  )
  await delay(1000)
  const data = res.json()
  return data
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
