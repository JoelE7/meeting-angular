export interface MetricProject {
    commitByUser:                   CommitByUser[];
}

export interface CommitByUser {
    developerUsername: string;
    commits:           CommitByUserCommits;
}

export interface CommitByUserCommits {
    commitCount:          number;
    commitFrequencyByDay: number;
}




