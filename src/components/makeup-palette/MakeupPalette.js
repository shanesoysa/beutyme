import React, { Component } from "react"
import TabPanel from './TabPanel'
import './MakeupPalette.css'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views';
import { withStyles, useTheme, withTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: '100%',
        background: '#F2F8FD',
        margin: '100px',
        wordBreak: 'break-all',
    },
});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#263238',
        },
    }
})

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

// function Direction(props) {
//     const theme = useTheme()
//     return theme.direction;
// }

class MakeupPalette extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMakeup: 0,
            foundation: 0,
            lipstick: 0,
            eyeshadow: 0
        }
    }

    setCurrentMakeup = (event, index) => {
        this.setState({
            currentMakeup: index,
        })
    }

    onChangeIndex = (index) => {
        this.setState({
            currentMakeup: index,
        })

    };


    render() {
        const classes = this.props;
        // const themeDirection = withTheme(Direction)
        const { currentMakeup } = this.state;

        return (

            <Box className={classes.root} border={1} borderColor="grey.300" margin={4} >
                <ThemeProvider theme={theme}>
                    <Paper square>
                        <Tabs
                            value={currentMakeup}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.setCurrentMakeup}
                            aria-label="makeup palette"
                            centered
                        >
                            <Tab label="Foundation" {...a11yProps(0)} />
                            <Tab label="Lipstick"  {...a11yProps(1)} />
                            <Tab label="Eyeshadow" {...a11yProps(2)} />
                        </Tabs>
                    </Paper>
                    <SwipeableViews
                        // axis={themeDirection === 'rtl' ? 'x-reverse' : 'x'}
                        index={currentMakeup}
                        onChangeIndex={this.onChangeIndex}
                    >
                        <TabPanel value={currentMakeup} index={0}>
                            Foundation List
                        </TabPanel>
                        <TabPanel value={currentMakeup} index={1}>
                            Lipstick List
                        </TabPanel>
                        <TabPanel value={currentMakeup} index={2}>
                            Eyeshadow List
                        </TabPanel>
                    </SwipeableViews>
                </ThemeProvider>
            </Box>
        );

    }


}

export default withStyles(useStyles)(MakeupPalette);
