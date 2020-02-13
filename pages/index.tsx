import React from 'react'
import Head from 'next/head'

import { KawaraDate } from '../components/Date'

const Home = () => (
  <>
    <Head>
      <title>Date painting</title>
    </Head>
    <main>
      <KawaraDate date={new Date()}></KawaraDate>
    </main>
    <style jsx>
      {`
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
      `}
    </style>
  </>
)

export default Home
