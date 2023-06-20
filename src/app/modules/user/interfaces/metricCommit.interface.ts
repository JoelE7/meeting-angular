export interface MetricCommit {
    issuesReported:                number;
    contributionsExternalProjects: number;
    averagePopularityProjects:     number;
    maxStarsProject:               number;
    personalProjects:              number;
    outsideProjects:               number;
    commits:                       Commit[];
}

export interface Commit {
    nameRepository:  string;
    quantityCommits: number;
}
