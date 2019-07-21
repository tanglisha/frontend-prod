import React from 'react';

import './App.css';

//Material UI Imports
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  hero: {
    background: '#000000',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#00c700',
    padding: '0 30px',
  },
  heroLink: {
    color: 'white',
  },
});

function App() {
  const classes = useStyles();

  return (
    //Root div for the website
    <div className="App">
      {/*div for the hero section of the website*/}
      <div className="hero" className={classes.hero} style={{ padding: 20 }}>
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
            <p className="heroText">Yes, and it already is! You can find this web page on <a target="_blank" className={classes.heroLink} href="https://github.com/cybermate-tech">our GitHub!</a></p>
          </Grid>

          <Grid item xs={12}>
            <h3 className="heroText">Can I help contribute to the project?</h3>
            <p className="heroText">Of course! You can join us on <a target="_blank" className={classes.heroLink} href="https://discord.gg/VawZj2F">Discord</a>, and soon we'll be accepting donations through GoFundMe!</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
