import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useSession } from '@/features/auth/useSession';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Zap } from 'lucide-react';
import { BRAND_ASSETS } from '@/components/branding/BrandAssets';
import AuthLayout from '@/components/auth/AuthLayout';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useSession();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      signUp(name, email, password);
      setLoading(false);
      navigate({ to: '/onboarding' });
    }, 800);
  };

  return (
    <AuthLayout>
      <Card className="glass-effect-strong shadow-soft-xl border-border/40">
        <CardHeader className="space-y-4 text-center pb-6">
          <div className="flex justify-center">
            <img src={BRAND_ASSETS.logo} alt="Hackverse" className="h-12 w-auto" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Join Hackverse and start building amazing projects
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={loading}
                className="h-11 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
                className="h-11 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={loading}
                className="h-11 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="h-11 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
              />
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-2">
            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-glow font-semibold" 
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Creating account...' : 'Sign Up'}
              {!loading && <Zap className="ml-2 h-4 w-4" />}
            </Button>
            
            <div className="text-sm text-center text-muted-foreground">
              Already have an account?{' '}
              <Button
                type="button"
                variant="link"
                className="px-1 h-auto font-semibold text-primary hover:text-accent transition-colors"
                onClick={() => navigate({ to: '/sign-in' })}
                disabled={loading}
              >
                Sign in
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
}
