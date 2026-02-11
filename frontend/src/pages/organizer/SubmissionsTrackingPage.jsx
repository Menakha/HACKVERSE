import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';
import { mockSubmissions } from '@/mocks/db';
import PageHeader from '@/components/layout/PageHeader';
import { EmptyState, TableSkeleton } from '@/components/theme/LoadingStates';

export default function SubmissionsTrackingPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isLoading] = useState(false);

  const filteredSubmissions = mockSubmissions.filter(
    sub => statusFilter === 'all' || sub.status === statusFilter
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Submissions Tracking"
        description="Monitor and review all project submissions"
        actions={
          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Submissions</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="under_review">Under Review</SelectItem>
              <SelectItem value="scored">Scored</SelectItem>
            </SelectContent>
          </Select>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
          <CardDescription>
            {filteredSubmissions.length} submission{filteredSubmissions.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <TableSkeleton rows={5} />
          ) : filteredSubmissions.length === 0 ? (
            <EmptyState
              title="No Submissions Found"
              description="No submissions match your current filter. Try adjusting the filter or check back later."
            />
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead>Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map(submission => (
                    <TableRow 
                      key={submission.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <TableCell className="font-medium">{submission.title}</TableCell>
                      <TableCell className="text-muted-foreground">{submission.teamId}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {submission.status.replace('_', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {submission.score ? `${submission.score}/100` : '—'}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {submission.submittedAt 
                          ? new Date(submission.submittedAt).toLocaleDateString()
                          : '—'
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Sheet open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedSubmission && (
            <>
              <SheetHeader className="space-y-3">
                <SheetTitle className="text-2xl">{selectedSubmission.title}</SheetTitle>
                <SheetDescription>{selectedSubmission.description}</SheetDescription>
              </SheetHeader>
              
              <div className="mt-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-muted-foreground">Status</h4>
                  <Badge variant="outline" className="capitalize">
                    {selectedSubmission.status.replace('_', ' ')}
                  </Badge>
                </div>

                {selectedSubmission.score && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground">Score</h4>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold tabular-nums">{selectedSubmission.score}</span>
                      <span className="text-lg text-muted-foreground">/100</span>
                    </div>
                  </div>
                )}

                {(selectedSubmission.githubUrl || selectedSubmission.demoUrl) && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground">Links</h4>
                    <div className="flex flex-col gap-2">
                      {selectedSubmission.githubUrl && (
                        <a 
                          href={selectedSubmission.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:underline font-medium"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          GitHub Repository
                        </a>
                      )}
                      {selectedSubmission.demoUrl && (
                        <a 
                          href={selectedSubmission.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:underline font-medium"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {selectedSubmission.submittedAt && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground">Submitted At</h4>
                    <p className="text-sm">{new Date(selectedSubmission.submittedAt).toLocaleString()}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
