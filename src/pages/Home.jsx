import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <>
        <UserSearch />
        <UserResults />
        {/* <h1>Welcomee</h1> */}
    </>
  )
}

export default Home