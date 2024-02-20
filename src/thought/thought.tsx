import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Thought(){
    const [message, setMessage]: any = useState("");
 const [password, setPassword]: any = useState("");
    const [user, setUser]: any = useState(1);
    const [users, setUsers]: any = useState([]);
    const [show, setShow]: any = useState(false);
    const [done, setDone]: any = useState(false);
  

        const addUser = () =>{

            var needPassword = false
            users.map((u: any)=>{
                
                if(u.id==user){
                    needPassword = u.password
                }
            })

            if(needPassword && password==""){
                setShow(true)
            }else{
           fetch("https://myblogbackend.pedroduarte.online/addThought",{
                method: "POST",
                    body: JSON.stringify({
                    name : message,
                    password : password,
                    user: user
                })
            })
            .then((res)=>{
                return res.json()
            })
            .then((res: any)=>{
                if(res.response=='Success'){
                    setMessage("")
                    setDone(true)
                }else{
                    alert("Error")
                }
            })
            }

        }

        
        const updateMessage = (value: any) =>{
            setMessage(value)
            setDone(false)
        }

    

        const updateUser = (value: any) =>{
            setUser(value)
        }

        useEffect(()=>{
            fetch("https://myblogbackend.pedroduarte.online/users")
            .then((res)=>{
                return res.json()
            })
            .then((res: any)=>{
                setUsers(res)
            })
        },[])

    return (
        <>

<div className='flex justify-between w-full	fixed text-white shadow bg-slate-900	 p-4'>
      
      <Link to="/">Blog </Link>
      </div>
{
    show ? <div className='w-full bg-indigo-950/75 h-screen fixed flex justify-center items-center		'>
<div className=" w-3/12 bg-violet-200	p-5">
    <label >
        Password
<input className="rounded p-2 text-black w-full mt-2 mb-2" type="text" onChange={(e)=> setPassword(e.target.value)} />
<button onClick={()=> setShow(false)} className="text-white bg-slate-950	w-full text-sm rounded	p-2">Seguinte</button>
    </label>
</div>
    </div>: <>

    </>
}

<div className="bg-gray-950		h-screen	 flex justify-center 	items-center	 ">

        <div className="bg-gray-800	 w-4/12 h-fit p-10">

    <div>
         <label className="text-white">
            message 
            <input value={message} onChange={(e) => updateMessage(e.target.value)} className="block mt-3 rounded border-2 w-full text-black" type="text" />
        </label>
        </div>




        <div className="mt-3 mb-3">


        <label className="text-white">
            Users
            <select  onChange={(e) => updateUser(e.target.value)} className="mt-3 block text-black w-full p-2 rounded">
        {users.map((item: any)=>{
            return <option value={item.id}>{item.name}</option>
        })}
            </select>
        </label>
        </div>

     
        <button onClick={()=> addUser()}  className={done ? "bg-lime-500 text-white w-full rounded p-1" : "bg-sky-500 text-white w-full rounded p-1"}>Salvar</button>
       
</div>

</div>
         </>
    )
}