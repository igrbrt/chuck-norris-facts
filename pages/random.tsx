import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { PlusCircleIcon } from '@heroicons/react/solid'
import Joke from '../components/joke'
import BackButton from '../components/backButton'

function Random() {
  const [random, setRandom] = useState({length: 0, value: ''});

  function getJoke() {
    const URL = 'https://api.chucknorris.io/jokes/random';
  
      fetch(URL).then(async (serverAnswer) => {
          const answer = await serverAnswer.json();
          setRandom(answer);
      });
  };


  useEffect(() => {
    getJoke();
  }, []);

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

        <p className="mt-3 text-2xl text-blue-500">
          Random Joke
        </p>

        { random.length != 0 && 
          <Joke text={random.value}/>
        }

        <div className='flex items-center mt-2'>
          <PlusCircleIcon className="w-10 h-10 text-green-500 hover:text-green-400 hover:transition hover:duration-300 mr-2 cursor-pointer" aria-hidden="true" onClick={getJoke}/>
          <BackButton/>
        </div>
        
        </main>
    </div>
  )
}

export default Random