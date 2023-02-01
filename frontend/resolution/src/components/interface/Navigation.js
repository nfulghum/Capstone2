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
                    <Typography variant="h6" component="div" color='#bf360c' sx={{ flexGrow: 1 }}>
                        RESOLUTION BUDDY
                    </Typography>
                    {/* {currentUser ?
                        <> */}
                    <Link sx={{ mr: 2 }} {...linkProps} to="exercise">Exercise</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="nutrition">Nutrition</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="profile">Profile</Link>
                    <Link sx={{ mr: 2 }} onClick={logout} {...linkProps} to="/">Logout</Link>
                    {/* {currentUser.first_name || currentUser.username}
                        </>
                        :
                        <> */}
                    <Link sx={{ mr: 2 }} {...linkProps} to="signup">Sign Up</Link>
                    <Link sx={{ mr: 2 }} {...linkProps} to="login">Login</Link>
                    {/* </>
                    } */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navigation;