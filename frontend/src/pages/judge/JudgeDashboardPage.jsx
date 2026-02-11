import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/layout/PageHeader';
import { FileText, Clock, CheckCircle } from 'lucide-react';

export default function JudgeDashboardPage() {
  const navigate = useNavigate();

  const mockSubmissions = [
    { id: '1', title: 'AI-Powered Code Assistant', team: 'Code Wizards', status: 'Pending', score: null },
    { id: '2', title: 'Smart Healthcare Platform', team: 'Health Tech', status: 'Reviewed', score: 85 },
    { id: '3', title: 'Blockchain Voting System', team: 'Crypto Innovators', status: 'Pending', score: null },
  ];

  const stats = {
    total: 24,
    reviewed: 8,
    pending: 16,
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Judge Dashboard"
        description="Review and score hackathon submissions"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Total Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Reviewed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.reviewed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submissions to Review</CardTitle>
          <CardDescription>Click on a submission to start reviewing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockSubmissions.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer"
                onClick={() => navigate({ to: `/judge/review/${submission.id}` })}
              >
                <div className="flex-1">
                  <h3 className="font-medium">{submission.title}</h3>
                  <p className="text-sm text-muted-foreground">Team: {submission.team}</p>
                </div>
                <div className="flex items-center gap-3">
                  {submission.score !== null && (
                    <div className="text-right">
                      <div className="text-lg font-bold">{submission.score}</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  )}
                  <Badge variant={submission.status === 'Reviewed' ? 'default' : 'secondary'}>
                    {submission.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
