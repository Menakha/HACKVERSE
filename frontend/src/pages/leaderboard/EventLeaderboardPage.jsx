import { useParams } from '@tanstack/react-router';
import LeaderboardPage from './LeaderboardPage';

export default function EventLeaderboardPage() {
  const { eventId } = useParams({ from: '/leaderboard/event/$eventId' });
  
  return <LeaderboardPage />;
}
