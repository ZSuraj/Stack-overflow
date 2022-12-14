import React from 'react'
import { Link } from 'react-router-dom'

function Friend({friend, name}) {
  return (
        <Link to={`/Users/${friend}`} className='user-profile-link'>
            <h3>{ name.charAt(0).toUpperCase() }</h3>
            <h5>{ name }</h5>
        </Link>
  )
}

export default Friend