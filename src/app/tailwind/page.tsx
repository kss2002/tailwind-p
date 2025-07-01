import Link from "next/link";
import styles from "../tailwind/main.module.css";

export default function tailwind() {
  return (
    <>
      <main>
        <p className={styles.main__tilte}>tailwind css</p>
        <button className={styles.main__button}>
          <Link href="/" rel="noopener noreferrer">
            <span>Go to Home</span>
          </Link>
        </button>
      </main>

      <section>
        <div>
          <p className={styles.main__desc}>
            tailwind css의 모든 것을 다루지는 않고, 자주 쓰이는 유틸리티만 다룰
            예정
          </p>
        </div>
      </section>
    </>
  );
}
