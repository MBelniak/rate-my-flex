import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const DrawerContent: React.FC<{
  handleDrawerToggle: () => void;
  isMobile: boolean;
}> = ({ handleDrawerToggle, isMobile }) => {
  return (
    <Box
      sx={{
        width: 250,
        '& svg': {
          color: 'white',
        },
      }}
      role="presentation"
      {...(isMobile
        ? {
            onClick: handleDrawerToggle,
            onKeyDown: handleDrawerToggle,
          }
        : {})}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 238, 50, 0.05)',
                '& *': {
                  color: 'var(--clr-primary)',
                },
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 238, 50, 0.05)',
                '& *': {
                  color: 'var(--clr-primary)',
                },
              },
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const CustomDrawer: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <>
      <MenuIcon
        className={'self-start hover:cursor-pointer self-center'}
        onClick={handleDrawerToggle}
        sx={{ display: { lg: 'none' } }}
      />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'var(--clr-card)',
            color: 'white',
          },
        }}
        open
      >
        <DrawerContent
          handleDrawerToggle={handleDrawerToggle}
          isMobile={false}
        />
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'var(--clr-card)',
            color: 'white',
          },
        }}
      >
        <DrawerContent
          handleDrawerToggle={handleDrawerToggle}
          isMobile={true}
        />
      </Drawer>
    </>
  );
};
