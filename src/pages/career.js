import React,{useState, useEffect} from 'react';
import Head from 'next/head'
import Banner from '../components/career/Banner';
import Counting from '../components/career/Counting';
import Role from '../components/career/Role';
import Template from "../components/common/Template";
import { useRouter } from 'next/router'

function Index() {

  const router = useRouter();
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  return (
    <>
    <Head>
        <title>Explore Career In Software Development - Softgetix</title>
        <meta name="description" content="Softgetix is a leading group for developing your career and finding your next dream job" />
        <link rel="canonical" href={ogUrl}></link>
    </Head>
    <Template>
        <Banner />
        <Role />
        <Counting />
      </ Template>
    </>
  )
}

export default Index
