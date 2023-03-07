import React from 'react';
import largeLogo from '../../assets/largeLogo.png';
import { Container, Typography, Button } from '@mui/material';



const ProductHero = () => {


    return (
        <Container
            sx={{
                mt: 15,
                mb: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography color="#bf360c" variant='h4' align='center'>

            </Typography>
            <img
                src={largeLogo}
                alt="wonder"
                width="50%"
            />
            <Typography color="#DD5F18" variant='h5' align='center'>
                "All things are difficult before they are easy" - Thomas Fuller
            </Typography>
            <Button
                style={{ background: '#093D65' }}
                variant="contained"
                size="large"
                component="a"
                href="signup"
                sx={{ minWidth: 200, mt: 3 }}
            >
                Sign Up
            </Button>
            <Typography variant="body2" color="#bf360c" sx={{ mt: 2 }}>
                Take the plunge
            </Typography>
        </Container>
    );
}
export default ProductHero;