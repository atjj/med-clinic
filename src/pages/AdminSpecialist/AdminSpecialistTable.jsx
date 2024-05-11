import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { field: 'id', headerName: '№', width: 100 },
    {
        field: 'isActive',
        headerName: 'Статус',
        width: 150,
        renderCell: (params) => (
            <Switch
                checked={params.row.isActive}
                onChange={(event) => {
                    // Ваша логика изменения состояния
                    console.log(`Switching row with id ${params.row.id} to ${event.target.checked}`);
                }}
            />
        ),
    },
    { field: 'firstName', headerName: 'Специалист', width: 200 },
    { field: 'date', headerName: 'Отделение', width: 200 },
    { field: 'phone', headerName: 'Расписание до', width: 200 },
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
    { id: 1,isActive: false, date: '12.01.23', firstName: 'Jon', phone: '+996 707 123 456' },
    { id: 2, isActive: true, date: '12.01.23', firstName: 'Cersei', phone: '+996 707 123 456' },
    { id: 3, isActive: false ,date: '12.01.23', firstName: 'Jaime', phone: '+996 707 123 456' },
    // Добавьте isActive в каждый объект ваших данных
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}
