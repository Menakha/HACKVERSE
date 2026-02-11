import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageHeader from '@/components/layout/PageHeader';
import { toast } from 'sonner';

export default function TeamCreateJoinPage() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Team created successfully!');
    setIsLoading(false);
    navigate({ to: '/teams/dashboard' });
  };

  const handleJoinTeam = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Joined team successfully!');
    setIsLoading(false);
    navigate({ to: '/teams/dashboard' });
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create or Join Team"
        description="Start collaborating with other participants"
      />

      <Card className="max-w-2xl mx-auto">
        <Tabs defaultValue="create" className="w-full">
          <CardHeader>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="create">Create Team</TabsTrigger>
              <TabsTrigger value="join">Join Team</TabsTrigger>
            </TabsList>
          </CardHeader>

          <TabsContent value="create">
            <form onSubmit={handleCreateTeam}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Creating...' : 'Create Team'}
                </Button>
              </CardContent>
            </form>
          </TabsContent>

          <TabsContent value="join">
            <form onSubmit={handleJoinTeam}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inviteCode">Invite Code</Label>
                  <Input
                    id="inviteCode"
                    placeholder="Enter team invite code"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Join Team'}
                </Button>
              </CardContent>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
