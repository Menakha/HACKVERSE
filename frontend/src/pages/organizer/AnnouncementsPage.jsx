import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { mockAnnouncements } from '@/mocks/db';
import { toast } from 'sonner';

export default function AnnouncementsPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const announcements = mockAnnouncements;

  const handlePublish = () => {
    if (!title || !content) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Announcement published!');
    setTitle('');
    setContent('');
  };

  const handleSaveDraft = () => {
    if (!title || !content) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Draft saved!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Announcements</h1>
        <p className="text-muted-foreground">Create and manage event announcements</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create Announcement</CardTitle>
            <CardDescription>Publish updates to all participants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Announcement title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your announcement..."
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={6}
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handlePublish} className="flex-1">
                Publish
              </Button>
              <Button onClick={handleSaveDraft} variant="outline" className="flex-1">
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Your published and draft announcements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.map(announcement => (
              <div key={announcement.id} className="p-4 border rounded-lg space-y-2">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold">{announcement.title}</h4>
                  <Badge variant={announcement.isDraft ? 'outline' : 'default'}>
                    {announcement.isDraft ? 'Draft' : 'Published'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{announcement.content}</p>
                {announcement.publishedAt && (
                  <p className="text-xs text-muted-foreground">
                    Published {new Date(announcement.publishedAt).toLocaleString()}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
