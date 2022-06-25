import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Footer: NextPage = () => {
  return (
    <nav className='w-full absolute inset-x-0 bottom-0 h-14'>
    <div className="bg-zinc-200 dark:bg-zinc-800 p-4">
      <div className="flex flex-row justify-center text-zinc-800 dark:text-white w-sm font-medium ">
        <h1>Made with 💜 by <a target='_blank' href="https://rafael-dev.tech" className='hover:text-cyan-400 ease-in duration-150' rel="noreferrer">rafaeldev</a></h1>
      </div>
      </div>
  </nav>
  )
}

export default Footer
