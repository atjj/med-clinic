import { useEffect,useState } from "react";
import { BASE_URL } from "../../../../utils/constants";

import {Table,Avatar,getKeyValue, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";


/* const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "Специалисты",
    },
    {
      key: "role",
      label: "Пн",
    },
    {
      key: "role",
      label: "ВТ",
    },
    {
        key: "role",
        label: "СР",
      },
      {
        key: "role",
        label: "ЧТ",
      },
      {
        key: "role",
        label: "ПТ",
      },
      {
        key: "role",
        label: "СБ",
      },
      {
        key: "role",
        label: "ВС",
      },
      {
        key: "role",
        label: "Пн",
      },
      {
        key: "role",
        label: "ВТ",
      },
      {
          key: "role",
          label: "СР",
        },
        {
          key: "role",
          label: "ЧТ",
        },
        {
          key: "role",
          label: "ПТ",
        },
        {
          key: "role",
          label: "СБ",
        },
        {
          key: "role",
          label: "ВС",
        },
        {
            key: "role",
            label: "Пн",
          },
          {
            key: "role",
            label: "ВТ",
          },
          {
              key: "role",
              label: "СР",
            },
            {
              key: "role",
              label: "ЧТ",
            },
            {
              key: "role",
              label: "ПТ",
            },
            {
              key: "role",
              label: "СБ",
            },
            {
              key: "role",
              label: "ВС",
            },

  ]; */








  const MySchedule = ({ data }) => {
    const renderTimes = (times) => {
      return times.map((timeSlot, index) => (
        <div key={index} >
          {timeSlot.time.split(' ')[0]} - {timeSlot.time.split(' ')[1]}
        </div>
      ));
    };
  
    const renderDates = (dates) => {
      return dates.map((date, index) => (
        <div className="border-[1px] bg-sky-500	p-[6px]" key={index}>
          <strong>{date.day} {date.date}</strong>
          {renderTimes(date.times)}
        </div>
      ));
    };
  
    const renderRows = () => {
      return data.map((doctor) => (
        <TableRow key={doctor.doctorId}>
          <TableCell>
            <Avatar src={doctor.image} />
            <div>{doctor.fullName}</div>
            <div>{doctor.position}</div>
          </TableCell>
          <TableCell className="flex gap-[20px]">
            {renderDates(doctor.dates)}
          </TableCell>
        </TableRow>
      ));
    };
  
    return (
      <Table aria-label="Doctor Schedule">
        <TableHeader>
          <TableColumn>Doctor</TableColumn>
          <TableColumn>Schedule</TableColumn>
        </TableHeader>
        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    );
  };
  
const Schedule = () => {

    const [schedule,setSchedule] = useState([]);

    useEffect(() => {

        (async () => {

            const res = await fetch(`${BASE_URL}/api/v1/schedule`);
            const data = await res.json();

            console.log(data);
            setSchedule(data);


        })();

    },[]);










    return (
        <>



         <div className="mt-[20px]">
            <MySchedule   data={schedule} />
         </div>

         



        </>
    )
}



export default Schedule;