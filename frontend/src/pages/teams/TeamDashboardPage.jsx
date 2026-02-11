import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import PageHeader from '@/components/layout/PageHeader';
import { Users, Mail, ExternalLink } from 'lucide-react';

export default function TeamDashboardPage() {
  const navigate = useNavigate();

  const mockTeam = {
    name: 'Code Wizards',
    event: 'AI Innovation Hackathon 2026',
    members: [
      { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Leader' },
      { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'Member' },
      { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Member' },
    ],
    inviteCode: 'WIZARD2026',
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Team"
        description="Manage your team and collaborate with members"
        actions={
          <>
            <Button variant="outline" onClick={() => navigate({ to: '/collaboration' })}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Collaboration Space
            </Button>
            <Button onClick={() => navigate({ to: '/space3d' })}>
              3D Space
            </Button>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{mockTeam.name}</CardTitle>
            <CardDescription>Participating in {mockTeam.event}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">Team Invite Code</div>
              <div className="flex items-center gap-2">
                <code className="flex-1 px-3 py-2 bg-muted rounded-md font-mono text-sm">
                  {mockTeam.inviteCode}
                </code>
                <Button size="sm" variant="outline">Copy</Button>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2">Team Size</div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{mockTeam.members.length} members</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your team activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" onClick={() => navigate({ to: '/teams/invitations' })}>
              <Mail className="h-4 w-4 mr-2" />
              View Invitations
            </Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => navigate({ to: '/submissions/new' })}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Submit Project
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Collaborate with your teammates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTeam.members.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.email}</div>
                  </div>
                </div>
                <Badge variant={member.role === 'Leader' ? 'default' : 'secondary'}>
                  {member.role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
