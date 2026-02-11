import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Home, FileText } from 'lucide-react';

export default function SubmissionConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-lg w-full text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-success" />
          </div>
          <CardTitle className="text-2xl">Submission Successful!</CardTitle>
          <CardDescription>
            Your project has been submitted successfully. Judges will review your submission and provide feedback soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={() => navigate({ to: '/submissions/history' })} className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            View My Submissions
          </Button>
          <Button variant="outline" onClick={() => navigate({ to: '/participant/dashboard' })} className="w-full">
            <Home className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
