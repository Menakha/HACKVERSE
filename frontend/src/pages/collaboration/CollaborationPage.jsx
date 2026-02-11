import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import PageHeader from '@/components/layout/PageHeader';
import { Send, Paperclip } from 'lucide-react';

export default function CollaborationPage() {
  const [message, setMessage] = useState('');

  const mockMessages = [
    { id: '1', author: 'Alice', content: 'Hey team! Let\'s discuss our project approach.', timestamp: '10:30 AM' },
    { id: '2', author: 'Bob', content: 'I think we should focus on the AI model first.', timestamp: '10:32 AM' },
    { id: '3', author: 'Carol', content: 'Agreed! I can work on the frontend while you handle that.', timestamp: '10:35 AM' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message send
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Team Collaboration"
        description="Chat and share files with your team members"
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Team Chat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[400px] overflow-y-auto space-y-4 p-4 border rounded-lg">
              {mockMessages.map((msg) => (
                <div key={msg.id} className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{msg.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{msg.author}</span>
                      <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                    </div>
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Alice', 'Bob', 'Carol'].map((member) => (
                <div key={member} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{member.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{member}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
