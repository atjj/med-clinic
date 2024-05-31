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
import { BASE_URL } from "../../utils/constants.js";

import useAuth from "../../hooks/useAuth.jsx";
  



  const intervals = [
    {label: "15 минут", value: "15"},
    {label: "30 минут", value: "30"},
    {label: "45 минут", value: "45"},
    {label: "1 час", value: "60"},
    {label: "1.5 час", value: "90"},
  ];




const getFullTime = (time) => {
  return time < 10 ? `0${time}`: time 
}


const OnlineReg = () => {

   const {auth} = useAuth();


    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [services,setServices] = useState([]);
    const [specialists,setSpecialists] = useState([]);

    const [serviceId,setServiceId] = useState("");
    const [doctorId,setDoctorId] = useState("");

    const [timeIntervals,setTimeInterval] = useState("");

    const [message,setMessage] = useState('');

    const [repeatDays, setRepeatDays] = useState({
      "Пн": false,
      "Вт": false,
      "Ср": false,
      "Чт": false,
      "Пт": false,
      "Сб": false,
      "Вс": false,
    });

    const [dateRange, setDateRange] = useState({
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08"),
    });


    const [time, setTime] = useState({
      timeFrom: new Time(0, 0),
      timeTo: new Time(0, 0)
    }); 


    const [breakTime,setBreakTime] = useState({
      startBreak: new Time(0, 0),
      endBreak: new Time(0, 0)
    })


    useEffect(() => {
      setMessage('')
    },[time,breakTime,dateRange,repeatDays,services,specialists,timeIntervals])

    const handleRepeatDayToggle = (day) => {
      setRepeatDays((prevDays) => ({
        ...prevDays,
        [day]: !prevDays[day],
      }));

    };


    const handleStartBreak = (newTime) => {
      setBreakTime(prev => ({
        ...prev,
        startBreak: newTime
      }));
    };

    const handleEndBreak = (newTime) => {
      setBreakTime(prev => ({
        ...prev,
        endBreak: newTime
      }));
    };

    

    const handleTimeFromChange = (newTime) => {
      setTime(prev => ({
        ...prev,
        timeFrom: newTime
      }));
    };

    const handleTimeToChange = (newTime) => {
      setTime(prev => ({
        ...prev,
        timeTo: newTime
      }));
    };


    


    const handleSubmit = async () => {
  
      // Подготовка данных для отправки
      const dataToSend = {
        serviceId,
        doctorId,
        dateOfStart: `${dateRange.start.year}-${getFullTime(dateRange.start.month)}-${getFullTime(dateRange.start.day)}`,
        dateOfFinish: `${dateRange.end.year}-${getFullTime(dateRange.end.month)}-${getFullTime(dateRange.end.day)}`,
        timeFrom: `${getFullTime(time.timeFrom.hour)}:${getFullTime(time.timeFrom.minute)}`,
        timeTo: `${getFullTime(time.timeTo.hour)}:${getFullTime(time.timeTo.minute)}`,
        interval: parseInt(timeIntervals),
        startBreak: `${getFullTime(breakTime.startBreak.hour)}:${getFullTime(breakTime.startBreak.minute)}`,
        endBreak: `${getFullTime(breakTime.endBreak.hour)}:${getFullTime(breakTime.endBreak.minute)}`,
        repeatDays: repeatDays
      };
      console.log(dataToSend);
      try {
        const res = await fetch(`${BASE_URL}/api/v1/schedule/add-schedule`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth?.accessToken}`
          },
          body: JSON.stringify(dataToSend)
        });

        if(res.status == 400)
          setMessage("This doctor already has own schedule");

    
        if (!res.ok) {
          console.log(res);
          const errorText = await res.text();
          throw new Error(`Error ${res.status}: ${errorText}`);
        }
        
        setMessage("success")
        const data = await res.json();
        console.log(data);
    
        return data;
      } catch (error) {
        console.error('An error occurred:', error.message);
        throw error;
      }
    


    }



   
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
                    <p>{message}</p>

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
                            onChange={(e) =>{setDoctorId(e.target.value)} }
          
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
                          aria-label="timeFrom"
                          label="Время от" 
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"
                          value = {time.timeFrom} onChange={handleTimeFromChange}
                        />
                        
                        <TimeInput 
                          aria-label="timeTo"

                          label="Время до" 
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"
                          value = {time.timeTo} onChange={handleTimeToChange}

                        />


                        <Select 
                          placeholder="Выберите интервал часов" 
                          size="md"
                          variant = "bordered"
                          labelPlacement="outside"
                          label = "Интервал часов"
                          className="w-[290px]"
                          value={timeIntervals}
                          onChange = {(e) => {setTimeInterval(e.target.value)}}

                        >
                        {intervals.map((interval) => (
                        <SelectItem key = {interval.value} value = {interval.value}>
                          {interval.label}
                        </SelectItem>
                        ))}
                        </Select>
                      </div>


                      <div className="flex gap-[10px] flex-col	">
                        <label>Перерыв:</label>
                        <div className="flex gap-[18px]">
                        <TimeInput 
                          aria-label="startBreak"
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"
                          value = {breakTime.startBreak} onChange={handleStartBreak}
                        />
                        
                        <TimeInput 
                          aria-label="endBreak"
                          labelPlacement="outside" 
                          defaultValue={new Time(0, 0)} 
                          hourCycle={24}
                          className="w-[80px]"
                          variant = "bordered"
                          value = {breakTime.endBreak} onChange={handleEndBreak}

                        />
                        </div>
                      </div>

                      
                      <div>
                          <h3>Дни повторения:</h3>
                          <div className="flex gap-[8px] mt-[4px] text-[14px]">
                            {Object.keys(repeatDays).map((day) => (
                              <Button
                                key={day}
                                className={`w-[53px] h-[42px] ${repeatDays[day] ? 'bg-blue-500' : 'bg-gray-200'}`}
                                size="sm"
                                color="primary"
                                variant="bordered"
                                onClick={() => handleRepeatDayToggle(day)}
                              >
                                {day}
                              </Button>
                        ))}
                          </div>
                      </div>
                      </div>
                  
                    



                    </ModalBody>


                    <ModalFooter className="px-[0px] w-[490px] mt-[30px]">
                      <Button className="w-[236px]" color="primary" variant="bordered" onPress={onClose}>
                      Отменить
                      </Button>
                      <Button className="w-[236px]" color="primary" onPress={handleSubmit}>
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



