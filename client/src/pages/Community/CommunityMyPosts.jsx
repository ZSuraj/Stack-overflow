import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ChatBot from '../../components/ChatBot/ChatBot'
import MyPosts from './MyPosts/Posts'
import '../../App.css'
import './Community.css'

const CommunityMyPosts = () => {
 
  var User = useSelector((state) => (state.currentUserReducer))
  const postsList = useSelector(state => state.postsReducer)


//   var imagesPostList = {
//     _id:'1',
//     votes:2,
//     noOfAnswers:2,
//     questionTitle: "What is a function?",
//     questionBody: "It meant to be",
//     questionTags: ["java", "C", "python", "node js", "mongoDB", "Swift", "C++"],
//     userPosted: "charlie",
//     userId: 1,
//     askedOn: "jan 1",
//     answer: [{
//         answerBody: "Answer",
//         userAnswered: "john",
//         answeredOn: "jan 2",
//         userId:2,
//     }]
//   }

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
  <div className='community-page'>
    <div className="community-head">
      <div className='header'>
          <h4>Stack Overflow Community</h4>
      </div>
      <nav className='community-navbar'>
          <NavLink to="/Community" className='links'><p>Posts</p></NavLink>
          <NavLink to="/Community/images" className='links'><p>Images</p></NavLink>
          <NavLink to="/Community/videos" className='links'><p>Videos</p></NavLink>
          <NavLink to="/Community/myposts" className='links'><p>My posts</p></NavLink>
      </nav>
    </div>
    <div className='community-body'> 
    <div className='post-body'>
        {
            postsList.data === null ? 
            <h1>Loading...</h1>:
            <>
              <MyPosts postsList={postsList.data.reverse()} id={User?.result?._id}/>
            </>
        }
    </div>
    </div>
    </div>
        <ChatBot />
      </div>
    </div>
  )
}

export default CommunityMyPosts