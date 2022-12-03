import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import React, { useCallback, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    type Target = {
      href?: string;
    };
    const target = e.target as Target;
    console.log(target.href);
    e.preventDefault();
  }, []);

  useEffect(() => {
    console.log("マウント時");

    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");

      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>
      <Main page="index" />

      <Footer />
    </div>
  );
}
