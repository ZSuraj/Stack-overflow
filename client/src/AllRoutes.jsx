import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Community from './pages/Community/Community'
import CommunityImages from './pages/Community/CommunityImages'
import CommunityVideos from './pages/Community/CommunityVideos'
import CommunityMyPosts from './pages/Community/CommunityMyPosts'
import Friends from './pages/Friends/Friends'
import DisplayPost from './components/DisplayPost/DisplayPost'



const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Users/:id' element={<UserProfile />} />
            <Route path='/Community' element={<Community />} />
            <Route path='/Community/videos' element={<CommunityVideos />} />
            <Route path='/Community/images' element={<CommunityImages />} />
            <Route path='/Community/myposts' element={<CommunityMyPosts />} />
            <Route path='/Users/friends/:id' element={<Friends />} />
            <Route path='/posts/:id' element={<DisplayPost />} />
        </Routes>
    )
}

export default AllRoutes