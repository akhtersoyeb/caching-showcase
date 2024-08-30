import PaginationBar from "./PaginationBar"
type Props = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
export default function Hero({ page, setPage }: Props) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 text-white space-y-4">
      <h1 className="text-center font-bold text-3xl ">
        ⚡ Caching v/s Non-Caching 😴
      </h1>
      <p className="text-center max-w-screen-md mx-auto">
        The project is a performance comparison tool that demonstrates the
        impact of caching on web page load times. It features two sides: one
        where content is cached for faster retrieval, and another where content
        is fetched anew with each load. This side-by-side comparison highlights
        the efficiency and benefits of implementing caching in web applications.
      </p>
      <p className="text-center max-w-screen-md mx-auto">
        📌 Click on next and after loading is done go to previous. You will see
        the diff.
      </p>
      <PaginationBar page={page} setPage={setPage} />
    </div>
  )
}
