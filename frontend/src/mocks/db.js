export const mockUsers = [
  { id: 'u1', email: 'participant@hackverse.io', name: 'Alex Chen', role: 'participant' },
  { id: 'u2', email: 'organizer@hackverse.io', name: 'Sarah Johnson', role: 'organizer' },
  { id: 'u3', email: 'judge@hackverse.io', name: 'Dr. Michael Roberts', role: 'judge' },
  { id: 'u4', email: 'participant2@hackverse.io', name: 'Jamie Lee', role: 'participant' },
  { id: 'u5', email: 'participant3@hackverse.io', name: 'Taylor Swift', role: 'participant' },
]

export const mockEvents = [
  {
    id: 'e1',
    title: 'AI Innovation Challenge 2026',
    description: 'Build the next generation of AI-powered applications that solve real-world problems.',
    startDate: '2026-03-15T09:00:00Z',
    endDate: '2026-03-17T18:00:00Z',
    status: 'active',
    rules: 'Teams of 2-4 members. Original code only. Open source libraries allowed.',
    eligibility: 'Open to all students and professionals worldwide.',
    maxTeamSize: 4,
    organizerId: 'u2',
    organizerName: 'Sarah Johnson',
    participantCount: 156,
    submissionDeadline: '2026-03-17T16:00:00Z',
  },
  {
    id: 'e2',
    title: 'Web3 DeFi Hackathon',
    description: 'Create innovative decentralized finance solutions on blockchain.',
    startDate: '2026-04-20T09:00:00Z',
    endDate: '2026-04-22T18:00:00Z',
    status: 'upcoming',
    rules: 'Teams of 2-5 members. Must deploy on testnet.',
    eligibility: 'Open to blockchain developers and enthusiasts.',
    maxTeamSize: 5,
    organizerId: 'u2',
    organizerName: 'Sarah Johnson',
    participantCount: 89,
    submissionDeadline: '2026-04-22T16:00:00Z',
  },
  {
    id: 'e3',
    title: 'Climate Tech Solutions',
    description: 'Develop technology solutions to combat climate change.',
    startDate: '2026-02-01T09:00:00Z',
    endDate: '2026-02-03T18:00:00Z',
    status: 'ended',
    rules: 'Teams of 2-4 members. Focus on sustainability.',
    eligibility: 'Open to all.',
    maxTeamSize: 4,
    organizerId: 'u2',
    organizerName: 'Sarah Johnson',
    participantCount: 124,
    submissionDeadline: '2026-02-03T16:00:00Z',
  },
]

export const mockTeams = [
  {
    id: 't1',
    name: 'Neural Ninjas',
    description: 'AI enthusiasts building the future',
    eventId: 'e1',
    leaderId: 'u1',
    memberIds: ['u1', 'u4', 'u5'],
    maxSize: 4,
    createdAt: '2026-03-10T10:00:00Z',
  },
  {
    id: 't2',
    name: 'Blockchain Builders',
    description: 'Decentralizing everything',
    eventId: 'e2',
    leaderId: 'u4',
    memberIds: ['u4', 'u5'],
    maxSize: 5,
    createdAt: '2026-04-15T10:00:00Z',
  },
]

export const mockTeamMembers = [
  { id: 'u1', name: 'Alex Chen', email: 'participant@hackverse.io', role: 'leader', joinedAt: '2026-03-10T10:00:00Z', status: 'online' },
  { id: 'u4', name: 'Jamie Lee', email: 'participant2@hackverse.io', role: 'member', joinedAt: '2026-03-10T11:00:00Z', status: 'online' },
  { id: 'u5', name: 'Taylor Swift', email: 'participant3@hackverse.io', role: 'member', joinedAt: '2026-03-10T12:00:00Z', status: 'away' },
]

export const mockInvitations = [
  {
    id: 'i1',
    teamId: 't1',
    teamName: 'Neural Ninjas',
    inviterId: 'u1',
    inviterName: 'Alex Chen',
    inviteeId: 'u4',
    status: 'pending',
    createdAt: '2026-03-11T10:00:00Z',
  },
]

export const mockChannels = [
  { id: 'c1', name: 'general', teamId: 't1', type: 'general' },
  { id: 'c2', name: 'announcements', teamId: 't1', type: 'announcements' },
  { id: 'c3', name: 'submissions', teamId: 't1', type: 'submissions' },
]

