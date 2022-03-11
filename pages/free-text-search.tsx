import Head from 'next/head'
import React from 'react'

function FreeTextSearch() {
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
          Be free to search
        </p>

        <div className='flex gap-x-4 w-1/2 px-2 py-1 mt-10'>

          <input className='w-[300px] border border-black hover:border-blue-500 hover:transition hover:duration-300 focus:outline-none focus:border-blue-500 rounded-md placeholder:px-2' placeholder='ask me something'>
          </input>
          <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300'>
            Random
          </a>
        </div>

        <p className="mt-10 text-2xl">
          Insert a Joke from API
        </p>

        <p className="mt-10 text-2xl">
          Norris, Chuck (ever)
        </p>

        
        </main>
    </div>
  )
}

export default FreeTextSearch