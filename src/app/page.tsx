import Image from "next/image";
import styles from "./page.module.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Link from "next/link";

// 메인 페이지 컴포넌트
export default function Home() {
  return (
    <div className={styles.page}>
      <FlickeringGrid
        className="absolute inset-0 z-[-1]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={1000}
        width={2000}
      />

      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/tailwind.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>

          <Link
            href="/tailwind"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            tailwind css
          </Link>

          <Link
            href="/shad"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            shad ui
          </Link>

          <Link
            href="/magic"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            magic ui
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/kss2002/tailwind-p"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          github
        </a>
        <a
          href="https://tailwindcss.com/docs/installation/using-vite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          TailWind Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
