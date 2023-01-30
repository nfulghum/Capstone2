import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <Stack>
                <Button>
                    {exercise.bodyPart}
                </Button>
                <Button>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard;