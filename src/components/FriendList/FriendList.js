import React, { useEffect, useState } from 'react';


function FriendList() {
  const [friends, setfriends] = useState([]);
  const [page, setpage] = useState(1)

  useEffect(() => {
    fetch('https://reqres.in/api/users?page='+ page,{
        method: 'GET'
    })
    .then(response => response.json())
    .then((data)=>setfriends(data.data))
    .catch(error => console.log(error))
  },[page])

  function removeFriend(itemId){
    const removeUser = friends.filter(item => item.id != itemId)
    setfriends(removeUser);
  }

  function loadMore() {
    if(page==2){
      return ('')
    }
    setpage(page+1)
  }
  return (
    <>
    <div className='main_div'>
        {
            friends.map(item =>(
                <div className='user_div' key={item.id}  > 
                    {item.first_name+ " "+ item.last_name}
                    <img src ={item.avatar}></img>
                    <button className='add_button' onClick={()=>(alert('Friend request is sent'))}>Add Friend</button>
                    <button className='remove_button' onClick={() => removeFriend(item.id)}>Remove</button>
                 </div>   
            ))
        }  
        
    </div>
    <button className='loadMore_button' onClick={loadMore}>Load More</button>
    </>
  )
}

export default FriendList