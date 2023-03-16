const PREFIX = '[NGX-DOM-NAVIGATOR]';

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomNavigator } from 'projects/ngx-dom-navigator/src/public-api';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
	domNavigator: DomNavigator;
	title = 'ngx-dom-navigator-demo';
	codes: number[] = [];
	selected: number = -1;
	@ViewChild('container') container: ElementRef;
	navigator: DomNavigator;
	ngOnInit() {
		for (let index = 0; index < 2000; index++) {
			this.codes.push(index);
		}
	}

	ngAfterViewInit() {
		this.domNavigator = new DomNavigator(this.container.nativeElement, {
			selectedClassName: 'active',
			onChange: (e) => console.log(`${PREFIX} Element changed =>`, e),
			onClick: this.onClick,
			onNavigateDown: () => console.log(`${PREFIX} Navigate down`),
			onNavigateLeft: () => console.log(`${PREFIX} Navigate left`),
			onNavigateRight: () => console.log(`${PREFIX}, Navigate right`),
			onNavigateUp: () => console.log(`${PREFIX} Navigate up`),
			onExit: (e) => console.log(`${PREFIX} Previous selected element =>`, e),
		});
	}

	onClick(e) {
		console.log(`${PREFIX} Element selected =>`, e);
	}
}
