import React from 'react'
import { NavLink } from 'react-router-dom'
import globe from '../../images/globe-icon.png'
import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <>
    <div className="left-side-bar">
        <nav className="side-navbar">
          <NavLink to='/' className='side-nav-links' activeclassName='active'><p>Home</p></NavLink>
            <div className='side-nav-div'>
              <div>
                <p>PUBLIC</p>
              </div>
                <NavLink to='/Questions' style={{paddingLeft:"10px"}} className='side-nav-links' activeclassName='active'>
                    <img src={globe} alt="Globe" width={17}/>
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' style={{paddingLeft:"40px"}} className='side-nav-links' activeclassName='active'><p>Tags</p></NavLink>
                <NavLink to='/Users' style={{paddingLeft:"40px"}}className='side-nav-links' activeclassName='active'><p>Users</p></NavLink>
                <NavLink to='/Community' className='side-nav-links' activeclassName='active'><p>Community</p></NavLink>
            </div>
        </nav>
      </div>
        <div className="mobile-left-side-bar offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{width:"164px"}}>
        <nav className="side-mobile-navbar">
          <NavLink to='/' className='side-nav-links' activeclassName='active'><p>Home</p></NavLink>
            <div className='side-nav-div'>
              <div>
                <p>PUBLIC</p>
              </div>
                <NavLink to='/Questions' style={{paddingLeft:"10px"}} className='side-nav-links' activeclassName='active'>
                    <img src={globe} alt="Globe" width={17}/>
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' style={{paddingLeft:"40px"}} className='side-nav-links' activeclassName='active'><p>Tags</p></NavLink>
                <NavLink to='/Users' style={{paddingLeft:"40px"}}className='side-nav-links' activeclassName='active'><p>Users</p></NavLink>
                <NavLink to='/Community' className='side-nav-links' activeclassName='active'><p>Community</p></NavLink>
            </div>
        </nav> 
    </div>
    </>
  )
}

export default LeftSidebar


