import React from 'react'

function Counter({firstName,lastName, age: employeeAge}) {

  
  return (
    <div>
<h3>Employee name: {firstName} {lastName} who's age {employeeAge}</h3>
        
    </div>
  )
}

export default Counter