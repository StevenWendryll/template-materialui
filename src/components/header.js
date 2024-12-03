import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

import AccountMenu from '../pages/menu/AccountMenu';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>

            {  
              //< MenuIcon />
              }
              
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Gerenciamento de Tarefas
          </Typography>

          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function ThemedHeader() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}