import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { Trash } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
const columns = [
    { id: 'doctor_id', label: '№', minWidth: 100 },
    { id: 'isActive', label: 'Статус', minWidth: 100 },
  { id: 'doctorInfo', label: 'Специалист', minWidth: 200 },
  { id: 'service', label: 'Отделение', minWidth: 170 },

  { id: 'schedule_to', label: 'Расписание до', minWidth: 200 },
  { id: 'delete', label: 'Действия', minWidth: 100 },
];

const StickyHeadTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://medclinic-422605.uc.r.appspot.com/api/v1/doctor/get-doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (doctorId) => {
    // Logic to delete the doctor with the given ID
    // You can implement this based on your API or state management
    console.log('Deleting doctor with ID:', doctorId);
  };
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(new Date(dateString));
    return formattedDate;
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left" // Assuming all columns are left-aligned
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.doctor_id}>
                    <TableCell align="left">{row.doctor_id}</TableCell>
                    <TableCell align="left">
                      <Switch checked={row.isActive} />
                    </TableCell>
                    <TableCell align="left">
                      <div style={{display:'flex' }}>
                        <img src={row.image} alt='artur'  style={{ width: '50px', height: 'auto' }} />
                        <div>
                        <div style={{fontFamily:'Manrope-Medium',fontSize:'16px'}}>{`${row.name} ${row.surName}`}</div>
                        <div style={{color:'#959595',fontSize:'14px',fontFamily:'Manrope-Medium'}}>{row.position}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">{row.service}</TableCell>
                    
                    
                    <TableCell align="left">{formatDate(row.schedule_to)}</TableCell>
                    <TableCell align="left">
                        <div style={{display:'flex ',gap:'10px'}} >
                   <Link to='./SpecialistEdit'><Pencil style={{width:'18px',height:'18px' ,color:'#868686',cursor: 'pointer'}} /></Link> 
                    <Trash   style={{width:'18px',height:'18px' ,color:'#868686',cursor: 'pointer'}} 
                      onClick={() => handleDelete(row.doctor_id)}
                     /></div>
                      
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={doctors.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
