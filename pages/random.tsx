import Head from 'next/head'
import React, { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid'
import ClientOnly from '../components/clientOnly'
import RandomCategoryJoke from '../components/randomCategoryJoke'
import BackButton from '../components/backButton'
import { useApolloClient } from '@apollo/client'
import { RANDOM } from '../graphql/queries/queries'

function Random() {
  const [random, setRandom] = useState('')
  const client = useApolloClient()

  const getJoke = async () => {
    const { data } = await client.query({
      query: RANDOM,
      fetchPolicy: 'no-cache',
    })
    setRandom(data.randomJoke.value)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chuck Norris React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Chuck Norris React App</h1>

        <p className="mt-3 text-2xl text-blue-500">Random Joke</p>

        <ClientOnly>
          <RandomCategoryJoke joke={random} type={RANDOM} />
        </ClientOnly>

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
