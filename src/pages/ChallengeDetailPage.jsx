import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailSection from '../components/organisms/DetailSection';
import DetailTemplate from '../components/templates/DetailTemplate';
import challengesData from '../data/challenges.json';

const ChallengeDetailPage = () => {
    const { id } = useParams();
    const [challenge, setChallenge] = useState(null);

    useEffect(() => {
        const foundChallenge = challengesData.find(ch => ch.id === parseInt(1));
        setChallenge(foundChallenge);
        console.log("asssss", id);
    }, [id]);

    if (!challenge) return <p>Loading...</p>;

    return (
        <DetailTemplate
            detailSection={<DetailSection challenge={challenge} />}
        />
    );
};

export default ChallengeDetailPage;