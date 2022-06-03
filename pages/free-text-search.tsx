import { ChevronLeftIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Joke from '../components/joke'
import BackButton from '../components/backButton'

function FreeTextSearch() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  const [joke, setJoke] = useState({ length: 0, value: '' })
  const [inputStr, setinputStr] = useState('')
  const [searched, setSearched] = useState(false)

  async function getFreeSearch() {
    setSearched(true)
    if (inputStr != '') {
      const { data } = await client.query({
        query: gql`
          query searchJokes($query: String!) {
            searchJokes(query: $query) {
              id
              value
            }
          }
        `,
        variables: {
          query: inputStr,
        },
      })
      const size = data.searchJokes.length
      if (size > 0) {
        const rand = Math.trunc(Math.random() * size)
        setJoke(data.searchJokes[rand])
      } else {
        setJoke({ length: 0, value: '' })
      }
    }
  }

  useEffect(() => {
    setSearched(false)
  }, [inputStr])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chuck Norris React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Chuck Norris React App</h1>

        <p className="mt-3 text-2xl text-blue-500">Be free to search</p>

        <div className="mt-10 flex w-full justify-center gap-x-4 px-2 py-1 ">
          <input
            className="w-1/3 rounded-md border border-black indent-2 hover:border-blue-500 hover:transition hover:duration-300 focus:border-blue-500 focus:outline-none"
            placeholder="ask me something"
            value={inputStr}
            onChange={(event) => {
              setinputStr(event.target.value)
            }}
          ></input>
          <div className="flex items-center">
            <a
              className="mr-2 rounded-md bg-blue-500 px-2 py-2 text-white hover:bg-blue-400 hover:transition hover:duration-300"
              onClick={getFreeSearch}
            >
              Search
            </a>
            <BackButton />
          </div>
        </div>

        {joke.length != 0 && <Joke text={joke.value} />}

        {joke.length == 0 && searched && inputStr != '' && (
          <div className="mt-4 flex items-center gap-x-2">
            <ExclamationCircleIcon
              className="mr-2 h-10 w-10 text-red-500 hover:text-red-400 hover:transition hover:duration-300"
              aria-hidden="true"
            />
            <p className="text-xl font-bold">
              Nothing found, put this big head to work!
            </p>
          </div>
        )}

        {searched && inputStr == '' && (
          <div className="mt-4 flex items-center gap-x-2">
            <ExclamationCircleIcon
              className="mr-2 h-10 w-10 text-red-500 hover:text-red-400 hover:transition hover:duration-300"
              aria-hidden="true"
            />
            <p className="text-xl font-bold">
              Type something first, dummy ass!
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default FreeTextSearch
