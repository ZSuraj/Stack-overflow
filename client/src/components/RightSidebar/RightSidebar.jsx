import React from 'react'
import WidgetTags from './WidgetTags'
import Widgets from './Widgets'
import './RightSidebar.css'

const RightSidebar = () => {
  return (
    <aside className='right-side-bar'>
      <Widgets />
      <WidgetTags />
    </aside>
  )
}

export default RightSidebar