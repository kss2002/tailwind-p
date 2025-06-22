import Link from "next/link";

export default function tailwind() {
  return (
    <>
      <h3>tailwind css</h3>
      <div>page</div>
      <button>
        <Link href="/" rel="noopener noreferrer">
          <span>Go to Home</span>
        </Link>
      </button>
    </>
  );
}
