import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

import fullLogo from '../../../src/images/fullLogo.png'
import logo from '../../../src/images/logo.png'
import search from '../../../src/images/magnifying-glass-solid.svg'
import Avatar from "../Avatar/Avatar";
import { setCurrentUser } from '../../actions/currentUser'
import menu from '../../images/menu.png'
import './Navbar.css'

const Navbar = () => {

    const [mobile, setmobile] = useState(false)
    
    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    
    const handleSearch = () => {
        setmobile(!mobile)
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    
    useEffect(() => {
        const token = User?.token 
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
    },[User?.token, dispatch])

    return(
        <nav className="main-nav">
            <div className="navbar">
                <img src={menu} alt="" className="menu" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"/>
                <Link to='/' className="nav-item nav-logo">
                    <img src={fullLogo} alt="logo" className="hide-btn"/>
                    <img src={logo} alt="logo" width={40} className="logo-menu"/>
                </Link>
                <Link to='/' className="nav-item nav-btn hide-btn">About</Link>
                <Link to='/' className="nav-item nav-btn">Products</Link>
                <Link to='/' className="nav-item nav-btn hide-btn">For teams</Link>
                <form>
                    <input type="text" placeholder="Search..." className="hide-btn"/>
                    {
                        mobile && <input type="text" placeholder="Search..." className="show-input"/>
                    }
                    <img src={search} width="18" className="search_icon" onClick={handleSearch}/>
                </form>
                { User === null ?
                    <Link to='/Auth' className="nav-item nav-button">Log In</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px="13px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className="nav-item nav-button" onClick={handleLogout}>Log out</button>
                    </>        
                }
            </div>
        </nav>
    )
}

export default Navbar