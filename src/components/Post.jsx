import React from 'react'


function Post(props) {

  return (
    <li className="hover:scale-105 transition ease-in-out duration-200 cursor-pointer rounded-[20%] p-[5%]">
      <h1 className="text-white text-center p-2"> Title: {props.Title} ({props.Year})</h1>
      <img src={props.Poster} className="rounded-[7px] object-cover">
      </img>
    </li>

  )
}

export default Post