import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import Joke from '../components/joke'
import Select from '../components/select'
import BackButton from '../components/backButton'


function ByCategory() {
  const [category, setCategory] = useState(['Select an option']);
  const [selected, setSelected] = useState(category[0]);
  const [joke, setJoke] = useState({length: 0, value: ''});
  
  function getCategories() {
    const URL = 'https://api.chucknorris.io/jokes/categories';
    
    fetch(URL).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setCategory([...category, ...answer]);
      });
  };

  function getJokeByCategory() {
    const URL = 'https://api.chucknorris.io/jokes/random?category=' + selected;
    
    fetch(URL).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setJoke(answer);
      
    });
  };

  function handleCallback(childData:any){
    setSelected(childData)
  }

  useEffect(() => {
    getCategories()    
    if(selected != '' && selected != 'Select an option'){
      getJokeByCategory();
    }
    if(selected == 'Select an option'){
      setJoke({length: 0, value: ''});
    }
  }, [selected]);

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
          Select a category
        </p>

        <div className='flex gap-x-2 items-center mt-2'>
          <Select selected={selected} category={category} parentCallback={handleCallback}/>
          <BackButton />
        </div>

        { joke.length != 0 && 
          <Joke text={joke.value}/>
        }
        
        </main>
    </div>
  )
}

export default ByCategory