import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { field: 'id', headerName: '№', width: 100 },
    { field: 'firstName', headerName: 'Имя', width: 200 },
    { field: 'date', headerName: 'Дата', width: 200 },
    { field: 'phone', headerName: 'Номер телефона', width: 200 },
    { field: 'processed', headerName: 'Обработан', width: 200, renderCell: (params) => <Checkbox color="primary" checked={params.value} disabled /> },
  
    {
        field: 'actions',
        headerName: 'Действия',
        width: 150,
        renderCell: (params) => (
            <DeleteIcon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    // Ваша логика удаления
                    console.log(`Deleting row with id ${params.row.id}`);
                }}
            />
        ),
    },
];

const rows = [
  { id: 1, date: '12.01.23', firstName: 'Jon',phone:'+996 707 123 456 '},
  { id: 2, date: '12.01.23', firstName: 'Cersei',phone:'+996 707 123 456' },
  { id: 3, date: '12.01.23', firstName: 'Jaime',phone:'+996 707 123 456' },
  { id: 4, date: '12.01.23', firstName: 'Arya',phone:'+996 707 123 456' },
  { id: 5, date: '12.01.23', firstName: 'Daenerys',phone:'+996 707 123 456' },
  { id: 6, date: '12.01.23', firstName: null ,phone:'+996 707 123 456'},
  { id: 7, date: '12.01.23', firstName: 'Ferrara',phone:'+996 707 123 456' },
  { id: 8, date: '12.01.23', firstName: 'Rossini',phone:'+996 707 123 456' },
  { id: 9, date: '01.12.10', firstName: 'Harvey',phone:'+996 707 123 456' },
  
];

export default function DataTable() {
  return (
    <div style={{ height: 1310, width: '100%' }}>
      <DataGrid

        rows={rows}
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