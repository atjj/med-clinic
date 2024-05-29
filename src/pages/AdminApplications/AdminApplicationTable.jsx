import { useEffect, useState } from 'react';
import styles from './AdminApplications.module.scss';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import useAuth from '../../hooks/useAuth';

const Processed = ({ setMessage, processed, id }) => {
    const process = async (id) => {
        const res = await fetch(`http://medclinic-422605.uc.r.appspot.com/api/v1/application/isProcessed?applicationId=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify('')
        });

        const data = await res.json();
        console.log(data);
        setMessage(data.message);
    };

    const [checked, setChecked] = useState(processed);

    return (
        <input
            type='checkbox'
            checked={checked}
            disabled={checked && true}
            onClick={() => {
                setChecked(!checked);
                process(id);
            }} />
    );
};

const DeleteAppointment = ({ setMessage, id }) => {
    const { auth } = useAuth();

    const deleteAppointment = async (id) => {
        const res = await fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/application', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}`
            },
            body: JSON.stringify([id])
        });
        const data = await res.json();
        console.log(data);
        setMessage(data.message);
    };

    return (
        <button onClick={() => { deleteAppointment(id) }}>
            <img src="../../../src/assets/icons/trash.svg" alt="Delete" />
        </button>
    );
};

const TableComponent = () => {
    const { auth } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/application/getAll', {
                    headers: {
                        'Authorization': `Bearer ${auth?.accessToken}`
                    }
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();

                if (!Array.isArray(data)) {
                    throw new Error("Data format is not as expected");
                }

                const arr = data.map(item => ({
                    key: item?.id,
                    id: item?.id,
                    name: item?.name,
                    phoneNumber: item?.phoneNumber,
                    date: item?.date,
                    processed: <Processed setMessage={setMessage} processed={item?.processed} id={item?.id} />,
                    actions: <DeleteAppointment setMessage={setMessage} id={item?.id} />
                }));

                setAppointments(arr.reverse());
            } catch (error) {
                console.error(error);
                setMessage('Failed to fetch data');
            }
        };

        fetchData();
    }, [auth]);

    console.log(appointments);

    const columns = [
        { key: "id", label: "№" },
        { key: "name", label: "Имя и фамилия" },
        { key: "date", label: "Дата" },
        { key: "phoneNumber", label: "Номер телефона" },
        { key: "processed", label: "Обработан" },
        { key: "actions", label: "Действия" }
    ];

    return (
        <div className={styles.table}>
            <div className={styles.messages} onClick={() => { setMessage('') }}>{message}</div>
            <Table
                aria-label="Rows actions table example with dynamic content"
                selectionMode="multiple"
                selectionBehavior="toggle"
                onRowAction={(key) => { console.log(key) }}
            >
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={appointments}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {columns.map((column) => (
                                <TableCell key={column.key}>{item[column.key]}</TableCell>
                            ))}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableComponent;


// import { DataGrid } from '@mui/x-data-grid';
// import Checkbox from '@mui/material/Checkbox';
// import { Trash } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { GetAllApplications } from '../../services/AdminRequests';
// import axios from 'axios';
// const columns = [
//     { field: 'id', headerName: '№', width: 100 },
//     { field: 'name', headerName: 'Имя', width: 200 },
//     { field: 'date', headerName: 'Дата', width: 200 },
//     { field: 'phoneNumber', headerName: 'Номер телефона', width: 200 },
//     { field: 'processed', headerName: 'Обработан', width: 200, renderCell: (params) => <Checkbox  color="primary" checked={params.value} disabled /> },

//     {
//         field: 'actions',
//         headerName: 'Действия',
//         width: 150,
//         renderCell: (params) => (
//           <Trash   style={{width:'18px',height:'18px' ,color:'#868686',cursor: 'pointer',marginTop:'18px',marginLeft:'18px'}}
//           onClick={() => {deleteApplication([params.row.id])}}/>

//         ),
//     },
// ];

// const deleteApplication = async (id) => {
//   console.log('looog', id);
//   try {
//     const token = localStorage.getItem('aimosh');
//     // Отправляем DELETE запрос к API для удаления заявки с указанным id
//     const response = await axios.delete(`http://medclinic-422605.uc.r.appspot.com/api/v1/application`, {
//       headers: {
//         'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок запроса
//         'Content-Type': 'application/json'
//       },
//       data: { id } // Используем поле data для передачи тела запроса
//     });
//     console.log('Application deleted successfully:', response.data);
//     // Здесь вы можете обновить данные после удаления, если это необходимо
//   } catch (error) {
//     console.error('Error deleting application:', error);
//   }
// };


// export default function DataTable() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const token = localStorage.getItem('aimosh')
//     const fetchData = async () => {
//       try {
//         const res = await GetAllApplications(token);
//         console.log('i love aimosh: ', res)
//         setData(res)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div style={{ height: 1310, width: '100%' }}>
//       <DataGrid

//         rows={data}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }