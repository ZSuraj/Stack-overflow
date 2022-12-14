import React from 'react'
import { useDispatch } from 'react-redux'
import { makeFriends } from '../../actions/users'

const Friend = ({ friend, id, token }) => {

  const dispatch = useDispatch()

  const handleAddFriend = () => {
    dispatch(makeFriends(id, 'addFriend', token))
  }

  const handleRemoveFriend = () => {
    dispatch(makeFriends(id, 'removeFriend', token))
  }

  if (friend === -1) 
  {
    return(
      <button onClick={handleAddFriend}>Add friend</button>
    )
  }
  else if(friend !== -1)
  {
    return(
      <button onClick={handleRemoveFriend}>Remove friend</button>
    )
  }
}

export default Friend