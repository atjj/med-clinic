import { Button } from '@nextui-org/button';
import styles from './AnalyzeTable.module.scss';
import container from '../../styles/ContainerStyles.module.scss';
import { useParams } from 'react-router-dom';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {useState, useEffect } from 'react';


import edit from '../../assets/icons/edit.svg';
import trashCan from '../../assets/icons/trash.svg';

import useAuth from '../../hooks/useAuth';

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

    let {name,id} = useParams()

    const {auth} = useAuth();

    const [analyzes,setAnalyzes] = useState([]);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();




    const [input,setInput] = useState({
        name: "",
        price: "",
        material: "",
        conditionPreparingForAnalysis: "",
        materialCollectionTime : "",
        timeIssuingResults: "",
        unit: "",
        referenceValue: ""

    })



    const addAnalyze = async () => {

        const res = await fetch(`http://medclinic-422605.uc.r.appspot.com/api/v1/analysis/add-analysis/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}`
            },
            body: JSON.stringify(input)
        });

        if (res.ok) {
            const data = await res.json();
            console.log(data)
            setInput({
                name: "",
                price: "",
                material: "",
                conditionPreparingForAnalysis: "",
                materialCollectionTime: "",
                timeIssuingResults: "",
                unit: "",
                referenceValue: ""
            });
            onOpenChange(false);  // Закрыть модальное окно
            loadAnalyzes();  // Обновить список анализов
        } else {
            console.log("Error adding analyze");
        }
    }


    const removeAnalyze = async (id) => {
        const res = await fetch(`http://medclinic-422605.uc.r.appspot.com/api/v1/analysis/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth?.accessToken}`
            },
        });

        if (res.ok) {
            loadAnalyzes(); 
        } else {
            console.log("Error deleting analyze");
        }
        console.log(res);
        
    }


    const loadAnalyzes = async () => {

        const res = await fetch(`https://medclinic-422605.uc.r.appspot.com/api/v1/analysis/get-by-categoryId/${id}`);
        const data = await res.json();

        const arr = data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
                material: item.material,
                conditionPreparingForAnalysis: item.conditionPreparingForAnalysis,
                materialCollectionTime: item.materialCollectionTime,
                timeIssuingResults: item.timeIssuingResults,
                actions:
                    <div className='flex gap-[21px]'>
                        <ActionComponent img={edit} handle={() => console.log("edit")} />
                        <ActionComponent img={trashCan} handle={() => removeAnalyze(item.id)} />
                    </div>
            }
        });
        setAnalyzes(arr.reverse());
    };


    useEffect(() => {
        loadAnalyzes();
    },[]);



    console.log(input);



    return (
        <>
            <div className= {container.container}>

                <div className= {styles.header}>
                    <h1 className= {styles.head}>
                        {name}
                    </h1>

                    <Button color='primary' onPress={onOpen}>
                        {"Добавить  анализ"}
                    </Button>
                </div>

                <Modal className='h-[700px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200' size = '5xl' isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Добавление анализа</ModalHeader>
                            <ModalBody>
                                <label>Название</label>
                                <input 
                                    className='border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type='text' 
                                    placeholder='Название'
                                    value={input.name}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))}}/>
                                <label>Цена</label>
                                <input 
                                    className='border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type='text' 
                                    placeholder='Цена'
                                    value={input.price}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        price: e.target.value
                                    }))}}/>

                                <label>Материал</label>
                                <input 
                                    className='border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type='text' 
                                    placeholder='Материал'
                                    value={input.material}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        material: e.target.value
                                    }))}}/>

                                <label>Условия подготовки к анализам</label>
                                <input 
                                    className='border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type='text' 
                                    placeholder='Условия подготовки к анализам'
                                    value={input.conditionPreparingForAnalysis}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        conditionPreparingForAnalysis: e.target.value
                                    }))}}/>
                                <label>Время забора материала</label>
                                <input 
                                    className='border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type='text' 
                                    placeholder='Время забора материала'
                                    value={input.materialCollectionTime}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        materialCollectionTime: e.target.value
                                    }))}}/>

                                <label>Время выдачи результатов</label>
                                <input 
                                    className = 'border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                    type = 'text' 
                                    placeholder = 'Время выдачи результатов'
                                    value = {input.timeIssuingResults}
                                    onChange = {(e) => {setInput(prev => ({
                                        ...prev,
                                        timeIssuingResults: e.target.value
                                    }))}}/>
                            
                                <label>Единица измерения</label>
                                    <input 
                                        className = 'border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                        type = 'text' 
                                        placeholder = 'Единица измерения'
                                        value = {input.unit}
                                        onChange = {(e) => {setInput(prev => ({
                                            ...prev,
                                            unit: e.target.value
                                        }))}}/>

                                <label>Референсные значения</label>
                                    <input 
                                        className = 'border-[2px] rounded-[40px] px-[16px] py-[10px]' 
                                        type = 'text' 
                                        placeholder = 'Референсные значения'
                                        value = {input.referenceValue}
                                        onChange = {(e) => {setInput(prev => ({
                                            ...prev,
                                            referenceValue: e.target.value
                                        }))}}/>
                            

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Закрыть
                                </Button>
                                <Button color="primary" onPress={addAnalyze}>
                                    Добавить
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>



            <Table className ='mt-[27px]' aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                {(column) => <TableColumn className='text-center' key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody  items = {analyzes}>
                {(item) => (
                    <TableRow className = 'h-[100px]' key = {item.key}>
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