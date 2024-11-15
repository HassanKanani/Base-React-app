import React from 'react'
import useAxios from '../Hooks/useAxios';
import DataGridView from '../Components/DataGridView';

const Home = () => {

  const { data, error, loading } = useAxios({
    url: 'http://localhost:5062/api/User',
    method: 'Get',
    headers: {
      // 'Content-Type': 'application/json',
      // Authorization: 'Bearer your_token_here',
      'accept': 'text/plain'
    },
    body: null,
  });

  const columns = [
    { field: 'id', headerName: 'شناسه', width: 150 },
    { field: 'name', headerName: 'نام', width: 150 },
    { field: 'useName', headerName: 'نام کاربری', width: 150 },
    { field: 'password', headerName: 'رمز عبور', width: 150 },
  ];
  
  return (
    <div>

      <DataGridView rows={data} columns={columns} />
    </div>
  )
}

export default Home   