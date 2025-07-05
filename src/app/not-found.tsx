import Link from "next/link";
import styles from "./tailwind/main.module.css";

// app 하위 파일에 not-found로 파일을 명하면,
// 자동으로 404 not found 페이지를 보여줌
export default function NotFound() {
  return (
    <>
      <h1 className={styles.main__tilte}>찾을 수 없는 페이지입니다.</h1>
      <div>
        <button className={styles.main__button}>
          <Link href="/">Home</Link>
        </button>
      </div>
    </>
  );
}
