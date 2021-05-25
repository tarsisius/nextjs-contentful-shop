import Link from 'next/link'

export default function Pagination({ prev, next }) {
  return (
    <div className="pagination">
      {prev && (
        <Link href={"/page/" + prev} passHref>
          <a aria-label="Previous page">
            <button className="pagination-button">
              Prev
            </button>
          </a>
        </Link>
      )}

      {next && (
        <Link href={"/page/" + next} passHref>
          <a aria-label="Next page">
            <button className="pagination-button">
              Next
            </button>
          </a>
        </Link>
      )}
    </div>
  )
}
