import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import PageHeader from '@/components/layout/PageHeader';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export default function SubmissionReviewPage() {
  const { submissionId } = useParams({ from: '/judge/review/$submissionId' });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [scores, setScores] = useState({
    innovation: '',
    technical: '',
    design: '',
    impact: '',
  });
  const [feedback, setFeedback] = useState('');

  const mockSubmission = {
    id: submissionId,
    title: 'AI-Powered Code Assistant',
    team: 'Code Wizards',
    description: 'An intelligent code completion tool that uses machine learning to suggest code snippets and detect potential bugs in real-time.',
    repositoryUrl: 'https://github.com/example/project',
    demoUrl: 'https://demo.example.com',
  };

  const handleSubmitReview = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Review submitted successfully!');
    setIsLoading(false);
    navigate({ to: '/judge/dashboard' });
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate({ to: '/judge/dashboard' })}
        className="-ml-2"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <PageHeader
        title={mockSubmission.title}
        description={`Team: ${mockSubmission.team}`}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{mockSubmission.description}</p>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={mockSubmission.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Repository
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={mockSubmission.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
              <CardDescription>Provide detailed feedback for the team</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your feedback here..."
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scoring</CardTitle>
              <CardDescription>Rate each category (0-100)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="innovation">Innovation</Label>
                <Input
                  id="innovation"
                  type="number"
                  min="0"
                  max="100"
                  value={scores.innovation}
                  onChange={(e) => setScores({ ...scores, innovation: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="technical">Technical Excellence</Label>
                <Input
                  id="technical"
                  type="number"
                  min="0"
                  max="100"
                  value={scores.technical}
                  onChange={(e) => setScores({ ...scores, technical: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="design">Design & UX</Label>
                <Input
                  id="design"
                  type="number"
                  min="0"
                  max="100"
                  value={scores.design}
                  onChange={(e) => setScores({ ...scores, design: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="impact">Impact & Usefulness</Label>
                <Input
                  id="impact"
                  type="number"
                  min="0"
                  max="100"
                  value={scores.impact}
                  onChange={(e) => setScores({ ...scores, impact: e.target.value })}
                />
              </div>
              <Button onClick={handleSubmitReview} className="w-full" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Review'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
