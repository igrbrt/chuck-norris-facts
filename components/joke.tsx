import React, { useEffect } from 'react'

export type jokeProps = {
  text: string
}

function joke({ text }: jokeProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      var WebFont = require('webfontloader')

      WebFont.load({
        google: {
          families: ['Bebas Neue', 'Sansita Swashed', 'Pacifico'],
        },
      })
    }
  }, [])

  return (
    <div className="mt-10 text-right">
      <p className="mt-3 text-2xl" style={{ fontFamily: 'Bebas Neue' }}>
        <span className="text-6xl font-bold">“</span>
        <span className="font-bold" style={{ fontFamily: 'Sansita Swashed' }}>
          {text}
        </span>
        <span className="text-6xl font-bold">”</span>
      </p>

      <p className="mt-3 text-right text-2xl">Norris, Chuck.</p>
    </div>
  )
}

export default joke
