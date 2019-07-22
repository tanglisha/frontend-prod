import React from 'react';

import './App.css';

//Images
import ThumbnailExample2 from './images/thumbnailExample2.png';

//Material UI Imports
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//Only colour theming goes here
//Other css goes in ./App.css

//Light theme
const lightTheme = makeStyles({logoText: {
    color: '#00ff00',
  },
  topbar: {
    background: '#ffffff',
  },
  topbarText: {
    color: 'black',
  },
  hero: {
    background: '#000000',
    color: '#00c700',
  },
  heroLink: {
    color: 'white',
  },
});

//TODO dark theme

//Renders the navigation bar
function Topbar() {
  const styles = lightTheme();

  return (
    <div className={styles.topbar}>
      <AppBar className={styles.topbar} position="static">
        <Toolbar>
          {/*Logo*/}
          <Paper class="logo">
            <Typography className={styles.logoText} variant="h6" color="inherit">
              CyberMate
            </Typography>
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//Renders the hero section
function Hero() {
  const styles = lightTheme();

  return (
    /*div for the hero section of the website*/
    <div class="hero" className={styles.hero} style={{ padding: 20 }}>
      <Grid
        container
        className="heroGrid"
        spacing={0}
        direction="column"
        justify="space-evenly"
        alignItems="stretch"
      >
        {/*Grid items for the text in the hero section*/}
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
  );
}

//TODO renders a card with info and thumbnail of a video
function VideoInfo() {
  const styles = lightTheme;

  return(
    <img class="thumbnail" src={ThumbnailExample2} />
  );
}

function VideoInfoTestRow() {
  return(
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      {/*I know it's not pretty, it's temporary*/}
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
      <Grid item xs={2}>
        <VideoInfo />
      </Grid>
    </Grid>
  );
}

//Main function to render the app as a whole
function App() {
  const styles = lightTheme();

  return (
    //Root div for the website
    <div className="App">

      <Topbar />

      <Hero />

      {/*Section for video information and thumbnails*/}
      <div style={{ 'padding': '25px'}}>
        <h3>Trending</h3>
        <VideoInfoTestRow />
        <h3>Recommended</h3>
        <VideoInfoTestRow />
      </div>

    </div>
  );
}

export default App;
