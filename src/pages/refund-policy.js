import React,{useState, useEffect} from 'react';
import Template from "../components/common/Template";
import { useRouter } from 'next/router';
import Head from 'next/head';

function RefundPolicy() {
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
        <title>Refund Policy - SoftGetix</title>
        <meta name="description" content="" />
        <link rel="canonical" href={ogUrl}></link>
      </Head>
    <Template>
        <section className="services">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                <h2 className="heading-section">Refund Policy</h2>
              </div>
            </div>
          </div>
        </section>
        <section id="refund-policy">
          <div className="container text-center">
            <p>
              <b>
                Refund Policy: Once paid there is no refund considered, in case
                of not satisfied with the existing resource we provide a
                resource replacement within 15 days of assessment.
              </b>
            </p>
          </div>
        </section>
        <hr></hr>
        </Template>
    </>
  );
}

export default RefundPolicy;
