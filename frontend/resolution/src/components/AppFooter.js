import React from 'react';
import {
    Box,
    Grid,
    Container,
    Typography,
    IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const AppFooter = () => {

    return (
        <Typography
            component="footer"
            sx={{ bgcolor: '#e0e0e0' }}
        >
            <Container>
                <Grid>
                    <Box component="a" href='https://www.linkedin.com/in/nick-fulghum-7835a3234/'>
                        <IconButton
                            sx={{ mr: 2 }}
                        >
                            <LinkedInIcon style={{ fontSize: 50 }} />
                        </IconButton>
                    </Box>
                    <Box component="a" href='https://github.com/nfulghum'>
                        <IconButton
                            sx={{ mr: 2 }}
                        >
                            <GitHubIcon style={{ fontSize: 50 }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Container>
        </Typography>
    )
}

export default AppFooter;