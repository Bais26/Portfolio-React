import React from 'react'
import Hero from './Hero'
import Navbar from '../../component/Navbar'
import Service from './Service'
import Project from './Project'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Project/>
    </div>
  )
}
