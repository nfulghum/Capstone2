import React, { usecontext } from 'react';
import {
    Link,
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton
} from '@mui/material'
import { NavLink } from 'react-router-dom';
import smallLogo from '../assets/smallLogo.png'

const Navigation = () => {

    const linkProps = {
        underline: 'hover',
        component: NavLink,
        color: '#bf360c'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
                <Link {...linkProps} to='/'>
                    <img src={smallLogo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 10px' }} />
                </Link>
                <Typography variant="h6" component="div" color='#bf360c' sx={{ flexGrow: 1 }}>
                    You're Resolution Buddy 365 days a year!
                </Typography>
                <>
                    <Link sx={{ mr: 2 }} {...linkProps} to="exercise">Exercise</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="nutrition">Nutrition</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="profile">Profile</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="logout">Logout</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="signup">Sign Up</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="login">Login</Link>
                </>
            </Toolbar>
        </Box>
    )
}

export default Navigation;