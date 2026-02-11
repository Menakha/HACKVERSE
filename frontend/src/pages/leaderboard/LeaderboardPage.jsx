import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trophy, Medal, Award } from 'lucide-react';
import { mockLeaderboard } from '@/mocks/db';
import PageHeader from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/theme/LoadingStates';

export default function LeaderboardPage() {
  const leaderboard = mockLeaderboard;

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Award className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Leaderboard"
        description="Top performing teams across all hackathons"
      />

      <Card>
        <CardHeader>
          <CardTitle>Global Rankings</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleString()}</CardDescription>
        </CardHeader>
        <CardContent>
          {leaderboard.length === 0 ? (
            <EmptyState
              icon={Trophy}
              title="No Rankings Yet"
              description="The leaderboard will be populated once teams start submitting projects and receiving scores."
            />
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Rank</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead className="text-right w-[120px]">Score</TableHead>
                    <TableHead className="w-[140px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboard.map(entry => (
                    <TableRow key={entry.teamId} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getRankIcon(entry.rank)}
                          <span className="font-bold text-base">#{entry.rank}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{entry.teamName}</TableCell>
                      <TableCell className="text-muted-foreground">{entry.projectTitle}</TableCell>
                      <TableCell className="text-right">
                        <span className="font-bold text-lg tabular-nums">{entry.score}</span>
                      </TableCell>
                      <TableCell>
                        {entry.badge && (
                          <Badge variant="default" className="capitalize">
                            {entry.badge.replace('_', ' ')}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
