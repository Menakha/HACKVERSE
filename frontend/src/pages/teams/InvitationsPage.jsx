import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockInvitations } from '@/mocks/db';
import { toast } from 'sonner';
import { EmptyState } from '@/components/theme/LoadingStates';
import { Mail } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export default function InvitationsPage() {
  const invitations = mockInvitations;

  const handleAccept = (id) => {
    toast.success('Invitation accepted!');
  };

  const handleDecline = (id) => {
    toast.info('Invitation declined');
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Team Invitations"
        description="Manage your pending team invitations"
      />

      {invitations.length === 0 ? (
        <Card>
          <CardContent className="pt-12 pb-12">
            <EmptyState
              icon={Mail}
              title="No Invitations"
              description="You don't have any pending team invitations at the moment."
            />
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {invitations.map(invitation => (
            <Card key={invitation.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <CardTitle className="text-xl">{invitation.teamName}</CardTitle>
                    <CardDescription>
                      Invited by {invitation.inviterName} on {new Date(invitation.createdAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge className="capitalize">{invitation.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button onClick={() => handleAccept(invitation.id)}>
                    Accept
                  </Button>
                  <Button variant="outline" onClick={() => handleDecline(invitation.id)}>
                    Decline
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
