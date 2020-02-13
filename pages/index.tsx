import React from 'react'
import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Date painting</title>
    </Head>
    <main>
      <section className="date">{new Date().toLocaleDateString()}</section>
    </main>
    <style jsx>
      {`
        @font-face {
          font-family: "kawara";
          src: url("OnKawara-Regular.otf")
        }

        main {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        section.date {
          font-family: kawara;
          font-size: 10vw;
        }
      `}
    </style>
  </>
)

export default Home
