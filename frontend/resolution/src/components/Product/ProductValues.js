import React from 'react';
import { Box, Grid, Container, Typography, IconButton } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const ProductValues = () => {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#093D65' }}
        >
            <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <FitnessCenterIcon style={{ fontSize: 60 }} />
                            </IconButton>
                            <Typography variant="h4" sx={{ my: 5 }} color="#DD5F18">
                                Exercise
                            </Typography>
                            <Typography variant="h5" color="#DD5F18" align='center'>
                                {
                                    'Search, Save, Exercise!'
                                }
                                {
                                    ' Look up exercises by specific muscle types and build the perfect workout for you.'
                                }
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <FavoriteIcon style={{ fontSize: 60 }} />
                            </IconButton>
                            <Typography variant="h4" sx={{ my: 5 }} color="#DD5F18">
                                Nutrition
                            </Typography>
                            <Typography variant="h5" color="#DD5F18" align='center'>
                                {
                                    'No matter the diet you choose to follow this year we got your back. '
                                }

                                {'With currated meal plans for all dietary needs.'}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <LeaderboardIcon style={{ fontSize: 60 }} />
                            </IconButton>
                            <Typography variant="h4" sx={{ my: 5 }} color="#DD5F18">
                                Leaderboard
                            </Typography>
                            <Typography variant="h5" color="#DD5F18" align='center'>
                                {'Be proud of the new you and show off how long you can keep to your resolution with the streak counter leaderboard.'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ProductValues;