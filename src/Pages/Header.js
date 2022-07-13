import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const[showmenu, setShowmenu] = useState(false)
  return (
    <nav className='header'>
      <div className='header-left'>
        <div className='header-nav'>
            <div className='image'>
              <img src="/Assets/Logo.svg" alt=""/>
            </div>
          <div  className={showmenu ? 'nav-ul-mobile' : 'nav-ul'} onClick={()=>setShowmenu(false)}>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <span className='mobile-menu-icon' onClick={()=>setShowmenu(!showmenu)}>{showmenu ?<FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}</span>
        </div>
        <div className='header-text'>
          <h1>Post when your audience is most active.</h1>
          <p>with TimeNow, automatically schedule your posts on Twitter, LinkedIn and Instagram to post when your followers are most active.</p>
          <div className='text-button'>
            <button>Start Scheduling</button>
            <main>View Demo</main>
          </div>
          <div className='header-data'>
            <img src='/Assets/Shield.svg' alt=''/>
            <p>TimeNow Does not sell your data.Learn More</p>
          </div>
        </div>
      </div>
      <div className='header-right'>
        <div className='header-button'>
          <button>Start Scheduling</button>
        </div>
        <div className='right-image'>
          <img src="/Assets/Mockup.png" alt=''/>
        </div>
      </div>
    </nav>
  )
}

export default Header