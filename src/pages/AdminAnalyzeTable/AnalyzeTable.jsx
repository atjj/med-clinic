import { Button } from '@nextui-org/button';
import styles from './AnalyzeTable.module.scss';
import container from '../../styles/ContainerStyles.module.scss';
import { useParams } from 'react-router-dom';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {useState, useEffect } from 'react';


import edit from '../../assets/icons/edit.svg';
import trashCan from '../../assets/icons/trash.svg';


/* const rows = [
  {
    id: "1",
    name: "Общий анализ с лейкоцитарной формулой",
    price: "400сом",
    material: "Кровь",
    conditionPreparingForAnalysis: "Строго натощак",
    materialCollectionTime : "7:00-14:00 сб. 7:00-11:00 вс. 8:00-11:00",
    timeIssuingResults: "В день сдачи биоматериала с 16:00-19:00, кроме субботы и воскресенья",
    actions: "true"

  }
]; */

const columns = [
    {
        key: "id",
        label: "№",
    },

    {
        key: "name",
        label: "Название",
    },
    {
        key: "price",
        label: "Цена",
    },
    {
        key: "material",
        label: "Материал",
    },
    {
        key: "conditionPreparingForAnalysis",
        label: "Условия подготовки к анализам",
    },
    {
        key: "materialCollectionTime",
        label: "Время забора материала",
    },
    {
        key: "timeIssuingResults",
        label: "Время выдачи результатов",
    },
    {
        key: "actions",
        label: "Действия",

    }
];



const ActionComponent = ({img,handle}) => {
    return (
        <button onClick={handle}>
            <img src= {img} alt = {"img"}/>
        </button>
    )
}




const AnalyzeTable = () => {

    let {id} = useParams()


    const [analyzes,setAnalyzes] = useState([]);

    useEffect(() =>{
        (async () => {
            const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/analysis/get-by-categoryId/${id}`);
            const data = await res.json();

            const arr = data.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    material: item.material,
                    conditionPreparingForAnalysis: item.conditionPreparingForAnalysis,
                    materialCollectionTime : item.materialCollectionTime,
                    timeIssuingResults: item.timeIssuingResults,
                    actions:
                    <div className='flex gap-[21px]'>
                        <ActionComponent img = {edit} handle = {() => console.log("edit")}/>
                        <ActionComponent img = {trashCan} handle = {() => console.log("delete")}/>
                    </div>                

                }
            })
            setAnalyzes(arr);
            
        })();
    },[]);




    return (
        <>
            <div className= {container.container}>

                <div className= {styles.header}>
                    <h1 className= {styles.head}>
                        Гематология
                    </h1>

                    <Button color='primary'>
                        {"Добавить  анализ"}
                    </Button>
                </div>



            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                {(column) => <TableColumn className='text-center' key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody  items={analyzes}>
                {(item) => (
                    <TableRow className='h-[100px]' key={item.key}>
                    {(columnKey) => <TableCell className='text-center w-[20px]'>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
                </TableBody>
            </Table>
  

                
            
            </div>
        
        </>
    )
}



export default AnalyzeTable;