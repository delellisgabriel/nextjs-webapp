"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useModal from "@/hooks/useModal";

export default function Home() {
  const { openModal, Modal } = useModal();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        ⚠️ Like in the old days, this website is Under Construction ⚠️ Right now
        I&apos;m just making reusable components with some tests and writting
        some content for a blog that is gonna live here. A Link to the content
        is here:{" "}
        <Link
          href="https://github.com/delellisgabriel/knowledge-and-experiences"
          target="_blank"
        >
          https://github.com/delellisgabriel/knowledge-and-experiences
        </Link>
        <button onClick={() => openModal()}>open modal</button>
        <Modal>The modal is open 🧙‍♂️ You&apos;re a wizard!</Modal>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
          Learn
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
