import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useGetStaticProps } from 'next-slicezone/hooks';
import { Client } from '../prismic';

import SliceZone from 'next-slicezone';
import resolver from '../sm-resolver.js';

export default function Home({ uid, registry, slices }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <SliceZone slices={slices} registry={registry} resolver={resolver} />
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = useGetStaticProps({
  client: Client(), // pass Prismic client here
  type: 'page', // query document of type "page"
  uid: 'homepage', // pass a function to `uid` to resolve dynamic content
});
