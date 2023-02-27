import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import {
    Button,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
    CssBaseline,
    MenuItem,
    Menu,
} from '@mui/material';
import ResolutionApi from '../../api';


const Exercise = () => {

    const [exerciseData, setExerciseData] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        muscle: "",
        difficulty: "",
    })

    const types = [
        { value: "cardio", label: "Cardio" }, { value: "olympic_weightlifting", label: "Olympic Weightlifting" }, { value: "plyometics", label: "Plyometrics" }, { value: "powerlifting", label: "Powerlifting" },
        { value: "strength", label: "Strength" }, { value: "stretching", label: "Stretching" }, { value: "strongman", label: "Strongman" },
    ]

    const muscles = [
        { value: "abdominals", label: "Abdominals" }, { value: "abductors", label: "Abductors" }, { value: "adductors", label: "Adductors" }, { value: "biceps", label: "Biceps" }, { value: "calves", label: "Calves" },
        { value: "chest", label: "Chest" }, { value: "forearms", label: "Forearms" }, { value: "glutes", label: "Glutes" }, { value: "hamstrings", label: "Hamstrings" }, { value: "lats", label: "Lats" },
        { value: "lower_back", label: "Lower Back" }, { value: "middle_back", label: "Middle Back" }, { value: "neck", label: "Neck" }, { value: "quadriceps", label: "Quadriceps" }, { value: "traps", label: "Traps" }, { value: "triceps", label: "Triceps" },
    ]

    const difficulty = [
        { value: "beginner", label: "Beginner" }, { value: "intermediate", label: "Intermediate" }, { value: "expert", label: "Expert" },
    ]

    async function getExercise(e) {
        e.preventDefault();
        let exerciseData = await ResolutionApi.getExerciseData(formData);
        setExerciseData(exerciseData)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }


    return (
        <Container component='main' maxWidth='xs' sx={{ marginBottom: 10 }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component='h1' variant='h5' color='#DD5F18'>
                    Find Exercise
                </Typography>
                <form onSubmit={getExercise}>
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="name"
                                    fullWidth
                                    id="name"
                                    label="Exercise Name"
                                    autoFocuselect
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    label="Type"
                                    name="type"
                                    select
                                    onChange={handleChange}
                                >
                                    {types.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="muscle"
                                    label="Muscle"
                                    name="muscle"
                                    select
                                    onChange={handleChange}
                                >
                                    {muscles.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="difficulty"
                                    label="Difficulty"
                                    name="difficulty"
                                    select
                                    onChange={handleChange}
                                >
                                    {difficulty.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onSubmit={getExercise}
                            sx={{ mt: 3, mb: 2 }}
                            style={{ background: '#093D65' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
            {exerciseData && <ExerciseCard exerciseData={exerciseData} />}
        </Container>
    )
}

export default Exercise;