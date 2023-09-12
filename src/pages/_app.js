import Head from "next/head";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/custom.css";
import '../styles/about.css'
import '../styles/staffing.css'
import '../styles/dedicated-team.css'
import '../styles/Itstaff.css'


export default function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <meta charSet="UTF-8" />
        {/* <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" /> */}
        <link rel="icon" href="/logo/SG-feviconFULL.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js" defer ></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" defer ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" defer ></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js" defer ></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css"></link>
        </Head>
        <Component {...pageProps} />
    </>
  )
}
