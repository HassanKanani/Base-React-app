import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataGridView = ({columns,rows}) => {
  return (
    <div style={{ height: 300, width: '100%' }}>
           <DataGrid rows={rows} columns={columns} />
         </div>
  )
}

export default DataGridView  