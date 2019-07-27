import React, { useState } from 'react';

import './App.css';

//Images
import ThumbnailExample2 from './images/thumbnailExample2.png';

//Material UI Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { relative } from 'path';

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
  contentSection: {
    background: 'white',
  },
  subtitle: {
    color: '#7f7f7f',
  },
  defaultText: {
    color: 'black',
  },
});

//Dark theme
const darkTheme = makeStyles({
  logoText: {
    color: '#00ff00',
  },
  topbar: {
    background: '#222222',
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
  contentSection: {
    background: '#222222',
  },
  subtitle: {
    color: '#b5b5b5',
  },
  defaultText: {
    color: 'white',
  },
});

//Renders the navigation bar
function Topbar({ theme }) {
  const styles = theme;

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
          <div className={styles.defaultText} style={{
            position: 'absolute',
            right: '10px',
          }}> {/* Change theme button */}
            <button onClick={toggleTheme} className={styles.hero} id="toggle_theme">{localStorage.getItem('darkTheme') === 'false' ? 'Dark theme' : 'Light theme'}</button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function toggleTheme() {
  if (localStorage.getItem('darkTheme') === 'false') { // Checks if the dark theme is off
    localStorage.setItem('darkTheme', true); // Trun it on
  } else {
    localStorage.setItem('darkTheme', false); // Turn it off
  }
  document.location.reload();
}

//Renders the hero section
function Hero({ theme }) {
  const styles = theme;

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
          <p className="heroText">Yes, and it already is! You can find this web page on <a target="_blank" rel="noopener noreferrer" className={styles.heroLink} href="https://github.com/cybermate-tech">our GitHub!</a></p>
        </Grid>

        <Grid item xs={12}>
          <h3 className="heroText">Can I help contribute to the project?</h3>
          <p className="heroText">Of course! You can join us on <a target="_blank" rel="noopener noreferrer" className={styles.heroLink} href="https://discord.gg/VawZj2F">Discord</a>, and soon we'll be accepting donations through GoFundMe!</p>
        </Grid>
      </Grid>
    </div>
  );
}

//Renders a card with info and thumbnail of a video
function VideoInfo({ theme, title, views, author, uploadTime, thumbnail, length }) {
  const styles = theme;

  var displayedAuthor, displayedTitle;
  displayedAuthor = author;
  displayedTitle = title;

  // (Sh*t code)
  // Shortens the title / author name lenght if over a cerain amount of characters
  if (author.length + uploadTime.length > 30) {
    var extraCharCount = 30 - 3 - author.length - uploadTime.length;
    displayedAuthor = author.substring(0, author.length + extraCharCount) + "...";
  }
  if (title.length + (views + " views").length > 40) {
    var extraCharCount = 40 - 3 - title.length - (views + " views").length;
    displayedTitle = title.substring(0, title.length + extraCharCount) + "...";
  }

  return (
    <Box className="videoInfo_box" display="flex" width="200px"> {/* Main box that limits the size */}
      <Box display="flex" flexDirection="column" alignItems="center" className={styles.defaultText}>  {/* Flex box wrapper */}

        <Box p={1} width="100%" className="thumbnail_container"> {/* Thumbnail image box (also contains video length) */}
          <img className="thumbnail" width="100%" src={thumbnail} alt="Thumbnail failed to load" />
          <Box class="video_length" width="100%">
            {length}
          </Box>
        </Box>

        <Box id="videoTitle" p={1} display="flex" width="100%"> {/* Video title & view wrapper flew box */}
          <Tooltip TransitionComponent={Zoom} title={title}>
            <Box flexGrow={1}>
              {displayedTitle}
            </Box>
          </Tooltip>
          <Box className={styles.subtitle} flexShrink={0} alignSelf="flex-end" style={{fontSize: "9pt"}}>
            {views} views
          </Box>
        </Box>

        <Box id="videoAuthor" p={1} display="flex" width="100%"> {/* Video author & upload time wrapper flew box */}
          <Tooltip TransitionComponent={Zoom} title={author}>
            <Box flexGrow={1}>
              {displayedAuthor}
            </Box>
          </Tooltip>
          <Box className={styles.subtitle} flexShrink={0} alignSelf="flex-end" style={{fontSize: "9pt"}}>
            {uploadTime}
          </Box>
        </Box>

      </Box>
    </Box>

  );
}

function VideoInfoTestRow({ theme }) {

  var videoInfoCards = [];
  for (var i = 0; i < Math.round(((window.innerWidth - 35 - (10 * i)) / 200) - 1); i++) {
    videoInfoCards.push(
      <div class="flexItem" key={i}>
        <VideoInfo theme={theme} title="Title but ultra longer for user interface testing purposes, no video should have a title this long, I'm just testing my code" views="666" author="Long user name that should be cropped" uploadTime="Yesterday" thumbnail={ThumbnailExample2} length="13:37" />
      </div>
    );
  }

  return (
    <div class="flexContainer">
      {videoInfoCards}
    </div>
  );
}

function ContentSection({ theme }) {
  const styles = theme;

  return (
    <div className={styles.contentSection} id="contentSection" style={{ padding: '25px' }}>
      <h3 className={styles.defaultText} style={{ paddingLeft: '10px' }}>Trending</h3>
      <VideoInfoTestRow theme={styles} />
      <h3 className={styles.defaultText} style={{ paddingLeft: '10px' }}>Recommended</h3>
      <VideoInfoTestRow theme={styles} />
    </div>
  );
}

//Main function to render the app as a whole
function App() {

  // Checks if the "darkTheme" local key exsists, if not, create it
  if (localStorage.getItem('darkTheme') === null) {
    localStorage.setItem('darkTheme', false);
  }

  //If the dark theme is on, set currentTheme to darkTheme, else set it to lightTheme
  let currentTheme = localStorage.getItem('darkTheme') === "false" ? lightTheme() : darkTheme();

  return (
    //Root div for the website
    <div className="App">

      <Topbar theme={currentTheme} />

      <Hero theme={currentTheme} />

      <ContentSection theme={currentTheme} />

    </div>
  );
}



export default App;
