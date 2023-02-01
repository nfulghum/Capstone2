import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const BodyPartCard = ({ name }) => {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea component={Link} to={`/exercises/${name}`}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={<FitnessCenterIcon style={{ fontSize: 60 }} />}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default BodyPartCard;