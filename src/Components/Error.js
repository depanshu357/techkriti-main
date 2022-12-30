import React from 'react'
import {Link} from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
        404 Not Found!<br/>
        <Link to="/login">Go to Login Page</Link>
    </div>
    
  )
}
