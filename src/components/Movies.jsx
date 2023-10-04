import React, {useState, useContext} from 'react'
import Aside from './Aside'
import MoviesList from './MoviesList'
import {FaRegListAlt, FaRegTimesCircle} from 'react-icons/Fa'

export default function Movies() {

  const [open, setOpen] = useState(true)

  return (
<div className ="w-full h-full">
<div className ={`${open? 'open' : 'close'} fixed right-0 top-0 bg-black lg:bg-milky text-white font-roboto w-full lg:w-1/3 h-full p-[10%] lg:p-0 z-20 flex justify-center items-center transition-`}>
            <Aside/>
  </div>
  <div className =" text-white text-2xl fixed top-20 right-20 cursor-pointer z-50" onClick = {() =>setOpen(!open)}>
            {open? <FaRegTimesCircle/> : <FaRegListAlt/> }
            </div>
<MoviesList/>
</div>
  )
}
