import React, { useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Switch, Card, CardContent, CardMedia, Typography } from '@mui/material';

function App() {

  // sate to manage dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  //function to toggle the dark mode as true or false

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  }

  //create darkTheme function to handle dark theme using createTheme
  const darkTheme = createTheme(
    {
      palette: {
        //handle the dark mode on toggle
        mode: toggleDarkMode ? 'dark' : 'light',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#f48fb1',
        },
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems : 'center' }}>
          <h2>Toggle Dark Mode</h2>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
          <Card sx={{ width: '30%', borderRadius: 3, padding: 1 }}>
              <CardContent>
                <CardMedia sx={{ height: 180, borderRadius: 3 }}
                  image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                  title= 'semaphore'
                />

                <Typography variant='h4' component='div' sx={{ marginTop: 3}}>
                  Programming Blogs
                </Typography>

                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  By semaphore
                </Typography>

                <Typography variant='body1'>
                  Checkout the lastest blogs on semaphore. Semaphore provides you the best CI/CD solution 
                  for high-performance engineering teams.
                </Typography>
              </CardContent>
          </Card>
        </div>
    </ThemeProvider>
  )
}

export default App
