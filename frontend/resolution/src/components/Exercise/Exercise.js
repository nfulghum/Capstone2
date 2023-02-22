import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import {
    Button,
    TextField,
    Grid,
    Box,
    Typography,
    Container,
    CssBaseline
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
        <Container component='main' maxWidth='xs'>
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
                                    autoFocus
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
                                    value={formData.type}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="muscle"
                                    label="Muscle"
                                    name="muscle"
                                    value={formData.muscle}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="difficulty"
                                    label="Difficulty"
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                />
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