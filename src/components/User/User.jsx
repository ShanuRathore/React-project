import React from 'react'
import { useParams } from 'react-router-dom'

//Capturing dynamic data using React router
function User() {
    const {userid} = useParams()        //hook used to get the parameters from the url
  return (
    <div>
      <div className='bg-gray-600 text-white text-3xl p-4 flex justify-center'>User : {userid}</div>
    </div>
  )
}

export default User
