
import { useState, useEffect } from 'react'
import {  Link } from "react-router-dom";

export default function Home(){

    const [thoughts, setThought]:any = useState([])


    useEffect(()=>{
      fetch("https://myblogbackend.pedroduarte.online/thoughts")
      .then((response)=>{
        return response.json()
      })
      .then((res)=>{
        setThought(res)
      })
    },[])

   
    
    return (
        <>
          <div className='flex justify-between	 text-white shadow bg-slate-900	 p-4'>
      
      Blog
        <button  className='bg-neutral-300	hover:bg-neutral-400	text-black	p-1 rounded'><Link to="/thoughts">+ Thought</Link></button>
      </div>

    <div className='p-5'>
      {thoughts.map((thought: any)=>{
        return <div key={thought.id} className='shadow p-4'>
          {
            thought.user_auth==1 ?  <div className={thought.user.active? 'bg-green-400 text-white inline-block p-1 rounded text-xs mr-2' : 'bg-slate-900 text-white inline-block p-1 rounded text-xs mr-2'}>{thought.user.active? 'Online' : 'Offline'}</div> 
      :  <></>
          }
         {
          thought.user_auth==1? <span>{thought.user.name}</span> : <span></span>
         }  
        <div className='mt-2'>
        {thought.message}
        </div>
        </div>
      })}
    </div>
         </>
    )
}