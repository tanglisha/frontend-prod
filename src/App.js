import React from 'react';

import './App.css';

//Images
import ThumbnailExample2 from './images/thumbnailExample2.png';

//Material UI Imports
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//Only colour theming goes here
//Other css goes in ./App.css

//Light theme
const lightTheme = makeStyles({
  logoText: {
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

//Renders a card with info and thumbnail of a video
function VideoInfo() {
  const styles = lightTheme;

  return (
    <Box className="thumbnail_box" display="flex" width="200px"> {/* Main box that limits the size */}
      <Box display="flex" flexDirection="column" alignItems="center">  {/* Flex box wrapper */}

        <Box p={1} width="100%"> {/** Thumbnail image box */}
          <img className="thumbnail" width="100%" src={ThumbnailExample2} alt="Thumbnail failed to load" />
        </Box>

        <Box id="videoTitle" p={1} display="flex" width="100%"> {/* Video title & view wrapper flew box */}
          <Box flexGrow={1}>
            This is a long video title
          </Box>
          <Box id="subtitle" justifySelf="flex-end">
            1337 views
          </Box>
        </Box>

        <Box id="videoAuthor" p={1} display="flex" width="100%"> {/* Video author & upload time wrapper flew box */}
          <Box flexGrow={1}>
            By: Author
          </Box>
          <Box id="subtitle" justifySelf="flex-end">
            5 days ago
          </Box>
        </Box>

      </Box>
    </Box>

  );
}

function VideoInfoTestRow() {
  const [spacing, setSpacing] = React.useState(2);

  var videoInfoCards = [];
  for (var i = 0; i < Math.round(((window.innerWidth - 45)/200)-1); i++) {
    videoInfoCards.push(
      <div class="flexItem">
        <VideoInfo />
      </div>
    );
  }

  return(
    <div class="flexContainer">
      {videoInfoCards}
    </div>
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
      <div id="contentSection" style={{ padding: '25px'}}>
        <h3 style={{ 'padding-left': '10px'}}>Trending</h3>
        <VideoInfoTestRow />
        <h3 style={{ 'padding-left': '10px'}}>Recommended</h3>
        <VideoInfoTestRow />
      </div>

    </div>
  );
}

export default App;
