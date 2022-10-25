
import { useMemo, useRef, useState } from "react"

export function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === "") return
    setItems(prev => {
      return [...prev, value]
    })

    inputRef.current.value = ""
  }

  return (
    <>
      Search:
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}
    </>
  )
}


import { useRef, useState, useMemo } from 'react'

function TodoList({filteredList}) {
  return (
    <section className='flex flex-col gap-4  items-center'>
      <h2 className='text-2xl font-bold '>Todo List</h2>
      <ul>
      {filteredList.map((todo, index) => <li key={index}>{todo}</li> )}
    </ul>
    </section>
  )
}

function TodoForm({ addTodoToList }) {

  const todo = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const { value } = todo.current
    addTodoToList(value)
    todo.current.value = ''

  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-4 justify-center m-6'>
      <input ref={todo} type="text" className=' w-60 h-11 border-2 border-black placeholder:Search' />
      <button className='bg-red-400 p-2'>Submit</button>
    </form>
  )
}

function SearchTodo({setSearch, search}){
  return (
    <div>
      Todo Search
      <form  className='flex gap-4 justify-center m-6'>
      <input onChange={(e) => setSearch(e.target.value)} value={search}  type="text" className=' w-60 h-11 border-2 border-black placeholder:Search' />
      
    </form>
    <div>
      <h2>{search}</h2>
    </div>
    
    </div>
  )

}

export function App() {

  const [todoList, setTodoList] = useState([])
  const [search, setSearch] = useState('')

  function addTodoToList(todo) {
    setTodoList([...todoList, todo])
  }
  console.log(typeof search,search,'outside' )

  const filteredList = todoList.filter(item => {
    console.log(typeof search,search,'inside' )
    console.log(item.includes(search),'filter')
        return item.includes(search)
      })

  // const filteredList = useMemo(() => {
  //   return todoList.filter(item => {
  //     return item.toLowerCase().includes(search.toLowerCase())
  //   })
  // }, [todoList, search])


 console.log(filteredList)
  return (
    <main>
      <TodoForm addTodoToList={addTodoToList} />
      <TodoList filteredList={filteredList}/>
      <SearchTodo setSearch={setSearch} search={search} />
    </main>
  )
}
