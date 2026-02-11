import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Calendar, Users, Trophy, Upload, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ParticipantDashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Here's what's happening in your hackathons</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently participating</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Teams</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Neural Ninjas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submissions</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Submitted projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#1</div>
            <p className="text-xs text-muted-foreground">Current leaderboard</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Hackathons</CardTitle>
            <CardDescription>Your ongoing competitions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between p-4 border rounded-lg hover-lift cursor-pointer" onClick={() => navigate({ to: '/events/$eventId', params: { eventId: 'e1' } })}>
              <div className="space-y-1">
                <h4 className="font-semibold">AI Innovation Challenge 2026</h4>
                <p className="text-sm text-muted-foreground">Ends in 2 days</p>
                <Badge variant="default">Active</Badge>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started quickly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate({ to: '/events' })}>
              <Calendar className="mr-2 h-4 w-4" />
              Browse Events
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate({ to: '/teams/create-join' })}>
              <Users className="mr-2 h-4 w-4" />
              Create/Join Team
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate({ to: '/collaboration' })}>
              <MessageSquare className="mr-2 h-4 w-4" />
              Team Chat
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate({ to: '/submissions/new' })}>
              <Upload className="mr-2 h-4 w-4" />
              Submit Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
