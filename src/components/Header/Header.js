import axios from 'axios';
import React, { useRef, useState } from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import {RiMessengerFill} from 'react-icons/ri'

function Header() {
  const inputRef = useRef();
  const [value, setvalue] = useState('');

  function add(e){
    axios.post("https://reqres.in/api/users", {
        name: value
    }
    )
    .then(response => {console.log(response);})
    .catch(error => {console.log(error);})
    e.preventDefault();
  }

  return (
    <nav>
        <div className='left'>
            <FaFacebookSquare className='icon' />
            <form onSubmit={add}>
              <input
              type="text"
              value={value}
              ref={inputRef}
              onChange={e => setvalue(e.target.value)}
              /> 
            </form>          
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