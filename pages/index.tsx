import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chuck Norris React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Chuck Norris React App
        </h1>

        <p className="mt-3 text-2xl">
          Let's laught with Chuck :)
        </p>

        <div className='flex justify-around w-full mt-10'>
          <Link href="/random">
            <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300'>
              Random
            </a>
          </Link>
          <Link href="/by-category">
            <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300'>By Category</a>
          </Link>
          <Link href="/free-text-search">
            <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300'>Free Text Search</a>
          </Link>
        </div>
        
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
