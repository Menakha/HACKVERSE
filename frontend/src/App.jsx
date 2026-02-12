import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import AppShell from '@/components/shell/AppShell';
import SignInPage from '@/pages/auth/SignInPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';
import RoleOnboardingPage from '@/pages/auth/RoleOnboardingPage';
import EventListPage from '@/pages/events/EventListPage';
import EventDetailPage from '@/pages/events/EventDetailPage';
import EventCreatePage from '@/pages/organizer/EventCreatePage';
import EventEditPage from '@/pages/organizer/EventEditPage';
import TeamDashboardPage from '@/pages/teams/TeamDashboardPage';
import TeamCreateJoinPage from '@/pages/teams/TeamCreateJoinPage';
import InvitationsPage from '@/pages/teams/InvitationsPage';
import CollaborationPage from '@/pages/collaboration/CollaborationPage';
import SubmissionFormPage from '@/pages/submissions/SubmissionFormPage';
import SubmissionConfirmationPage from '@/pages/submissions/SubmissionConfirmationPage';
import SubmissionsHistoryPage from '@/pages/submissions/SubmissionsHistoryPage';
import JudgeDashboardPage from '@/pages/judge/JudgeDashboardPage';
import SubmissionReviewPage from '@/pages/judge/SubmissionReviewPage';
import LeaderboardPage from '@/pages/leaderboard/LeaderboardPage';
import EventLeaderboardPage from '@/pages/leaderboard/EventLeaderboardPage';
import OrganizerDashboardPage from '@/pages/organizer/OrganizerDashboardPage';
import SubmissionsTrackingPage from '@/pages/organizer/SubmissionsTrackingPage';
import TeamMonitoringPage from '@/pages/organizer/TeamMonitoringPage';
import AnnouncementsPage from '@/pages/organizer/AnnouncementsPage';
import ResultsPublishingPage from '@/pages/organizer/ResultsPublishingPage';
import CollaborationSpace3DPage from '@/pages/space3d/CollaborationSpace3DPage';
import ParticipantDashboardPage from '@/pages/participant/ParticipantDashboardPage';
import TownLobbyPage from '@/pages/TownLobbyPage';

const rootRoute = createRootRoute({
  component: AppShell,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SignInPage,
});

const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sign-in',
  component: SignInPage,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sign-up',
  component: SignUpPage,
});

const forgotPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: ForgotPasswordPage,
});

const roleOnboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/onboarding',
  component: RoleOnboardingPage,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: EventListPage,
});

const eventDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events/$eventId',
  component: EventDetailPage,
});

const eventCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/events/create',
  component: EventCreatePage,
});

const eventEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/events/$eventId/edit',
  component: EventEditPage,
});

const teamDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/teams/dashboard',
  component: TeamDashboardPage,
});

const teamCreateJoinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/teams/create-join',
  component: TeamCreateJoinPage,
});

const invitationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/teams/invitations',
  component: InvitationsPage,
});

const collaborationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/collaboration',
  component: CollaborationPage,
});

const submissionFormRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/submissions/new',
  component: SubmissionFormPage,
});

const submissionConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/submissions/confirmation',
  component: SubmissionConfirmationPage,
});

const submissionsHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/submissions/history',
  component: SubmissionsHistoryPage,
});

const judgeDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/judge/dashboard',
  component: JudgeDashboardPage,
});

const submissionReviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/judge/review/$submissionId',
  component: SubmissionReviewPage,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leaderboard',
  component: LeaderboardPage,
});

const eventLeaderboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leaderboard/event/$eventId',
  component: EventLeaderboardPage,
});

const organizerDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/dashboard',
  component: OrganizerDashboardPage,
});

const submissionsTrackingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/submissions',
  component: SubmissionsTrackingPage,
});

const teamMonitoringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/teams',
  component: TeamMonitoringPage,
});

const announcementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/announcements',
  component: AnnouncementsPage,
});

const resultsPublishingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/organizer/results',
  component: ResultsPublishingPage,
});

const space3dRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/space3d',
  component: CollaborationSpace3DPage,
});

const participantDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/participant/dashboard',
  component: ParticipantDashboardPage,
});



const townRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/town',
  component: TownLobbyPage,
});

// Re-add children with new route
const routeTree = rootRoute.addChildren([
  indexRoute,
  signInRoute,
  signUpRoute,
  forgotPasswordRoute,
  roleOnboardingRoute,
  eventsRoute,
  eventDetailRoute,
  eventCreateRoute,
  eventEditRoute,
  teamDashboardRoute,
  teamCreateJoinRoute,
  invitationsRoute,
  collaborationRoute,
  submissionFormRoute,
  submissionConfirmationRoute,
  submissionsHistoryRoute,
  judgeDashboardRoute,
  submissionReviewRoute,
  leaderboardRoute,
  eventLeaderboardRoute,
  organizerDashboardRoute,
  submissionsTrackingRoute,
  teamMonitoringRoute,
  announcementsRoute,
  resultsPublishingRoute,
  space3dRoute,
  participantDashboardRoute,
  townRoute,
]);

const router = createRouter({ routeTree });

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
