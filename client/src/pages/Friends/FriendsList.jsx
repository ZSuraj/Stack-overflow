import React from 'react'
import { useSelector } from 'react-redux'
import Friend from './Friend'

const FriendsList = ({friendsList}) => {

    const users = useSelector((state) => state.usersReducer)

  return (
    <div className='user-list-container'>
        {
            users.map((user) => (
                <div key={user?._id}>
                    {
                        friendsList.map((friend) => {
                            if(user?._id === friend)
                            {
                                return(
                                    <Friend friend={friend} key={friend} name={user.name}/>
                                )
                            }
                        })

                    }
                </div>
            ))
        }
    </div>
  )
}

export default FriendsList