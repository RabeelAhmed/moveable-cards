import React from 'react'
import Background from "./components/Background"
import Foreground from './components/Foreground'

export default function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 relative'>
      <Background/>
      <Foreground/>
    </div>
  )
}
