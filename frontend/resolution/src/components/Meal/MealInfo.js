import React from 'react';
import {
    Typography,
    Link,
    CardContent,
    Box,
    Card,
    CardActions,
} from '@mui/material'

const MealInfo = ({ meal }) => {


    return (

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
                        {meal.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Preparation Time: {meal.readyInMinutes} minutes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Number of Servings: {meal.servings}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={meal.sourceUrl} target="_blank">
                        Go to Recipe
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MealInfo;