export interface MetricProject {
    developerUsername?:              string;
    commits?:                        CommitsByUserCommits;
    contributionDistributionByType?: ContributionDistributionByType;
}

export interface CommitsByUserCommits {
    commitCount:          number;
    commitFrequencyByDay: number;
}

export interface ContributionDistributionByType {
    commits:      any;
    issues:       any;
    pullRequests: any;
}

