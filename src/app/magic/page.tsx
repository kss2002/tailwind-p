import Link from "next/link";

export default function magic() {
  return (
    <>
      <h3>magic ui</h3>
      <div>page</div>
      <button>
        <Link href="/" rel="noopener noreferrer">
          <span>Go to Home</span>
        </Link>
      </button>
    </>
  );
}
