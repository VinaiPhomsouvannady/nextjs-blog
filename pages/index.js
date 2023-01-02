import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';


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
        <p>[Hello, I'm <b>Vinai Phomsouvannady</b>. Im a computer science student at URI. I am currently trying to learn more about networking and am working towards getting a CCNA certification]</p>
        <p>
          (I learned how to make this site using{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
        <Link href="/THEETERNALLIGHT">Where does this thing go?</Link>
      </section>
      <section className = {'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
        <h2 className={utilStyles.hadingLg}>Blog</h2>
          <ul className = {utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
      </section>
    </Layout>
  );
}
