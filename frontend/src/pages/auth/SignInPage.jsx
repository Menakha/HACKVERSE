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

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useSession();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      signIn(email, password);
      setLoading(false);
      navigate({ to: '/participant/dashboard' });
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
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Sign in to continue your hackathon journey
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5">
            {error && (
              <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Button
                  type="button"
                  variant="link"
                  className="px-0 h-auto text-xs text-primary hover:text-accent transition-colors"
                  onClick={() => navigate({ to: '/forgot-password' })}
                  disabled={loading}
                >
                  Forgot password?
                </Button>
              </div>
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
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4 pt-2">
            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-glow font-semibold" 
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <Zap className="ml-2 h-4 w-4" />}
            </Button>
            
            <div className="text-sm text-center text-muted-foreground">
              Don't have an account?{' '}
              <Button
                type="button"
                variant="link"
                className="px-1 h-auto font-semibold text-primary hover:text-accent transition-colors"
                onClick={() => navigate({ to: '/sign-up' })}
                disabled={loading}
              >
                Sign up
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
}
