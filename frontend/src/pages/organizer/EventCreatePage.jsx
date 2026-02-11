import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function EventCreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rules, setRules] = useState('');
  const [eligibility, setEligibility] = useState('');
  const [maxTeamSize, setMaxTeamSize] = useState('4');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Event created successfully!');
    navigate({ to: '/organizer/dashboard' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate({ to: '/organizer/dashboard' })}>
        ← Back to Dashboard
      </Button>

      <div>
        <h1 className="text-3xl font-bold mb-2">Create New Event</h1>
        <p className="text-muted-foreground">Set up a new hackathon event</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Event Information</CardTitle>
            <CardDescription>Provide details about your hackathon</CardDescription>
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

            <div className="space-y-2">
              <Label htmlFor="maxTeamSize">Maximum Team Size</Label>
              <Input
                id="maxTeamSize"
                type="number"
                min="1"
                max="10"
                value={maxTeamSize}
                onChange={e => setMaxTeamSize(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create Event
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
