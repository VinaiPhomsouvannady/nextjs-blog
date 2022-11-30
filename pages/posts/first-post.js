import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>
            WOW
        </title>

    </Head>
      <h1>First!!!!</h1>
      <h2>
        <Link href="/">Where does this thing go?</Link>
      </h2>
    </Layout>
  );
}
