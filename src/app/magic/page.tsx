import Link from "next/link";
import styles from "../magic/main.module.css";

export default function magic() {
  return (
    <>
      <main>
        <p className={styles.main__tilte}>magic ui</p>
        <button className={styles.main__button}>
          <Link href="/" rel="noopener noreferrer">
            <span>Go to Home</span>
          </Link>
        </button>
      </main>

      <section>
        <div>
          <p className={styles.main__desc}>
            magic ui 는 컴포넌트 라이브러리로, Tailwind CSS를 기반으로 만들어짐.
            (애니메이션에 특화됨)
          </p>
        </div>
      </section>
    </>
  );
}
