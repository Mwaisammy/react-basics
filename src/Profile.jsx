import React from 'react'
import Card from './Card'

function Profile(props) {
  return (
   <div>
    <h1>My name is {name}</h1>
 
    <Card  {...props} />
   </div>
  )
}

export default Profile