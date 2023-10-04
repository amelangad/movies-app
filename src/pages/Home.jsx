import React, { useState } from 'react'
import Nav from '../components/Nav'
import Movies from '../components/Movies'
import Footer from '../components/Footer'
import { SearchContext } from '../components/SearchContext'
import Header from '../components/Header'
import { useContext } from 'react'



function Home() {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState([]);
  const [result, setResult] = useState([]);
  const [list, setList] = useState([]);
  const [favourite, setFavourite] = useState('Star Wars');

  return (
    <div className ="w-full min-h-[100vh]">
       <SearchContext.Provider value={{search, setSearch, query, setQuery, result, setResult, list, setList, favourite, setFavourite}}>
      <Nav />
      {!search? 
       <Header/> :
      <Movies/>
      }
      </SearchContext.Provider>
      <Footer />
      </div>
  )
}

export default Home
