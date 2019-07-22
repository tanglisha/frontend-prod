import React from 'react';

import './App.css';

//Material UI Imports
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const lightTheme = makeStyles({
  logo: {
    'padding-right': '5px',
    'padding-left': '5px',
    background: 'black',
  },
  logoText: {
    color: '#00ff00',
  },
  topbar: {
    background: '#ffffff',
    filter: 'drop-shadow(0 60 1px #222222)',
  },
  topbarText: {
    color: 'black',
  },
  hero: {
    background: '#000000',
    border: 0,
    color: '#00c700',
    padding: '0 30px',
  },
  heroLink: {
    color: 'white',
  },
});

function Topbar() {
  const styles = lightTheme();

  return (
    <div className={styles.topbar}>
      <AppBar className={styles.topbar} position="static" color="default">
        <Toolbar>
          <Paper className={styles.logo}>
            <Typography className={styles.logoText} variant="h6" color="inherit">
              CyberMate
            </Typography>
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function App() {
  const styles = lightTheme();

  return (
    //Root div for the website
    <div className="App">
      {/*div for the top appbar*/}
      <Topbar />

      {/*div for the hero section of the website*/}
      <div className="hero" className={styles.hero} style={{ padding: 20 }}>
        <Grid
          container
          className="heroGrid"
          spacing={0}
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
        >
          {/*Grid items for the hero section*/}
          <Grid item xs={12}>
            <h3 className="heroText">What is CyberMate?</h3>
            <p className="heroText">CyberMate is an online video platform for cyber security and technological content</p>
          </Grid>

          <Grid item xs={12}>
            <h3 className="heroText">Will the project be open source?</h3>
            <p className="heroText">Yes, and it already is! You can find this web page on <a target="_blank" className={styles.heroLink} href="https://github.com/cybermate-tech">our GitHub!</a></p>
          </Grid>

          <Grid item xs={12}>
            <h3 className="heroText">Can I help contribute to the project?</h3>
            <p className="heroText">Of course! You can join us on <a target="_blank" className={styles.heroLink} href="https://discord.gg/VawZj2F">Discord</a>, and soon we'll be accepting donations through GoFundMe!</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
