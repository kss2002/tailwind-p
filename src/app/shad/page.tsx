import Link from "next/link";
import styles from "../shad/main.module.css";

export default function shad() {
  return (
    <>
      <main>
        <p className={styles.main__tilte}>shadcn ui</p>
        <button className={styles.main__button}>
          <Link href="/" rel="noopener noreferrer">
            <span>Go to Home</span>
          </Link>
        </button>
      </main>

      <section>
        <div>
          <p className={styles.main__desc}>
            shadcn ui 는 컴포넌트 라이브러리로, Tailwind CSS를 기반으로
            만들어짐.
          </p>
        </div>
      </section>
    </>
  );
}
