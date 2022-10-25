import { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchUsersData } from '../fetchers/fetchUsersData'
import { Search } from '../components/Search'
import { UsersList } from '../components/UsersList'

export  function Home() {

  const { data, isError, error, isLoading } = useQuery('Users', fetchUsersData, { staleTime: 100000 })
  const [searchInput, setSearchInput] = useState('')

  if (isLoading) {
      return <div> <h2>Loading...</h2></div>
  }

  if (isError) {
      return <div> <h2>{error.message}</h2></div>
  }

  const filteredList = data.filter( user => user.name.toLowerCase().includes(searchInput.toLowerCase()))


  return (
    <section className='bg-[#121212]'>
      <h1 className='p-4 text-white text-center text-2xl font-bold'> Users List</h1>
      <Search setSearchInput={setSearchInput}/>
      <UsersList filteredList={filteredList} searchInput={searchInput}/>
    </section>
  )
}
