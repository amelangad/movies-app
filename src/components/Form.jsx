import React, { useContext } from 'react'
import { SearchContext } from './SearchContext';

function Form() {

  const { search, setSearch, setQuery, setResult } = useContext(SearchContext);
  function onSubmit(e) {
    e.preventDefault()
    setQuery(search);
    setResult('brak filmu');
  }

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <h1
        className="hidden lg:flex flex-row justify-center items-center px-5 text-white">
        Search for movies...
      </h1>
      <form
        onSubmit={onSubmit}
        className="w-1/2 flex justify-center items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What movie for today? :)"
          className="justify-center items-center w-full h-12 rounded-[5px] pl-[10px]">
        </input>
        <button
          type="submit"
          className="w-10 lg:w-20 h-12 ml-5 cursor-pointer bg-white text-black rounded-[7px] px-[10%] flex justify-center items-center hover:bg-black hover:text-white transition-all duration-200 ease-in">Search</button>
      </form>
    </div>
  )
}

export default Form