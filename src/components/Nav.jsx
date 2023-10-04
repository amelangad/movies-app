import React, { useContext } from 'react'
import Form from '../components/Form'
import Logo from '../components/Logo'
import { SearchContext } from './SearchContext'

export default function Nav() {

  return (
    <nav className="w-full h-20 flex items-center justify-between px-[10%] bg-transparent fixed bg-milky z-50">
      <Logo />
      <Form />
    </nav>


  )
}