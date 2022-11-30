import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
    <Head>
        <title>
            WOW
        </title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Where does this thing go?</Link>
      </h2>
    </>
  );
}
