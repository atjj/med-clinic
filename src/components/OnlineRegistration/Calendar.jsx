 import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styles from './OnlineRegistration.module.scss';
import remove from '../../assets/icons/next.svg'

const Calendar = ({onClose}) => {

    
    return (
        <>
            <div className={styles.overlay} onClick={()=>onClose()}>
                <div className={styles.drawer} onClick={(e)=>{e.stopPropagation()}}>
                    <div className={styles.headerRegistration}>
                        <img className={styles.remove} onClick={onClose} src={remove} alt="" />
                        <p className={styles.headerTitle}>Выбрать дату и время</p>
                    </div>
                    
                      
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar']}>
                            <DateCalendar
                            referenceDate={dayjs('2024-04-02')}
                            views={['year', 'month', 'day']}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
         
              
                </div>
            </div>
        </>
    );
};

export default Calendar;

