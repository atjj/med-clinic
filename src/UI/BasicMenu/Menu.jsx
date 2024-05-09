import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu({mainText,menuItem}) {

  const navigate = useNavigate();
  const {setAuth} = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAuth({});
    navigate('/')
    setAnchorEl(null);

  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {mainText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItem.map((item,index) => <MenuItem key = {index} onClick={handleClose}>{item}</MenuItem>)}
      </Menu>
    </div>
  );
}