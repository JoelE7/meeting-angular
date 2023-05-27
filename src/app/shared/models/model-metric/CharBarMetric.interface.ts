export interface ChartBarData {
    labels:   any[];
    datasets: Dataset[];
}

export interface Dataset {
    label:           string;
    backgroundColor: string;
    borderColor:     string;
    data:            any[];
}
