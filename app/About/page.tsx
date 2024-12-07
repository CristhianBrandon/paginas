import Link from 'next/link'
import React from 'react'
import Home from '../page'
import Aabout from '@/components/Aabout'

const about = () => {
  return (
    <div>
        <Link href="./">
        <button>Home</button>
        </Link>
        <Link href="./">
        <button>About</button>
        </Link>
        <Link href="./">
        <button>Home</button>
        </Link>
        <Link href="./">
        <button>Home</button>
        </Link>
        <Aabout></Aabout>
    </div>
  )
}

export default about