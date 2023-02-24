import React, { useContext } from 'react';
import UserContext from '../Auth/UserContext';
import {
    Link,
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'
import { NavLink } from 'react-router-dom';
import smallLogo from '../../assets/smallLogo.png';

const Navigation = ({ logout }) => {

    const { currentUser } = useContext(UserContext);

    const linkProps = {
        underline: 'hover',
        component: NavLink,
        color: '#bf360c'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#e0e0e0' }}>
                <Toolbar>
                    <Link {...linkProps} to='/'>
                        <img src={smallLogo} alt="logo" style={{ width: '100px', height: '100px', margin: '0px 10px' }} />
                    </Link>
                    <Typography variant="h4" component="div" color='#bf360c' sx={{ flexGrow: 1 }}>
                        Resolution Buddy
                    </Typography>
                    {currentUser ?
                        <>
                            <Link sx={{ mr: 2 }} {...linkProps} to="exercise">Exercise</Link>
                            <Link sx={{ mr: 2 }} {...linkProps} to="meal">Meal</Link>
                            <Link sx={{ mr: 2 }} {...linkProps} to="profile">Profile</Link>
                            <Link sx={{ mr: 2 }} onClick={logout} {...linkProps} to="/">Logout</Link>
                            <Typography color='#bf360c'>{currentUser.username}</Typography>
                        </>
                        :
                        <>
                            <Link sx={{ mr: 2 }} {...linkProps} to="signup">Sign Up</Link>
                            <Link sx={{ mr: 2 }} {...linkProps} to="login">Login</Link>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;