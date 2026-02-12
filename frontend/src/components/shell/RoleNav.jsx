import { useNavigate, useLocation } from '@tanstack/react-router';
import {
  Home,
  Calendar,
  Users,
  MessageSquare,
  Upload,
  Trophy,
  Gavel,
  BarChart3,
  Bell,
  CheckCircle,
  Box
} from 'lucide-react';
import { cn } from '@/lib/utils';

const participantNav = [
  { label: 'Dashboard', path: '/participant/dashboard', icon: Home },
  { label: 'Events', path: '/events', icon: Calendar },
  { label: 'My Team', path: '/teams/dashboard', icon: Users },
  { label: 'Collaboration', path: '/collaboration', icon: MessageSquare },
  { label: 'Submissions', path: '/submissions/history', icon: Upload },
  { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
  { label: '3D Space', path: '/town', icon: Box },
];

const organizerNav = [
  { label: 'Dashboard', path: '/organizer/dashboard', icon: Home },
  { label: 'Events', path: '/events', icon: Calendar },
  { label: 'Submissions', path: '/organizer/submissions', icon: Upload },
  { label: 'Teams', path: '/organizer/teams', icon: Users },
  { label: 'Announcements', path: '/organizer/announcements', icon: Bell },
  { label: 'Results', path: '/organizer/results', icon: CheckCircle },
  { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
];

const judgeNav = [
  { label: 'Dashboard', path: '/judge/dashboard', icon: Home },
  { label: 'Review Queue', path: '/judge/dashboard', icon: Gavel },
  { label: 'Analytics', path: '/judge/dashboard', icon: BarChart3 },
  { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
];

export default function RoleNav({ role, onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems =
    role === 'organizer'
      ? organizerNav
      : role === 'judge'
        ? judgeNav
        : participantNav;

  const handleNavigation = (path) => {
    navigate({ to: path });
    onNavigate?.();
  };

  return (
    <nav className="space-y-1 px-3">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group relative overflow-hidden',
              isActive
                ? 'bg-gradient-to-r from-primary/20 to-accent/10 text-primary glow-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            )}
          >
            {/* Active indicator glow */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5 animate-pulse" />
            )}

            {/* Icon with enhanced states */}
            <Icon
              className={cn(
                'h-5 w-5 flex-shrink-0 transition-all duration-300 relative z-10',
                isActive
                  ? 'text-primary'
                  : 'group-hover:text-primary group-hover:scale-110'
              )}
            />

            {/* Label */}
            <span className="relative z-10">{item.label}</span>

            {/* Hover shimmer effect */}
            {!isActive && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
