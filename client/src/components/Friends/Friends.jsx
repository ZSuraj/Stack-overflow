import React from 'react'

import Friend from './Friend'

const Friends = ({friendsList, id, token}) => {
    
    const addedFriend = friendsList?.findIndex((friend) => friend === id)

    return(
        <div>
            <Friend friend={addedFriend} id={id} token={token}/>
        </div>
    )
}

export default Friends