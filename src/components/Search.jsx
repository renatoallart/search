import React from 'react'

export function Search({searchInput, setSearchInput}) {
  return (
    <div className=' flex justify-center'>
        <input placeholder='Search for User' value={searchInput} onChange={event => setSearchInput(event.target.value)} 
        className='w-[300px] h-10 focus:outline-none placeholder:text-white bg-slate-400 
            rounded placeholder:p-8 placeholder:text-center focus:pl-4 focus:text-left pl-4 placeholder:font-bold' type="text" />
    </div>
  )
}
