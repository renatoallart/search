import React from 'react'

export  function User({name, avatar}) {
  return (
    <div className='flex flex-col items-center w-32 h-25'>
        <img src={avatar} alt="user avatar"/>
        <h2 className='text-xl text-white font-bold text-center'>{name}</h2>
    </div>
  )
}
