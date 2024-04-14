import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {

    // const data=useLoaderData()
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/ShanuRathore')
        .then(response=>response.json())
        .then(data=>{
            setData(data)
        })
    },[])

  return (
    <div className='flex text-center m-4 bg-gray-600 text-black p-4 text-4xl' 
        style={{fontWeight:'bolder',display:'flex',alignItems:'center'}}>
      <img src={data.avatar_url} alt="Git picture" width={300} style={{borderRadius:'50%'}}/>
      <div style={{flexGrow:1,display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <p>Github followers:{data.followers}</p>
      </div>
    </div>
  )
}

export default Github

//we can alos use this method to pass upi

// export const githubInfoLoader=async()=>{
//   const response=await fetch('https://api.github.com/users/ShanuRathore')
//   return await response.json()
// }


//call api tp get followers
//we want to call for api whenever this component is loaded , or we load this page
//to do so we have hook name useEffect
