import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

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
    { field: 'name', headerName: 'Имя', width: 200 },
    { field: 'service', headerName: 'Специальность', width: 200 },
    { field: 'schedule_to', headerName: 'Расписание до', width: 200 },
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

export default function DataTable() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('http://medclinic-422605.uc.r.appspot.com/api/v1/doctor/get-doctors')
            .then(response => {
                // Обработка полученных данных и установка их в состояние
                setRows(response.data.map((doctor, index) => ({
                    ...doctor,
                    id: index + 1 // Установка уникального идентификатора для каждой строки
                })));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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
