import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function ResultsPublishingPage() {
  const [isPublished, setIsPublished] = useState(false);

  const handlePublish = () => {
    setIsPublished(true);
    toast.success('Results published successfully!');
  };

  const handleUnpublish = () => {
    setIsPublished(false);
    toast.info('Results unpublished');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Results Publishing</h1>
        <p className="text-muted-foreground">Manage the publication of hackathon results</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Publication Status</CardTitle>
              <CardDescription>Control when results are visible to participants</CardDescription>
            </div>
            <Badge variant={isPublished ? 'default' : 'outline'} className="text-lg px-4 py-2">
              {isPublished ? 'Published' : 'Draft'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="publish-toggle" className="text-base font-semibold">
                Publish Results
              </Label>
              <p className="text-sm text-muted-foreground">
                Make final rankings and scores visible to all participants
              </p>
            </div>
            <Switch
              id="publish-toggle"
              checked={isPublished}
              onCheckedChange={(checked) => {
                if (checked) {
                  // Will be handled by AlertDialog
                } else {
                  handleUnpublish();
                }
              }}
            />
          </div>

          {!isPublished && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg" className="w-full">
                  Publish Results
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Publish Results?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will make all scores and rankings visible to participants. This action can be reversed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handlePublish}>
                    Publish
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <div className="space-y-3 pt-4 border-t">
            <h4 className="font-semibold">Results Summary</h4>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="p-3 border rounded-lg">
                <p className="text-sm text-muted-foreground">Total Submissions</p>
                <p className="text-2xl font-bold">38</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm text-muted-foreground">Evaluated</p>
                <p className="text-2xl font-bold">38</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="text-sm text-muted-foreground">Avg Score</p>
                <p className="text-2xl font-bold">76.5</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
