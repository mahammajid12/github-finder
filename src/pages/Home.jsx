import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
        <h2 className='mb-8'>This website is used to find github users, their profile and reposisotories info...</h2>
        <UserSearch />
        <UserResults />
        {/* <h1>Welcomee</h1> */}
    </>
  )
}

export default Home