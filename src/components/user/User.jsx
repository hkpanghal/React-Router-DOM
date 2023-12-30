import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
  return (
    <div className='py-4 bg-zinc-600 text-center text-white text-3xl m-8'>User: {userid}</div>
  )
}

export default User