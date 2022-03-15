import { PlusCircleIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'

export type jokeProps = {
    text: string;
  }

function joke({text}:jokeProps) {

    useEffect(() => {

        if (typeof window !== 'undefined') {
            var WebFont = require('webfontloader');
        
            WebFont.load({
            google: {
                families: ['Bebas Neue', 'Sansita Swashed', 'Pacifico'],
            },
            });
        }
        
    }, []);

  return (
    <div className='w-1/2 mt-10 text-right'>
        <p className="mt-3 text-2xl" style={{fontFamily: 'Bebas Neue'}}>
        <span className='font-bold text-6xl'>“</span>
        <span className='font-bold' style={{fontFamily: 'Sansita Swashed'}}>
            {text}
        </span>
        <span className='font-bold text-6xl'>”</span>
        </p>

        <p className="mt-3 text-2xl text-right">
        Norris, Chuck.
        </p>
    </div>
  )
}

export default joke