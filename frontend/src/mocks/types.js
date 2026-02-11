/**
 * @typedef {'participant' | 'organizer' | 'judge'} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {UserRole} role
 * @property {string} [avatar]
 */

/**
 * @typedef {'upcoming' | 'active' | 'ended'} EventStatus
 */

/**
 * @typedef {Object} Event
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} startDate
 * @property {string} endDate
 * @property {EventStatus} status
 * @property {string} rules
 * @property {string} eligibility
 * @property {number} maxTeamSize
 * @property {string} organizerId
 * @property {string} organizerName
 * @property {number} participantCount
 * @property {string} submissionDeadline
 */

/**
 * @typedef {Object} Team
 * @property {string} id
 * @property {string} name
 * @property {string} [description]
 * @property {string} eventId
 * @property {string} leaderId
 * @property {string[]} memberIds
 * @property {number} maxSize
 * @property {string} createdAt
 */

/**
 * @typedef {Object} TeamMember
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {'leader' | 'member'} role
 * @property {string} joinedAt
 * @property {'online' | 'offline' | 'away'} status
 */

/**
 * @typedef {'pending' | 'accepted' | 'declined'} InvitationStatus
 */

/**
 * @typedef {Object} Invitation
 * @property {string} id
 * @property {string} teamId
 * @property {string} teamName
 * @property {string} inviterId
 * @property {string} inviterName
 * @property {string} inviteeId
 * @property {InvitationStatus} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Message
 * @property {string} id
 * @property {string} channelId
 * @property {string} authorId
 * @property {string} authorName
 * @property {string} content
 * @property {string} timestamp
 */

/**
 * @typedef {Object} Channel
 * @property {string} id
 * @property {string} name
 * @property {string} teamId
 * @property {'general' | 'announcements' | 'submissions'} type
 */

/**
 * @typedef {'draft' | 'submitted' | 'under_review' | 'evaluated'} SubmissionStatus
 */

/**
 * @typedef {Object} FileMetadata
 * @property {string} name
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef {Object} Submission
 * @property {string} id
 * @property {string} eventId
 * @property {string} teamId
 * @property {string} teamName
 * @property {string} title
 * @property {string} description
 * @property {string} [githubUrl]
 * @property {string} [demoUrl]
 * @property {FileMetadata[]} files
 * @property {SubmissionStatus} status
 * @property {string} [submittedAt]
 * @property {number} [score]
 */

/**
 * @typedef {Object} ScoringCriteria
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {number} maxScore
 */

/**
 * @typedef {Object} Score
 * @property {string} criteriaId
 * @property {number} value
 */

/**
 * @typedef {Object} Review
 * @property {string} id
 * @property {string} submissionId
 * @property {string} judgeId
 * @property {Score[]} scores
 * @property {string} feedback
 * @property {number} totalScore
 * @property {'not_started' | 'in_progress' | 'submitted'} status
 * @property {string} [submittedAt]
 */

/**
 * @typedef {Object} LeaderboardEntry
 * @property {number} rank
 * @property {string} teamId
 * @property {string} teamName
 * @property {string} projectTitle
 * @property {number} score
 * @property {'winner' | 'runner-up' | 'finalist'} [badge]
 */

/**
 * @typedef {Object} AnalyticsCard
 * @property {string} title
 * @property {string|number} value
 * @property {string} [change]
 * @property {'up' | 'down' | 'neutral'} [trend]
 */

/**
 * @typedef {Object} ChartDataPoint
 * @property {string} label
 * @property {number} value
 */

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} eventId
 * @property {string} title
 * @property {string} content
 * @property {string} authorId
 * @property {string} authorName
 * @property {string} [publishedAt]
 * @property {boolean} isDraft
 */
