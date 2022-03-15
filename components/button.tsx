import Link from 'next/link'
import React from 'react'

export type buttonProps = {
  href: string;
  name: string;
}

function button({href, name}:buttonProps) {
  return (
    <Link href={href}>
        <a className='bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-400 hover:transition hover:duration-300'>
            {name}
        </a>
    </Link>
  )
}

export default button