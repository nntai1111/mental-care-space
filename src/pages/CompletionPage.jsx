import { useParams, useNavigate } from 'react-router-dom';
import CompletionSection from '../components/organisms/CompletionSection';
import CompletionTemplate from '../components/templates/CompletionTemplate';

const CompletionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <CompletionTemplate
            completionSection={
                <CompletionSection
                    streak={7}
                    xp={100}
                    badge="Challenge Master"
                />
            }
        />
    );
};

export default CompletionPage;