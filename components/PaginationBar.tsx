type Props = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function PaginationBar({ page, setPage }: Props) {
  function handlePreviousBtn() {
    setPage((prev) => prev - 1)
  }

  function handleNextBtn() {
    setPage((prev) => prev + 1)
  }

  return (
    <div className="max-w-sm mx-auto flex items-center justify-between py-10">
      <button
        className="bg-white px-10 py-2.5 rounded-sm text-slate-700 w-40 hover:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-300"
        onClick={handlePreviousBtn}
        disabled={page === 1}
      >
        Previous
      </button>
      <button
        className="bg-white px-10 py-2.5 rounded-sm text-slate-700 w-40 hover:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-300"
        onClick={handleNextBtn}
        disabled={page === 10}
      >
        Next
      </button>
    </div>
  )
}
