import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello, I'm <b>Vinai Phomsouvannady</b>. Im a computer science student at URI. I am currently trying to learn full-stack developement using Next.js.]</p>
        <p>
          (I learned how to make this site using{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
        <Link href="posts/first-post">Where does this thing go?</Link>
      </section>
      <section className = {'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
        <h2 className={utilStyles.hadingLg}>Blog</h2>
          <ul className = {utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              </li>
            ))}
          </ul>
      </section>
    </Layout>
  );
}
