import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import TopScroll from "./components/common/TopScroll";
import MakeupPalette from "./components/makeup-palette/MakeupPalette";
import WebcamNew from "./components/webcam-display/WebcamNew";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Recommendation from "./components/recommendation/Recommendation";

function App(props) {
  return (
    <Box>
      <Header />
      <Toolbar id="back-to-top-anchor" />
      <Box>
        <Container>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item xs={12} md={8} lg={6}>
              <WebcamNew />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <MakeupPalette />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Recommendation />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <TopScroll {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </TopScroll>
      <Footer />
    </Box>
  );
}
export default App;
