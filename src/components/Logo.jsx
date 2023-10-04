import React from 'react'
import { BiCameraMovie } from 'react-icons/Bi'
import { Link } from 'react-router-dom'

export default function Logo() {

  return (
    <div className="text-white text-2xl hover:text-red hover:opacity-50 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => location.reload()}>
      <Link to="/"><BiCameraMovie /></Link></div>
  )
}
