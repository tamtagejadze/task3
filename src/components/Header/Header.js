import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {RiMessengerFill} from 'react-icons/ri'

function Header() {
  return (
    <nav>
        <div className='left'>
            <FaFacebookSquare className='icon' />
            <input/>           
        </div>
        <div className='right'>
            <li>Home</li>
            <FaUserFriends className="icon" />
            <RiMessengerFill className="icon" />
            <li><button>Sing Out</button></li>
        </div>        
    </nav>
  )
}

export default Header