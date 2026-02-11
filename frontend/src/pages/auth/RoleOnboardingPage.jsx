import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useSession } from '@/features/auth/useSession';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, Gavel, ArrowRight } from 'lucide-react';
import AuthLayout from '@/components/auth/AuthLayout';
import { BRAND_ASSETS } from '@/components/branding/BrandAssets';

const roles = [
  {
    value: 'participant',
    label: 'Participant',
    description: 'Join hackathons, form teams, and submit projects',
    icon: Users,
  },
  {
    value: 'organizer',
    label: 'Organizer',
    description: 'Create and manage hackathon events',
    icon: Trophy,
  },
  {
    value: 'judge',
    label: 'Judge',
    description: 'Review and score hackathon submissions',
    icon: Gavel,
  },
];

export default function RoleOnboardingPage() {
  const navigate = useNavigate();
  const { setRole } = useSession();
  const [selectedRole, setSelectedRole] = useState('participant');

  const handleContinue = () => {
    setRole(selectedRole);
    if (selectedRole === 'organizer') {
      navigate({ to: '/organizer/dashboard' });
    } else if (selectedRole === 'judge') {
      navigate({ to: '/judge/dashboard' });
    } else {
      navigate({ to: '/participant/dashboard' });
    }
  };

  return (
    <AuthLayout>
      <Card className="glass-effect-strong shadow-soft-xl border-border/40 max-w-2xl w-full">
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="flex justify-center">
            <img src={BRAND_ASSETS.logo} alt="Hackverse" className="h-10 w-auto" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              Choose Your Role
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Select how you want to participate in Hackverse
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = selectedRole === role.value;
              return (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${
                    isSelected
                      ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-accent/5 shadow-glow-sm'
                      : 'border-border/40 hover:border-primary/30 hover:bg-muted/30'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse" />
                  )}
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-primary to-accent shadow-glow-sm' 
                          : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          isSelected ? 'text-primary-foreground' : 'text-primary'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-lg mb-1 transition-colors ${
                          isSelected ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {role.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-glow-sm">
                          <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          <Button 
            onClick={handleContinue} 
            className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-glow font-semibold text-base" 
            size="lg"
          >
            Continue as {roles.find((r) => r.value === selectedRole)?.label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
