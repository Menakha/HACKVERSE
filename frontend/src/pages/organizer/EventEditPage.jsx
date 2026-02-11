import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { mockEvents } from '@/mocks/db';
import { toast } from 'sonner';

export default function EventEditPage() {
  const { eventId } = useParams({ from: '/organizer/events/$eventId/edit' });
  const navigate = useNavigate();
  const event = mockEvents.find(e => e.id === eventId);

  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [rules, setRules] = useState(event?.rules || '');
  const [eligibility, setEligibility] = useState(event?.eligibility || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Event updated successfully!');
    navigate({ to: '/organizer/dashboard' });
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate({ to: '/organizer/dashboard' })}>
        ← Back to Dashboard
      </Button>

      <div>
        <h1 className="text-3xl font-bold mb-2">Edit Event</h1>
        <p className="text-muted-foreground">Update your hackathon event details</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Event Information</CardTitle>
            <CardDescription>Update the details of your hackathon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title *</Label>
              <Input
                id="title"
                placeholder="Enter event title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your hackathon"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rules">Rules</Label>
              <Textarea
                id="rules"
                placeholder="Event rules and guidelines"
                value={rules}
                onChange={e => setRules(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eligibility">Eligibility</Label>
              <Textarea
                id="eligibility"
                placeholder="Who can participate?"
                value={eligibility}
                onChange={e => setEligibility(e.target.value)}
                rows={2}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Update Event
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
