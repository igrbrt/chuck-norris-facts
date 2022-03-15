import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button';

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

        <div className='flex justify-evenly w-full mt-10 space-x-4'>
          
          <Button href="/random" name="Random"/>
          <Button href="/by-category" name="Category"/>
          <Button href="/free-text-search" name="Free Text Search"/>
          
        </div>
        
      </main>
    </div>
  )
}

export default Home
