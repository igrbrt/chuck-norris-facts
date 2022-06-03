import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid'
import Joke from '../components/joke'
import BackButton from '../components/backButton'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

function Random() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  const [random, setRandom] = useState({ length: 0, value: '' })

  async function getJoke() {
    const { data } = await client.query({
      query: gql`
        query GetRandomJoke {
          randomJoke {
            id
            value
          }
        }
      `,
    })
    setRandom(data.randomJoke)
  }

  useEffect(() => {
    getJoke()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chuck Norris React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Chuck Norris React App</h1>

        <p className="mt-3 text-2xl text-blue-500">Random Joke</p>

        {random.length != 0 && <Joke text={random.value} />}

        <div className="mt-2 flex items-center">
          <PlusCircleIcon
            className="mr-2 h-10 w-10 cursor-pointer text-green-500 hover:text-green-400 hover:transition hover:duration-300"
            aria-hidden="true"
            onClick={getJoke}
          />
          <BackButton />
        </div>
      </main>
    </div>
  )
}

export default Random
