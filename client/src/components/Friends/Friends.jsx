import React from 'react'

import Friend from './Friend'

const Friends = ({friendsList, id, token, button}) => {
    
    const addedFriend = friendsList?.findIndex((friend) => friend === id)

    return(
        <div>
            <Friend friend={addedFriend} id={id} token={token} button={() => button()} />
        </div>
    )
}

export default Friends