import React from 'react'
import './RightSidebar.css'

const WidgetTags = () => {

  const tags = [ "C", "python", "Javascript", "monogoDB", "node.js", "reactjs", "SQL", "HTML", "CSS", "C++"]

  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-container'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags