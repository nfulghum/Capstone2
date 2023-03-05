import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../Auth/UserContext';
import MealInfo from './MealInfo';
import {
    Typography,
    Box,
    Card,
    CardContent,
    Container,
    Button,
    CardActions
} from '@mui/material';


const MealCard = ({ mealData }) => {

    const nutrients = mealData.nutrients;

    const { hasSavedMealPlan, saveMealPlan } = useContext(UserContext);
    const [saved, setSaved] = useState();

    useEffect(function updateSavedStatus() {
        setSaved(hasSavedMealPlan(mealData))
    }, [mealData, hasSavedMealPlan]);

    async function handleSave(e) {
        if (hasSavedMealPlan(mealData)) return;
        saveMealPlan(mealData);
        setSaved(true);
    }


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
                        <CardActions>
                            <Button onClick={handleSave} disabled={saved}>
                                {saved ? 'Saved' : 'Save'}
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>



        </Container>
    )
}

export default MealCard;