import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText } from 'lucide-react';
import { mockSubmissions } from '@/mocks/db';
import PageHeader from '@/components/layout/PageHeader';
import { EmptyState } from '@/components/theme/LoadingStates';

export default function SubmissionsHistoryPage() {
  const submissions = mockSubmissions;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Submission History"
        description="View all your submitted projects and their status"
      />

      {submissions.length === 0 ? (
        <Card>
          <CardContent className="pt-12 pb-12">
            <EmptyState
              icon={FileText}
              title="No Submissions Yet"
              description="You haven't submitted any projects yet. Start by creating a submission for an active event."
            />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {submissions.map(submission => (
            <Card key={submission.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <CardTitle className="text-xl">{submission.title}</CardTitle>
                    <CardDescription>{submission.description}</CardDescription>
                  </div>
                  <Badge className="capitalize flex-shrink-0">
                    {submission.status.replace('_', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {(submission.githubUrl || submission.demoUrl) && (
                  <div className="flex flex-wrap gap-4 text-sm">
                    {submission.githubUrl && (
                      <a 
                        href={submission.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-primary hover:underline font-medium"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        GitHub Repository
                      </a>
                    )}
                    {submission.demoUrl && (
                      <a 
                        href={submission.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-primary hover:underline font-medium"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
                {submission.score && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">Score:</span>
                    <span className="text-3xl font-bold tabular-nums">{submission.score}</span>
                    <span className="text-lg text-muted-foreground">/100</span>
                  </div>
                )}
                {submission.submittedAt && (
                  <p className="text-sm text-muted-foreground">
                    Submitted on {new Date(submission.submittedAt).toLocaleString()}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
