import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React, { useState } from "react";

const theme = createMuiTheme({
    typography: {
        h3: {
            fontSize: 24,
            marginBotton: 15,
        }
    },
    palette: {
        primary: {
            main: '#263238',
        },
    }
})

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 3,
    },
    title: {
        flexGrow: 1,
    }
}));
function Header(props) {

    const classes = useStyles();

    const [authentication, setAuthentication] = useState(true)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const login = (event) => {
        setAuthentication(event.target.checked);
    };

    const onChangeMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenu = () => {
        setAnchorEl(null);
    }
    return (
        <ThemeProvider theme={theme}>
            <header className={classes.root}>

                <AppBar position="static">
                    <ToolBar>
                        <Typography variant="h3" className={classes.title}>
                            Beauty Me
                    </Typography>
                        {authentication && (
                            <div>
                                <IconButton
                                    aria-label="current-user-account"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={onChangeMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    open={open}
                                    onClose={handleMenu}
                                >
                                    <MenuItem onClick={handleMenu}>Profile</MenuItem>
                                    <MenuItem onClick={handleMenu}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </ToolBar>
                </AppBar>
            </header>
        </ThemeProvider>
    );
}
export default Header;