import {useEffect, useState } from 'react';
import styles from './Table.module.scss';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,getKeyValue} from "@nextui-org/react";

import useAuth from '../../../../hooks/useAuth';

const Processed = ({setMessage,processed,id}) => {


    const process = async (id) => {
        const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/appointments/processed?appointmentId=${id}`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify('')
        })
        
        const data = await res.json();
        console.log(data);
        setMessage(data.message);

    }



    const [checked,setChecked] = useState(processed);

    return ( <input 
                type='checkbox' 
                checked = {checked}
                disabled = {checked && true} 
                onClick={() => {
                        setChecked(!checked);
                        process(id); 
            }}/> )
}



const DeleteAppointment = ({setMessage,id}) => {

    const {auth} = useAuth();

    const deleteAppointment = async (id) => {
            const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/appointments/delete',{
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${auth?.accessToken}` 
                },
                body: JSON.stringify([id])
            })
            const data = await res.json();
            console.log(data);
            setMessage(data.message);
    }

    return (
        <button onClick = {() => {deleteAppointment(id)}}>
            <img src="../../../src/assets/icons/trash.svg"/>
        </button>
    )
}


const TableComponent = () => {

    const [appointments,setAppointments] = useState([]);
    const [message,setMessage] = useState('');


    

    useEffect(() =>{


        (async () => {
            
            const res = await fetch('https://medclinic-422605.uc.r.appspot.com/api/v1/appointments');

            const data = await res.json();

            const arr = data.map(item => {
                return {
                    key: item?.appointmentId,
                    id: item?.appointmentId,
                    fullName: item?.patientFullName,
                    phoneNumber: item?.tellNumber,
                    email: item?.email,
                    service: item?.service,
                    specialist: item?.doctor,
                    date: `${item?.date}  ${item?.time}`,/*  checked = {item.isProcessed} */
                    processed: <Processed setMessage = {setMessage} processed = {item?.isProcessed} id = {item?.appointmentId}/>,
                    actions: <DeleteAppointment setMessage = {setMessage} id = {item?.appointmentId}/>
        
                }
            });

            setAppointments(arr.reverse());
            
  
        })();


    },[]);



    
    const columns = [
    {
        key: "id",
        label: "№",
    },
    {
        key: "fullName",
        label: "Имя и фамилия",
    },
    {
        key: "phoneNumber",
        label: "Номер телефона",
    },
    {
        key: "email",
        label: "Почта",
    },
    {
        key: "service",
        label: "Выбор услуги",
    },
    {
        key: "specialist",
        label: "Выбор специалиста",
    },
    {
        key: "date",
        label: "Дата и время",
    },
    {
        key: "processed",
        label: "Обработан",
    },
    {
        key: "actions",
        label: "Действия",
    }
    ];





    return (
    <div className= {styles.table}>

        <div className= {styles.messages} onClick={() => {setMessage('')}}>{message}</div>
        <Table 
            aria-label = "Rows actions table example with dynamic content"
            selectionMode = "multiple"
            selectionBehavior = "toggle"

            onRowAction={(key) => {console.log(key)}}
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={appointments}>
                {(item) => (
                    <TableRow  key={item.key}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
    )

}



export default TableComponent;