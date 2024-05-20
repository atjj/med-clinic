import {Button} from "@nextui-org/button";

import styles from './OnlineReg.module.scss';
import TableComponent from "../../components/Admin/OnlineRegistration/Table/Table";
import Schedule from "../../components/Admin/OnlineRegistration/Schedule/Schedule";

import {Select, SelectItem} from "@nextui-org/select";
import {DateRangePicker} from "@nextui-org/date-picker";
import { TimeInput } from "@nextui-org/date-input";
import {Time} from "@internationalized/date";

import {useEffect, useState } from "react";

import SearchPanel from '../../UI/SearchPanel/SearchPanel.jsx';


import {parseDate} from "@internationalized/date";


import {
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    useDisclosure
  } from "@nextui-org/modal";
  



  const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
      label: "Dolphin",
      value: "dolphin",
      description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
      label: "Shark",
      value: "shark",
      description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
      label: "Whale",
      value: "whale",
      description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
  ];




const OnlineReg = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [services,setServices] = useState([]);
    const [specialists,setSpecialists] = useState([]);

    const [serviceId,setServiceId] = useState("");
    const [specialistId,setSpecialistId] = useState("");



    const [dateRange, setDateRange] = useState({
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08"),
    });

    const [time, setTime] = useState(new Time(0, 0)); // Начальное значение времени

    const handleTimeChange = (newTime) => {
      setTime(newTime);
    };

    console.log(time)
    useEffect(()=> {

      (async () => {
        const res1 = await fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/schedule/services');
        const data = await res1.json();
        setServices(data);
      })();

    },[]);

    useEffect(() => {
      (async () => {
        const res1 = await fetch(`http://medclinic-422605.uc.r.appspot.com/api/v1/doctor/get-doctors-by-service/${serviceId}`);
        const data = await res1.json();
        setSpecialists(data);
      })();
    },[serviceId]);


    const [activeTab, setActiveTab] = useState('online'); // По умолчанию активна вкладка "Онлайн-запись"

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };



    return (
        <div className= {styles.onlineReg}>

            <div className = {styles.header}>
                <h1 className= {styles.head}>Онлайн-запись</h1>
                
                <div className= {styles.btnGroup}>
                    {activeTab == 'schedule' ? <Button color="primary" variant="bordered"> EXPORT TO EXCEL </Button> : null}

                    <Button color="primary" startContent={""} onPress={activeTab == 'online' ? onOpen : () => {}}>
                        {activeTab == 'online' ? "Добавить запись": "Сохранить"}
                    </Button> 
                </div>
            </div>


            <div className= {styles.subheader}>
                <ul>
                     <li className={activeTab === 'online' ? 'active' : ''} onClick={() => handleTabClick('online')}>Онлайн-запись</li>
                     <li className={activeTab === 'schedule' ? 'active' : ''} onClick={() => handleTabClick('schedule')}>Расписание</li>
                </ul>
            </div>

            <SearchPanel/>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="px-[40px] py-[30px]" size="xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-center text-[24px]">Добавление записей</ModalHeader>
                    <ModalBody className="px-[0px] w-[490px] mt-[20px]">
                              
                    <div className="flex flex-col gap-[18px]">
                      <Select 
                          placeholder="Выберите услугу" 
                          size="md"
                          variant = "bordered"
                          labelPlacement="outside"
                          label = "Услуга"
                          onChange = {(e) => {setServiceId(e.target.value)}}
                        >
                        {services.map((service) => (
                        <SelectItem key = {service.service_id} value = {service.name}>
                          {service.name}
                        </SelectItem>
                        ))}
                        </Select>

            
                          <Select 
                            placeholder="Специалист"  
                            size="md"
                            variant = "bordered"
                            labelPlacement="outside"
                            label = "Специалист"
          
                          >
                          {specialists.map((specialist) => (
                          <SelectItem key = {specialist?.doctor_id} value = {`${specialist?.name} ${specialist?.surname}`}>
                            {`${specialist?.name} ${specialist?.surname}`}
                          </SelectItem>
                          ))}
                          </Select>

                    </div>
                      

                    <div className="flex flex-col gap-[18px] mt-[18px]">
                      <DateRangePicker 
                        label = "Дата начала-Дата окончания" 
                        className="max-w-xs" 
                        variant = "bordered"
                        value={dateRange}
                        onChange={setDateRange}

                      />


                    <div className="flex gap-[18px]">
                        <TimeInput 
                          label="Время от" 
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"
                          value = {time} onChange={handleTimeChange}
                        />
                        
                        <TimeInput 
                          label="Время до" 
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"

                        />


                        <Select 
                          placeholder="Выберите интервал часов" 
                          size="md"
                          variant = "bordered"
                          labelPlacement="outside"
                          label = "Интервал часов"
                          className="w-[290px]"

                        >
                        {animals.map((animal) => (
                        <SelectItem key = {animal.value} value = {animal.value}>
                          {animal.label}
                        </SelectItem>
                        ))}
                        </Select>
                      </div>

                      
                      <div>
                          <h3>Дни повторения:</h3>
                          <div className="flex gap-[8px] mt-[4px] text-[14px]">
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Пн</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Вт</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Ср</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Чт</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Пт</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Сб</Button>
                            <Button className="w-[53px] h-[42px]" size = 'sm' color="primary" variant = 'bordered'>Вс</Button>
                          </div>
                      </div>
                      </div>
                  
                    



                    </ModalBody>


                    <ModalFooter className="px-[0px] w-[490px] mt-[30px]">
                      <Button className="w-[236px]" color="primary" variant="bordered" onPress={onClose}>
                      Отменить
                      </Button>
                      <Button className="w-[236px]" color="primary" onPress={onClose}>
                        Опубликовать
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            

            {activeTab === 'online' && <TableComponent />}
            {activeTab === 'schedule' && <Schedule/>}  
        </div>
    )
}





export default OnlineReg;