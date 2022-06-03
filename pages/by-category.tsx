import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Joke from '../components/joke'
import Select from '../components/select'
import BackButton from '../components/backButton'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

function ByCategory() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  })

  const [category, setCategory] = useState(['Select an option'])
  const [selected, setSelected] = useState(category[0])
  const [joke, setJoke] = useState({ length: 0, value: '' })

  async function getCategories() {
    const { data } = await client.query({
      query: gql`
        query GetCategories {
          categories
        }
      `,
    })
    setCategory([...category, ...data.categories])
  }

  async function getJokeByCategory() {
    const { data } = await client.query({
      query: gql`
        query GetRandomJoke($category: String) {
          randomJoke(category: $category) {
            id
            value
          }
        }
      `,
      variables: {
        category: selected,
      },
    })
    setJoke(data.randomJoke)
  }

  function handleCallback(childData: any) {
    setSelected(childData)
  }

  useEffect(() => {
    getCategories()
    if (selected != '' && selected != 'Select an option') {
      getJokeByCategory()
    }
    if (selected == 'Select an option') {
      setJoke({ length: 0, value: '' })
    }
  }, [selected])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Chuck Norris React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Chuck Norris React App</h1>

        <p className="mt-3 text-2xl text-blue-500">Select a category</p>

        <div className="mt-2 flex items-center gap-x-2">
          <Select
            selected={selected}
            category={category}
            parentCallback={handleCallback}
          />
          <BackButton />
        </div>

        {joke.length != 0 && <Joke text={joke.value} />}
      </main>
    </div>
  )
}

export default ByCategory
