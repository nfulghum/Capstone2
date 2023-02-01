import React from 'react';
import {
    Box,
    Grid,
    Container,
    Button,
    Typography,
    IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};


function ProductHowItWorks() {
    return (
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden' }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h3" marked="center" component="h3" sx={{ mb: 14 }} color='#DD5F18'>
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <SearchIcon style={{ fontSize: 60 }} />
                                </IconButton>
                                <Typography variant="h5" align="center" color='#093D65'>
                                    Search
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <SaveAltIcon style={{ fontSize: 60 }} />
                                </IconButton>
                                <Typography variant="h5" align="center" color='#093D65'>
                                    Save
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <DirectionsRunIcon style={{ fontSize: 60 }} />
                                </IconButton>
                                <Typography variant="h5" align="center" color="#093D65">
                                    Go!
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    style={{ background: '#DD5F18' }}
                    size="large"
                    variant="contained"
                    component="a"
                    href="signup"
                    sx={{ mt: 8 }}
                >
                    Get started
                </Button>
            </Container>
        </Box >
    );
}

export default ProductHowItWorks;