import React from 'react'
import {
    Box,
    CardContent,
    Typography,
    Card,
} from '@mui/material';

const ExerciseInfo = ({ exercise }) => {

    return (

        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {exercise.name}
                    </Typography>
                    <Typography variant="h6">
                        {exercise.type}
                    </Typography>
                    <Typography variant="h6">
                        {exercise.muscle}
                    </Typography>
                    <Typography>
                        {exercise.difficulty}
                    </Typography>
                    <Typography>
                        {exercise.instructions}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ExerciseInfo;