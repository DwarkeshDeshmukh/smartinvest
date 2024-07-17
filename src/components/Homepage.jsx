import React from 'react'
import Navbar from './Reuse/Navbar'
import ChatBot from './Chatbot'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center h-screen text-white bg-dark">
        <ChatBot />
      </div>
    </div>
  )
}

export default Homepage
