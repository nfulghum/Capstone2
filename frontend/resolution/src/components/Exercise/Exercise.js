import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../interface/LoadingSpinner';
import BodyPartCard from './BodyPartCard';
import SearchForm from '../Auth/SearchForm';
import { Grid } from '@mui/material';
import axios from 'axios';
import ResolutionApi from '../../api';


const Exercise = () => {

    const [bodyPart, setBodyPart] = useState([]);

    useEffect(function getBodyPartsOnMount() {
        ResolutionApi.getBodyParts();
    }, []);

    console.log(ResolutionApi.getBodyParts())

    if (!bodyPart) return <LoadingSpinner />

    return (
        <div>
            {bodyPart.map(p => (
                <BodyPartCard
                    key={p.key}
                    p={p}
                />
            ))}
        </div>
    )
}

export default Exercise;