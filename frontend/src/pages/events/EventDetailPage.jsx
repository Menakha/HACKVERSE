import { useParams, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PageHeader from '@/components/layout/PageHeader';
import { Calendar, Users, Trophy, ArrowLeft } from 'lucide-react';

export default function EventDetailPage() {
  const { eventId } = useParams({ from: '/events/$eventId' });
  const navigate = useNavigate();

  const mockEvent = {
    id: eventId,
    title: 'AI Innovation Hackathon 2026',
    description: 'Build the next generation of AI-powered applications. Join developers worldwide in creating innovative solutions that push the boundaries of artificial intelligence.',
    status: 'Active',
    startDate: '2026-03-15',
    endDate: '2026-03-17',
    participants: 156,
    teams: 42,
    prize: '$50,000',
    rules: [
      'Teams must consist of 2-5 members',
      'All code must be original work created during the hackathon',
      'Projects must be submitted before the deadline',
      'Use of AI tools and libraries is encouraged',
    ],
    eligibility: 'Open to all developers worldwide, 18 years or older',
  };

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate({ to: '/events' })}
        className="-ml-2"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Events
      </Button>

      <PageHeader
        title={mockEvent.title}
        description={mockEvent.description}
        actions={
          <>
            <Button variant="outline" onClick={() => navigate({ to: '/teams/create-join' })}>
              <Users className="h-4 w-4 mr-2" />
              Join Team
            </Button>
            <Button onClick={() => navigate({ to: '/submissions/new' })}>
              Submit Project
            </Button>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Days</div>
            <p className="text-xs text-muted-foreground mt-1">
              {mockEvent.startDate} - {mockEvent.endDate}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Participants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockEvent.participants}</div>
            <p className="text-xs text-muted-foreground mt-1">{mockEvent.teams} teams registered</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Prize Pool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockEvent.prize}</div>
            <p className="text-xs text-muted-foreground mt-1">Total prizes</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rules & Guidelines</CardTitle>
          <CardDescription>Please read carefully before participating</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {mockEvent.rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Eligibility</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{mockEvent.eligibility}</p>
        </CardContent>
      </Card>
    </div>
  );
}
