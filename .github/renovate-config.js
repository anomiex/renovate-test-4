module.exports = {
	branchPrefix: 'renovate-sh/',
	gitAuthor: 'Renovate Bot (self-hosted) <bot@renovateapp.com>',
	platform: 'github',
	repositories: [ 'anomiex/renovate-test-4' ],

	// We're including configuration in this file.
	onboarding: false,
	requireConfig: false,

	// Post-upgrade command
	allowedCommands: [ '.github/files/renovate-post-upgrade-run.sh' ],
	postUpgradeTasks: {
		commands: [ '.github/files/renovate-post-upgrade-run.sh {{{branchName}}}' ],
		executionMode: 'branch',
	},

	// This is the renovate configuration.
	extends: [ 'config:recommended' ],
	timezone: 'UTC',
};
