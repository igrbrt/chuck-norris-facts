import { ChevronLeftIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Joke from '../components/joke'
import BackButton from '../components/backButton'

function FreeTextSearch() {
  
  const [joke, setJoke] = useState({length: 0, value: ''});
  const [inputStr, setinputStr] = useState('');
  const [searched, setSearched] = useState(false);

  function getFreeSearch() {
    setSearched(true)
    if(inputStr != ''){
      const URL = 'https://api.chucknorris.io/jokes/search?query=' + inputStr;
      
      fetch(URL).then(async (serverAnswer) => {
        const answer = await serverAnswer.json();
        const size = answer.total;
        if(size > 0){
          const rand = Math.trunc(Math.random() * size);
          setJoke(answer.result[rand]);
        }else{
          setJoke({length: 0, value: ''});
        }
      });
    }
  };

  useEffect(() => {
    setSearched(false)
  }, [inputStr]);
  

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
          Be free to search
        </p>

        <div className='flex gap-x-4 w-full justify-center px-2 py-1 mt-10 '>

          <input className='w-1/3 border border-black hover:border-blue-500 hover:transition hover:duration-300 focus:outline-none focus:border-blue-500 rounded-md indent-2' placeholder='ask me something' value={inputStr} 
            onChange={ (event) => {setinputStr(event.target.value)}}>
          </input>
          <div className='flex items-center'>
            <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300 mr-2'
              onClick={getFreeSearch}>
              Search
            </a>
            <BackButton />
          </div>
        </div>

        { joke.length != 0 && 
          <Joke text={joke.value}/>
        }

        { joke.length == 0 && searched && inputStr != '' &&
          <div className='flex gap-x-2 items-center mt-4'>
            <ExclamationCircleIcon className="w-10 h-10 text-red-500 hover:text-red-400 hover:transition hover:duration-300 mr-2" aria-hidden="true"/>
            <p className='text-xl font-bold'>Nothing found, put this big head to work!</p>
          </div>
        }

        { searched && inputStr == '' &&
          <div className='flex gap-x-2 items-center mt-4'>
            <ExclamationCircleIcon className="w-10 h-10 text-red-500 hover:text-red-400 hover:transition hover:duration-300 mr-2" aria-hidden="true"/>
            <p className='text-xl font-bold'>Type something first, dummy ass!</p>
          </div>
        }

        </main>
    </div>
  )
}

export default FreeTextSearch