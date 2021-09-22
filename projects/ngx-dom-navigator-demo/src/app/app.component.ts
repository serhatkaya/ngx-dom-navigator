import { Component, OnInit } from '@angular/core';
import { DomNavigator, DomNavigatorElement, DomNavigatorMode } from 'projects/ngx-dom-navigator/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-dom-navigator-demo';
  codes = []
  navigator: DomNavigator;
  ngOnInit() {
    for (let index = 0; index < 2000; index++) {
      this.codes.push(index);
    }

    let container = document.querySelector('#context') as DomNavigatorElement;
    // this.navigator = new DomNavigator(container, { mode: DomNavigatorMode.auto, selectedClassName: 'selected', ignoredClassList: ['ignored-class'] });
    this.navigator = new DomNavigator(container, DomNavigator.DefaultSettings);
    this.navigator.$selectionSubject.subscribe(r => {
      console.log(r);
    });

  }

  click(c) {
    console.log(`Clicked: ${c}`);
  }
}
