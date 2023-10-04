import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Post from './Post';
import Aside from './Aside';
import { MdFavorite } from "react-icons/md";
import { FaTrophy } from 'react-icons/Fa'
import { SearchContext } from './SearchContext.js';
import '../index.css'


const apiKey = '3aa1a549';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&s`;


function MoviesList() {
    const { query, result, setResult, list, setList, setFavourite } = useContext(SearchContext);
    const [red, setRed]  = useState(false)

    function changeColor(e) {
        e.target.classList.toggle('red')
    }


    const searchMovies = async (props) => {
        try {
            const res = await fetch(`${url}=${query}`)
            const data = await res.json()
            await setResult(data.Search.map((item, id) => {
                return <div key={id}
                    className="flex flex-col justify-center items-center">
                    <Post
                        Id={id}
                        Title={item.Title}
                        Poster={item.Poster}
                        Year={item.Year}
                        Type={item.Type} />
                    <div className="flex flex-row justify-center gap-5 items-center">
                        <button type="submit" 
                            onClick={() => list.includes(item.Title)? setList(list.filter(el => el !== item.Title)) : setList(prevList => { return [...prevList, item.Title] })}>
                            &nbsp; <span className={`${red? 'red' : 'white'} text-2xl`} onClick={(id) => setRed(!red)}><MdFavorite /> </span></button>
                        <button type="submit"
                            onClick={() => setFavourite(item.Title)}>
                            &nbsp; <span className="text-2xl text-white :clicked:text-3xl" ><FaTrophy /> </span></button>
                    </div></div>
            }))
        }

        catch (err) { return setResult(result) }
    }

    useEffect(() => {
        searchMovies()
    }, [query, list]);


    return (
        <div className="flex flex-col w-full lg:w-full bg-transparent min-h-[100vh] relative">
            <div className="w-3/4 px-10 lg:px-0 mt-[10%] flex-col">
                <ul
                    className="flex flex-wrap items-center justify-center lg:justify-start px-[10%] gap-10 text-white">
                    {result}
                </ul>
            </div>
        </div>

    )

}
export default MoviesList