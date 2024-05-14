import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import { Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GetAllApplications } from '../../services/AdminRequests';
import axios from 'axios';
const columns = [
    { field: 'id', headerName: '№', width: 100 },
    { field: 'name', headerName: 'Имя', width: 200 },
    { field: 'date', headerName: 'Дата', width: 200 },
    { field: 'phoneNumber', headerName: 'Номер телефона', width: 200 },
    { field: 'processed', headerName: 'Обработан', width: 200, renderCell: (params) => <Checkbox  color="primary" checked={params.value} disabled /> },
  
    {
        field: 'actions',
        headerName: 'Действия',
        width: 150,
        renderCell: (params) => (
          <Trash   style={{width:'18px',height:'18px' ,color:'#868686',cursor: 'pointer',marginTop:'18px',marginLeft:'18px'}} 
          onClick={() => {deleteApplication([params.row.id])}}/>
            
        ),
    },
];

const deleteApplication = async (id) => {
  console.log('looog', id)
  try {
    const token = localStorage.getItem('aimosh');
    // Отправляем DELETE запрос к API для удаления заявки с указанным id
    const response = await axios.delete(`http://medclinic-422605.uc.r.appspot.com/api/v1/application`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок запроса
        'Content-Type': 'application/json'
      },
      body:{
        id
      }
    });
    console.log('Application deleted successfully:', response.data);
    // Здесь вы можете обновить данные после удаления, если это необходимо
  } catch (error) {
    console.error('Error deleting application:', error);
  }
};

export default function DataTable() {
  const [data, setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('aimosh')
    const fetchData = async () => {
      try {
        const res = await GetAllApplications(token);
        console.log('i love aimosh: ', res)
        setData(res)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ height: 1310, width: '100%' }}>
      <DataGrid

        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}