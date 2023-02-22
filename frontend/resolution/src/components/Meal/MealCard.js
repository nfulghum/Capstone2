import React, { useState } from 'react'
import MealInfo from './MealInfo';
import {
    Typography,
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Button,
} from '@mui/material';
import ResolutionApi from '../../api';

const MealCard = ({ mealData }) => {



    const nutrients = mealData.nutrients;


    return (
        <Container sx={{ marginBottom: 8 }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Card sx={{ minWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Macros
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calories: {nutrients.calories.toFixed(0)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Carbohydrates: {nutrients.carbohydrates.toFixed(0)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Fat: {nutrients.fat.toFixed(0)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Protein: {nutrients.protein.toFixed(0)}
                        </Typography>
                        {mealData.meals.map(meal => {
                            return <MealInfo key={meal.id} meal={meal} />
                        })}
                        <Button sx={{
                            marginTop: 4,
                            marginLeft: 14,
                        }} variant="contained"
                            style={{ background: '#093D65' }}
                        >
                            Save Plan
                        </Button>
                    </CardContent>
                </Card>
            </Box>



        </Container>
    )
}

export default MealCard;