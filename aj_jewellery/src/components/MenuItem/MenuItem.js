import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Avatar from '@mui/material/Avatar';
import makeToast from '../../Toaster/Toaster';
import './MenuItem.css';

export default function MenuListComposition({logOut}) {
  
  const [open, setOpen] = React.useState(false);
  const username=localStorage.getItem("user")[0].toUpperCase()+localStorage.getItem("user").substring(1);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (number,event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    if(number==0)
        console.log(3,number);
    else if(number==1)
        console.log(2,number);
    else{
        localStorage.setItem("user","");
        localStorage.setItem("userId","");
        logOut();
        makeToast("warning","Logged Out Successfully!!");
        // window.location.pathname="/";
        // Navigate()
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div className='menuItem'>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatar style={{
          color:"#ddcda6",fontSize:"larger"
      }}>{username[0]}</Avatar>
         
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={(event)=>handleClose(0,event)}>Cart</MenuItem>
                    <MenuItem onClick={(event)=>handleClose(1,event)}>Orders</MenuItem>
                    <MenuItem onClick={(event)=>handleClose(2,event)}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
}