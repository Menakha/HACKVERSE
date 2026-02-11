import { Outlet, useLocation, useNavigate } from '@tanstack/react-router';
import { useSession } from '@/features/auth/useSession';
import { useEffect, useState } from 'react';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import RoleNav from './RoleNav';
import DemoModeRoleSwitcher from '@/components/auth/DemoModeRoleSwitcher';
import { BRAND_ASSETS } from '@/components/branding/BrandAssets';

export default function AppShell() {
  const { session, isAuthenticated, signOut } = useSession();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthPage = ['/sign-in', '/sign-up', '/forgot-password', '/onboarding', '/'].includes(location.pathname);

  useEffect(() => {
    if (!isAuthenticated && !isAuthPage) {
      navigate({ to: '/sign-in' });
    }
  }, [isAuthenticated, isAuthPage, navigate]);

  const handleSignOut = () => {
    signOut();
    navigate({ to: '/sign-in' });
  };

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-background">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-72 p-0 glass border-r border-border/40">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="p-6 border-b border-border/40">
                    <img
                      src={BRAND_ASSETS.logo}
                      alt="Hackverse"
                      className="h-8 w-auto"
                    />
                  </div>

                  {/* Nav */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <RoleNav
                      role={session?.role}
                      onNavigate={() => setMobileMenuOpen(false)}
                    />
                  </div>

                  {/* ✅ Mobile Footer */}
                  <div className="p-4 border-t border-border/40 text-xs text-muted-foreground text-center">
                    © {new Date().getFullYear()} Hackverse. All rights reserved.
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <img
              src={BRAND_ASSETS.logo}
              alt="Hackverse"
              className="h-8 w-auto hidden md:block"
            />
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-3">
            <DemoModeRoleSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                      {session?.name?.charAt(0).toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56 glass border-border/40">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{session?.name}</p>
                    <p className="text-xs text-muted-foreground">{session?.email}</p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 flex-col fixed left-0 top-16 bottom-0 border-r border-border/40 glass">
          <div className="flex-1 overflow-y-auto py-6">
            <RoleNav role={session?.role} />
          </div>

          {/* ✅ Desktop Footer */}
          <div className="p-4 border-t border-border/40 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Hackverse. All rights reserved.
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 relative">
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="container py-8 px-4 md:px-6 lg:px-8 relative z-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
