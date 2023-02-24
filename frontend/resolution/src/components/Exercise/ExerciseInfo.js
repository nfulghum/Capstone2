import React, { useState } from 'react'
import {
    Box,
    CardContent,
    Typography,
    Card,
    Collapse,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ExerciseInfo = ({ exercise }) => {

    const [expanded, setExpanded] = useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                </CardContent>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
                <Collapse in={expanded}>
                    <CardContent>
                        <Typography>
                            {exercise.instructions}
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
        </Box>
    )
}

export default ExerciseInfo;