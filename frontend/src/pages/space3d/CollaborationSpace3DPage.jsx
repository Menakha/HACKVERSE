import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { mockTeamMembers } from '@/mocks/db';
import PageHeader from '@/components/layout/PageHeader';

export default function CollaborationSpace3DPage() {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const members = mockTeamMembers;

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setWebGLSupported(!!gl);

    const handleKeyDown = (e) => {
      const step = 5;
      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          setPosition(prev => ({ ...prev, y: prev.y - step }));
          break;
        case 's':
        case 'arrowdown':
          setPosition(prev => ({ ...prev, y: prev.y + step }));
          break;
        case 'a':
        case 'arrowleft':
          setPosition(prev => ({ ...prev, x: prev.x - step }));
          break;
        case 'd':
        case 'arrowright':
          setPosition(prev => ({ ...prev, x: prev.x + step }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!webGLSupported) {
    return (
      <div className="space-y-8">
        <PageHeader
          title="3D Collaboration Space"
          description="Navigate the virtual hackathon environment"
        />
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>WebGL Not Supported</AlertTitle>
          <AlertDescription>
            WebGL is not supported in your browser. Please use a modern browser with WebGL support to access the 3D collaboration space.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="3D Collaboration Space"
        description="Navigate the virtual hackathon environment and see your team members in real-time"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="relative overflow-hidden">
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 aspect-video flex items-center justify-center">
              <div className="absolute inset-0 grid-bg-dense opacity-30" />
              
              <div className="relative w-full h-full">
                <div
                  className="absolute w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold transition-all duration-200 shadow-lg"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  You
                </div>

                {members.slice(1).map((member, index) => (
                  <div
                    key={member.id}
                    className="absolute w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-semibold shadow-md"
                    style={{
                      left: `${30 + index * 20}%`,
                      top: `${40 + index * 15}%`,
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                ))}
              </div>

              <div className="absolute bottom-4 left-4 glass-effect-strong p-4 rounded-lg shadow-soft">
                <p className="text-sm font-semibold mb-3">Controls</p>
                <div className="grid grid-cols-3 gap-1">
                  <div />
                  <div className="flex items-center justify-center p-2 border border-border rounded bg-background/50">
                    <ArrowUp className="h-4 w-4" />
                  </div>
                  <div />
                  <div className="flex items-center justify-center p-2 border border-border rounded bg-background/50">
                    <ArrowLeft className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-center p-2 border border-border rounded text-xs font-semibold bg-background/50">
                    WASD
                  </div>
                  <div className="flex items-center justify-center p-2 border border-border rounded bg-background/50">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <div />
                  <div className="flex items-center justify-center p-2 border border-border rounded bg-background/50">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                  <div />
                </div>
              </div>

              <div className="absolute top-4 left-4 glass-effect-strong px-3 py-2 rounded-lg shadow-soft text-sm font-mono">
                Position: ({position.x}, {position.y})
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {members.map(member => (
                <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{member.name}</p>
                    <Badge 
                      variant={member.status === 'online' ? 'default' : 'outline'} 
                      className="text-xs mt-1"
                    >
                      {member.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Minimap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-muted rounded-lg relative overflow-hidden border border-border">
                <div className="absolute inset-0 grid-bg-dense opacity-20" />
                <div
                  className="absolute w-2 h-2 bg-primary rounded-full shadow-sm"
                  style={{
                    left: `calc(50% + ${position.x / 5}px)`,
                    top: `calc(50% + ${position.y / 5}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
