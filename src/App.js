import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons'


const App = () => {
  return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                lorem ipsum dolor sit amet lorem lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
              </Typography>
                <div>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button>

                      </Button>
                    </Grid>
                  </Grid>
                </div>
            </Container>
          </div>
        </main>
      </>
  );
};

export default App;

// CssBaseline = predfined css 
// AppBar = navbar
// Typography = text, variant specifies it
// gutterBottom = addes margin bottom