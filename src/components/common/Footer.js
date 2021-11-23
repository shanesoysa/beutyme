import { deepPurple, blueGrey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import React from "react";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[50],
        },
        secondary: {
            main: deepPurple[400],
        },

    },
});

const useStyles = makeStyles((theme) => ({

    root: {
        background: blueGrey[900],
        marginTop: 14
    },
    listItem: {
        padding: 10
    },
    links: {
        marginX: 10
    },
    hoverLink: {
        '&:hover': {
            color: deepPurple[400],
        }
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container >
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Box p={10}>
                            <Typography variant="h1" color="primary">
                                Beauty Me
                        </Typography>
                        </Box>
                    </Grid>
                        <Grid container item
                            direction="row"
                            justify="center"
                            alignItems="center"
                            className={classes.links}
                        >
                            <Grid item xs={12} sm={4} md={3} lg={2}>

                                <Link href="#" variant="subtitle1" className={classes.hoverLink}>
                                    About Us
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={2}>
                                <Link href="#" variant="subtitle1"className={classes.hoverLink}>
                                    Contact Us
                        </Link>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={2}>
                                <Link href="#" variant="subtitle1" className={classes.hoverLink}>
                                    Privacy Policy
                        </Link>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={2}>
                                <Link href="#" variant="subtitle1" className={classes.hoverLink}>
                                    Terms of Use
                        </Link>
                            </Grid><Grid item xs={12} sm={4} md={3} lg={2}>
                                <Link href="#" variant="subtitle1" className={classes.hoverLink}>
                                    FAQ
                        </Link>
                            </Grid>
                        </Grid>
                    <Grid container item direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.listItem}
                        >
                        <Typography variant="caption" color="primary">
                            @overnnightcoders 2021
                        </Typography>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </footer>
    );
}
export default Footer;