export const mockMessages = [
  {
    id: 'm1',
    channelId: 'c1',
    authorId: 'u1',
    authorName: 'Alex Chen',
    content: 'Hey team! Ready to build something amazing?',
    timestamp: '2026-03-15T10:00:00Z',
  },
  {
    id: 'm2',
    channelId: 'c1',
    authorId: 'u4',
    authorName: 'Jamie Lee',
    content: "Absolutely! I've been working on the ML model.",
    timestamp: '2026-03-15T10:05:00Z',
  },
  {
    id: 'm3',
    channelId: 'c1',
    authorId: 'u5',
    authorName: 'Taylor Swift',
    content: 'UI mockups are ready for review!',
    timestamp: '2026-03-15T10:10:00Z',
  },
]

export const mockSubmissions = [
  {
    id: 's1',
    eventId: 'e1',
    teamId: 't1',
    teamName: 'Neural Ninjas',
    title: 'AI-Powered Code Review Assistant',
    description: 'An intelligent code review tool that uses machine learning to identify bugs and suggest improvements.',
    githubUrl: 'https://github.com/neural-ninjas/code-reviewer',
    demoUrl: 'https://demo.neural-ninjas.io',
    files: [
      { name: 'presentation.pdf', size: 2048000, type: 'application/pdf' },
      { name: 'demo-video.mp4', size: 15360000, type: 'video/mp4' },
    ],
    status: 'submitted',
    submittedAt: '2026-03-17T15:30:00Z',
    score: 87,
  },
  {
    id: 's2',
    eventId: 'e1',
    teamId: 't2',
    teamName: 'Blockchain Builders',
    title: 'Decentralized Identity Platform',
    description: 'A blockchain-based identity verification system.',
    githubUrl: 'https://github.com/blockchain-builders/identity',
    files: [],
    status: 'under_review',
    submittedAt: '2026-03-17T14:00:00Z',
  },
]

export const mockLeaderboard = [
  { rank: 1, teamId: 't1', teamName: 'Neural Ninjas', projectTitle: 'AI-Powered Code Review Assistant', score: 87, badge: 'winner' },
  { rank: 2, teamId: 't2', teamName: 'Blockchain Builders', projectTitle: 'Decentralized Identity Platform', score: 82, badge: 'runner-up' },
  { rank: 3, teamId: 't3', teamName: 'Cloud Crusaders', projectTitle: 'Serverless Deployment Platform', score: 78, badge: 'finalist' },
  { rank: 4, teamId: 't4', teamName: 'Data Dynamos', projectTitle: 'Real-time Analytics Dashboard', score: 75 },
  { rank: 5, teamId: 't5', teamName: 'Security Squad', projectTitle: 'Vulnerability Scanner', score: 72 },
]
export const mockAnalyticsCards = [
  { title: 'Total Participants', value: 156, change: '+12%', trend: 'up' },
  { title: 'Teams Formed', value: 42, change: '+8%', trend: 'up' },
  { title: 'Submissions', value: 38, change: '+5%', trend: 'up' },
  { title: 'Avg. Team Size', value: 3.7, change: '-2%', trend: 'down' },
];

export const mockChartData = [
  { label: 'Mon', value: 12 },
  { label: 'Tue', value: 19 },
  { label: 'Wed', value: 28 },
  { label: 'Thu', value: 35 },
  { label: 'Fri', value: 42 },
  { label: 'Sat', value: 38 },
  { label: 'Sun', value: 22 },
];

export const mockAnnouncements = [
  {
    id: 'a1',
    eventId: 'e1',
    title: 'Welcome to AI Innovation Challenge!',
    content: "We're excited to have you here. Check out the rules and start building!",
    authorId: 'u2',
    authorName: 'Sarah Johnson',
    publishedAt: '2026-03-15T09:00:00Z',
    isDraft: false,
  },
  {
    id: 'a2',
    eventId: 'e1',
    title: 'Submission Deadline Reminder',
    content: "Don't forget to submit your projects by 4 PM tomorrow!",
    authorId: 'u2',
    authorName: 'Sarah Johnson',
    isDraft: true,
  },
];
