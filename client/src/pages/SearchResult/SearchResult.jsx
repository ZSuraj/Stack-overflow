import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChatBot from '../../components/ChatBot/ChatBot'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import User from '../Users/User'

const SearchResult = () => {
  
    const users = useSelector((state) => state.usersReducer)
    const {name} = useParams()

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "400"}}>SearchResult</h1>
                <div className='user-list-container'>
                    {
                        users.map((user) => {
                            if (user.name === name)
                            {
                               return (
                                    <User user={user} key={user?._id} />
                                )
                            }
                        })
                    }
                </div>
            </div>
            <ChatBot />
        </div>
  )
}

export default SearchResult