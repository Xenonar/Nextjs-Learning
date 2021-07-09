import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout';

const Pic1 = () =>(
    <Image 
        src="/images/construction-design.jpg"
        height={400}
        width={400}
        alt="Constuction"></Image>
)

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <Pic1/>
            
        </Layout>
        )
  }