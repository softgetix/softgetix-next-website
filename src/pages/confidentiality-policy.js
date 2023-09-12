import React,{useState, useEffect} from 'react';
import Template from "../components/common/Template";
import { useRouter } from 'next/router';
import Head from 'next/head';

function ConfidentialityPolicy() {
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
        <title>Confidentiality Policy - SoftGetix</title>
        <meta name="description" content="" />
        <link rel="canonical" href={ogUrl}></link>
      </Head>
    <Template>
    <section className="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                        <h2 className="heading-section">Confidentiality Policy</h2>
                    </div>
                </div>
            </div>
        </section>
        <section id="confidentiality-policy" className="mb-5">
            <div className="container">
                <p><i>Disclaimer: All the trademarks and all the logos are the property of their respective owners.</i></p>
                <h3>Confidentiality Policy</h3>
                <p>SoftGetix believes in maintaining confidentiality of the clients and keeps their identity anonymous on the website. All the offices and production facilities of SoftGetix are custom-bound. Random checks are carried out to prevent any kind of violation.</p>
                <p>We value the trust entrusted upon us by our clients and see to it that all our employees bind with non-disclosure agreements. That makes us more responsible towards the client.</p>
                <div>
                    <h3>The salient features of SoftGetix’s Security Policy include:</h3>
                    <ol>
                        <li>Strict non-disclosure and non-compete agreements bind all employees.</li>
                        <li>Entry of unauthorized persons into SoftGetix premises is strictly prohibited.</li>
                        <li>Adequate security personnel are present on SoftGetix premises to guard the property.</li>
                        <li>Document storage area is well protected.</li>
                        <li>The entry of employees is restricted to their working area along with time restrictions.</li>
                        <li>No unauthorized access is allowed in the systems area.</li>
                        <li>Nothing can be taken inside the premises without written permission.</li>
                        <li>Each personnel have their own passwords and access to their given computer/workstation is also restricted.</li>
                        <li>Responsibilities are strictly defined and therefore there are no overlapping areas of work.</li>
                    </ol>
                </div>
                <div>
                    <h3>The salient features of SoftGetix Confidentiality Policy include:</h3>
                    <ol>
                        <li>All data and information provided by a client will be confidential and strictly the property of the client.</li>
                        <li>SoftGetix agrees that neither the company nor its staff will disclose any information about the project to any third party without the prior consent of an executive officer of the client.</li>
                        <li>SoftGetix agrees that neither the company nor its staff will reproduce in any way or divulge any tangible or intangible property whatsoever which could reasonably be construed as constituting confidential information of the client.</li>
                        <li>All raw data, directories, printouts, processed data and finalized product will solely be the property of the client.</li>
                        <li>Once the data is approved, SoftGetix will destroy all raw and processed data.</li>
                    </ol>
                </div>
            </div>
        </section>
        <hr></hr>
        </Template>
    </>
  )
}

export default ConfidentialityPolicy
