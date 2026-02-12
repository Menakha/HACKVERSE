export const townMap = [
    {
        id: "dashboard",
        label: "Dashboard",
        route: "/participant/dashboard",
        color: "#3b82f6", // blue
        position: [0, 0, 0],
        icon: "dashboard"
    },
    {
        id: "events",
        label: "Events",
        route: "/events",
        color: "#f97316", // orange
        position: [-4, 0, -2],
        icon: "calendar"
    },
    {
        id: "team",
        label: "My Team",
        route: "/teams/dashboard",
        color: "#06b6d4", // cyan
        position: [4, 0, -2],
        icon: "users"
    },
    {
        id: "collab",
        label: "Collaboration",
        route: "/collaboration",
        color: "#ec4899", // pink
        position: [-2, 0, 4],
        icon: "message-circle"
    },
    {
        id: "submissions",
        label: "Submissions",
        route: "/submissions/history",
        color: "#8b5cf6", // purple
        position: [2, 0, 4],
        icon: "upload"
    },
    {
        id: "leaderboard",
        label: "Leaderboard",
        route: "/leaderboard",
        color: "#eab308", // gold
        position: [0, 2, -5],
        icon: "trophy"
    }
];
