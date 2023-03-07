import React from 'react';
import ExerciseInfo from './ExerciseInfo';
import { Container } from '@mui/material';

const ExerciseCard = ({ exerciseData }) => {
    return (
        <Container>
            {exerciseData.map(exercise => {
                return <ExerciseInfo key={exercise.id} exercise={exercise} />
            })}
        </Container>
    )
}

export default ExerciseCard;

