import React from 'react'
import { useSelector } from 'react-redux'
import ChatBot from '../../components/ChatBot/ChatBot'
import FriendsList from './FriendsList'

const Friends = () => {

  const currentUser = useSelector((state) => state.currentUserReducer)

  return (
    <div>
        <div className="home-container-2" style={{marginTop: "30px"}}>
            <h1 style={{fontWeight: "400"}}>Friends</h1>
            <FriendsList friendsList={currentUser?.result.friends}/> 
        </div>
        <ChatBot />
    </div>
  )
}

export default Friends