import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Select from '../components/select'
import BackButton from '../components/backButton'
import { useApolloClient } from '@apollo/client'
import { CATEGORIES, RANDOM } from '../graphql/queries/queries'
import RandomCategoryJoke from '../components/randomCategoryJoke'

function ByCategory() {
  const client = useApolloClient()
  const [category, setCategory] = useState(['Select an option'])
  const [selected, setSelected] = useState(category[0])
  const [switchJoke, setSwitchJoke] = useState(false)

  async function getCategories() {
    const { data } = await client.query({
      query: CATEGORIES,
    })
    setCategory([...category, ...data.categories])
  }

  function handleCallback(childData: any) {
    setSelected(childData)
  }

  useEffect(() => {
    if (category.length === 1) {
      getCategories()
    }
    if (selected != '' && selected != 'Select an option') {
      setSwitchJoke(true)
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

        {switchJoke && (
          <RandomCategoryJoke joke={''} selected={selected} type={RANDOM} />
        )}
      </main>
    </div>
  )
}

export default ByCategory
