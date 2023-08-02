import React from 'react'
import { useSelector } from 'react-redux'

const Home  = () => {
  const {user} = useSelector((state) => state.users);
  return (
    <div className='text-2xl font-semibold text-gray-600'>
     Hey {user?.username}
    </div>
  )
}

export default Home;