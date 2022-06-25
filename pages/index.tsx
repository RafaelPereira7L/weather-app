import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Input from '../components/input'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
    <Head>
    <title>Weather App Next.js</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="Weather App" />
    <link rel="icon" href="https://images.emojiterra.com/twitter/v14.0/512px/2601.png" />
    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
  </Head>
    <main className='bg-slate-300 dark:bg-zinc-900 flex flex-col items-center justify-center h-screen'>
      <Input />

    </main>

  <Footer/>

</>
  )
}

export default Home
