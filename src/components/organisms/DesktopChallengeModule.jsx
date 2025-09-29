import { Routes, Route } from 'react-router-dom';
import ChallengeHubPage from '../../pages/ChallengeHubPage';
import ChallengeDetailPage from '../../pages/ChallengeDetailPage';
import DailyCheckInPage from '../../pages/DailyCheckInPage';
import CompletionPage from '../../pages/CompletionPage';

const DesktopChallengeModule = () => {
  return (
    <Routes>
      <Route path="/" element={<ChallengeHubPage />} />
      <Route path="/challenge/:id" element={<ChallengeDetailPage />} />
      <Route path="/check-in/:id" element={<DailyCheckInPage />} />
      <Route path="/completion/:id" element={<CompletionPage />} />
    </Routes>
  );
};

export default DesktopChallengeModule;