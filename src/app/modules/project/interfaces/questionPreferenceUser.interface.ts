export interface QuestionPreferenceUser {
    type:   string;
    result: Result;
}

export interface Result {
    technologie: string;
    question:    string;
    results:     any[];
}
