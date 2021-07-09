import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>{siteTitle} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Arpok first Next.js
        </h1>

        <p className="description">
          Go to the 
          Read{' '} {/* used to divide text over multiple line*/}
          <Link href="posts/first-post">
            <a style={{color: 'red'}}>First Post HERE</a>
          </Link>
        </p>

       
      </main>

      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
         ARPOK
        </a>
      </footer>
    </div>
    </Layout>
  )
}
