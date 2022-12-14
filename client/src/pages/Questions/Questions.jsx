import React from 'react'
import MainSide from '../../components/HomeMainSide/Mainbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import '../../App.css'
import ChatBot from '../../components/ChatBot/ChatBot'


const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
    <div className='home-container-2'>
      <MainSide />
      <RightSidebar />
      <ChatBot />
    </div>
    </div>
  )
}

export default Questions