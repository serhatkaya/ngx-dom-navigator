export interface DomNavigatorSettings {
    mode?: DomNavigatorMode;
    selectedClassName?: string;
    left?: number;
    up?: number;
    right?: number;
    down?: number;
    cols?: number;
    select?: number;
    ignoredClassList?: Array<string>;
}

export enum DomNavigatorMode {
    auto = 1,
    horizontal = 2,
    vertical = 3,
    grid = 4
}