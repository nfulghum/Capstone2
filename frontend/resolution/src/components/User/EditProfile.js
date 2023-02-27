import React, { useState, useContext } from 'react';
import ResolutionApi from '../../api';
import UserContext from '../Auth/UserContext';
import { Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';

const EditProfile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });
    const [formErros, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        let profileDate = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await ResolutionApi.saveProfile(username, profileDate);
        } catch (e) {
            debugger;
            setFormErrors(e);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setCurrentUser(updatedUser);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value, }));
        setFormErrors([]);
    }



    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Confirm password to save changes"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onSubmit={handleSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save Changes
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )
}

export default EditProfile;