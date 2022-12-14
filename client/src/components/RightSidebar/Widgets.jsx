import React from 'react'
import './RightSidebar.css'
import pen from '../../images/pen-solid.svg'
import message from '../../images/message-solid.svg'
import stbw from '../../images/st-bw-icon.png'

const Widgets = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='widget-div-1'>
            <div className='widget-div-2'>
                <img src={pen} alt="pen" width={14} />
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className='widget-div-2'>
                <img src={pen} alt="pen" width={14}/>
                <p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>
        <h4>Features on META</h4>
        <div className='widget-div-1'>
            <div className='widget-div-2'>
                <img src={message} alt="comment" width={14}/>
                 <p>Review queue workflows - Final release</p>
            </div>
            <div className='widget-div-2'>
                <img src={message} alt=""width={14}/>
                <p>Please welcome Valued Associates: #958 - V2Blast - SpencerG</p>
            </div>
            <div className='widget-div-2'>
                <img src={stbw} alt=""width={14}/>
                <p>Outdates answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='widget-div-1'>
            <div className='widget-div-2'>
            <p>38</p>
            <p>why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='widget-div-2'>
            <p>20</p>
            <p>What is the best course of action when a user was high enough rep to...</p>
            </div>
            <div className='widget-div-2'>
            <p>14</p>
            <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widgets