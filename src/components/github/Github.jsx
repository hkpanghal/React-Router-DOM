import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' 

function Github() {
    // const [data,setData] =  useState([])

    const data = useLoaderData();
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/hkpanghal')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='p-8 bg-zinc-600 text-center text-white text-3xl m-8'>Github Followers: {data.followers} 
    
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubLoader = async ()=>{
     const res = await  fetch('https://api.github.com/users/hkpanghal')

    return res.json()

}