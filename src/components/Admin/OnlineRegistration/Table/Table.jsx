import styles from './Table.module.scss';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,getKeyValue} from "@nextui-org/react";


const rows = [
    {
      key: "1",
      id: "1",
      fullName: "Джон Сноу",
      phoneNumber: "+996505100100",
      email: "JohnKnowNothing@gmail.com",
      service: "Окулист",
      specialist: "Манак Елена",
      date: "07.05.2024",
      processed: <input type="checkbox"/>,
      actions: <img src="../../../src/assets/icons/trash.svg"/>

    },
    {
        key: "2",
        id: "2",
        fullName: "Джон Сноу",
        phoneNumber: "+996505100100",
        email: "JohnKnowNothing@gmail.com",
        service: "Окулист",
        specialist: "Манак Елена",
        date: "07.05.2024",
        processed: <input type="checkbox"/>,
        actions: <img src="../../../src/assets/icons/trash.svg"/>
  
      },
      {
        key: "3",
        id: "3",
        fullName: "Джон Сноу",
        phoneNumber: "+996505100100",
        email: "JohnKnowNothing@gmail.com",
        service: "Окулист",
        specialist: "Манак Елена",
        date: "07.05.2024",
        processed: <input type="checkbox"/>,
        actions: <div><img src="../../../src/assets/icons/trash.svg"/></div>
  
      }
  ];

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


const TableComponent = () => {
    return (
        <div className= {styles.table}>

        <Table 
            aria-label = "Rows actions table example with dynamic content"
            selectionMode = "multiple"
            selectionBehavior = "toggle"
            onRowAction={(key) => {console.log(key)}}
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
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