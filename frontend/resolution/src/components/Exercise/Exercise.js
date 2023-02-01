import Search from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import ResolutionApi from '../../api';
import LoadingSpinner from '../interface/LoadingSpinner';
import BodyPartCard from './BodyPartCard';



const Exercise = () => {

    const [bodyPart, setBodyPart] = useState([]);

    useEffect(function getBodyPartsOnMount() {
        search();
    }, []);

    async function search() {
        let bodyPart = await ResolutionApi.getBodyParts();
        setBodyPart(bodyPart);
    }

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