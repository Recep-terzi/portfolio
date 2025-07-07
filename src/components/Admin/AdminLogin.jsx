import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        try {
            fetch('https://portfolio-backend-ctua.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            }).then(res => res.json()).then(data => { console.log(data); localStorage.setItem('auth', data.token); navigate('/admin') })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('auth')

        if(!token){
            navigate('/login')
            return;
        }
    },[])

    return (
        <>
            <div className='absolute left-0 right-0 top-0 bottom-0 !m-auto w-[400px] h-[400px] justify-around bg-white flex  text-black flex-col p-6 rounded-lg'>
                <p className='font-bold text-[40px] text-center'>Admin Login</p>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6 mt-10'>
                    <div className='flex flex-col'>
                        <p className='text-[12px] font-normal'>Username</p>
                        <input type="text" placeholder='Enter username...' onChange={e => setUsername(e.target.value)} value={username} className='border-b border-gray-500 h-12 px-2 focus:border-b focus:outline-none placeholder:text-gray-400' />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[12px] font-normal'>Password</p>
                        <input type="password" placeholder='Enter Password...' onChange={e => setPassword(e.target.value)} value={password} className='border-b border-gray-500 h-12 px-2 focus:border-b focus:outline-none placeholder:text-gray-400' />
                    </div>
                    <button type='submit' className='bg-blue-500 text-white rounded-sm h-12 hover:scale-[1.02] transition-all hover:bg-blue-400 cursor-pointer'>Login</button>
                </form>
            </div>
        </>
    )
}

export default AdminLogin