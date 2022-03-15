import { ChevronLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

function backButton() {
  return (
    <Link href='/'>
        <ChevronLeftIcon className="w-8 h-8 text-white bg-blue-500 rounded-full hover:text-blue-100 hover:transition hover:duration-300 cursor-pointer" aria-hidden="true"/>
    </Link>
  )
}

export default backButton