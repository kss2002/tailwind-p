import Link from "next/link";

export default function shad() {
  return (
    <>
      <h3>shadcn ui</h3>
      <div>page</div>
      <button>
        <Link href="/" rel="noopener noreferrer">
          <span>Go to Home</span>
        </Link>
      </button>
    </>
  );
}
