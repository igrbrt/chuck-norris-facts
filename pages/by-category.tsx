import Head from 'next/head'
import React from 'react'

function ByCategory() {
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
          Select a Category
        </p>

        <p className="mt-3 text-2xl">
          Insert a Joke from API
        </p>

        <p className="mt-3 text-2xl">
          Norris, Chuck (ever)
        </p>

        
        </main>
    </div>
  )
}

export default ByCategory