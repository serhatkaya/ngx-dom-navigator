import { DomNavigatorMode } from '../enums';

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
	onExit?: (element: HTMLElement) => void;
	onChange?: (element: HTMLElement) => void;
	onNavigateUp?: (element: HTMLElement) => void;
	onNavigateDown?: (element: HTMLElement) => void;
	onNavigateLeft?: (element: HTMLElement) => void;
	onNavigateRight?: (element: HTMLElement) => void;
	onClick?: (element: HTMLElement) => void;
}
