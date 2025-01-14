import React, { useEffect, useState } from 'react'
import useAxios from '../Hooks/useAxios';
import DataGridView from '../Components/DataGridView';
const columns = [
    { field: 'id', headerName: 'شناسه', width: 150 },
    { field: 'name', headerName: 'نام', width: 150 },
    { field: 'useName', headerName: 'نام کاربری', width: 150 },
    { field: 'password', headerName: 'رمز عبور', width: 150 },
  ];
   const initialaxsios={url:'http://localhost:5062/api/User',method:'get',
    headers:{'accept': 'text/plain'}
    ,body:null
  };
const Home = () => {
  const [axsiosobject, setaxsiosobject] = useState(initialaxsios)
  const { data, error, loading } = useAxios(axsiosobject);
  const [user, setUser] = useState({ name: "", useName: "", password: "" })
  const HandelSubmit = () => {
      setaxsiosobject((old)=>({
        ...old,method:'post',
        body:user,
        headers: {
          ...old.headers,
          'Content-Type': 'application/json', // مقدار جدید
        },
      }))
  }
  
  return (
    <div>
      <form style={{ padding: '10px', border: '1px solid gray', borderRadius: '3px', margin: '20px 0', display: 'flex', justifyContent: 'space-evenly' }}>
        <input type='text' placeholder='Name' onChange={(e) => setUser((old) => ({ ...old, name: e.target.value }))} />
        <input type='text' placeholder='UserName' onChange={(e) => setUser((old) => ({ ...old, useName: e.target.value }))} />
        <input type='text' placeholder='Password' onChange={(e) => setUser((old) => ({ ...old, password: e.target.value }))} />
        <button type='button' onClick={HandelSubmit}>Submit</button>
      </form>


      <DataGridView rows={data} columns={columns} />
    </div>
  )
}

export default Home   