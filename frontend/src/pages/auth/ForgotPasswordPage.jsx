import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2, Mail } from 'lucide-react';
import { toast } from 'sonner';
import AuthLayout from '@/components/auth/AuthLayout';
import { BRAND_ASSETS } from '@/components/branding/BrandAssets';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Password reset link sent to your email');
    setIsLoading(false);
    navigate({ to: '/sign-in' });
  };

  return (
    <AuthLayout>
      <Card className="glass-effect-strong shadow-soft-xl border-border/40">
        <CardHeader className="space-y-4 pb-6">
          <Button
            variant="ghost"
            size="sm"
            className="w-fit -ml-2 hover:bg-primary/10 hover:text-primary transition-all"
            onClick={() => navigate({ to: '/sign-in' })}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Sign In
          </Button>
          <div className="flex justify-center">
            <img src={BRAND_ASSETS.logo} alt="Hackverse" className="h-10 w-auto" />
          </div>
          <div className="space-y-2 text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              Reset Password
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              Enter your email address and we'll send you a link to reset your password
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 pl-10 bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-glow font-semibold" 
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
