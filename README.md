[![Build Status](https://travis-ci.com/serhatkaya/ngx-dom-navigator.svg?branch=master)](https://travis-ci.com/github/serhatkaya/ngx-dom-navigator)
![License](https://img.shields.io/github/license/serhatkaya/ngx-dom-navigator.svg)
![issues](https://img.shields.io/github/issues/serhatkaya/ngx-dom-navigator.svg)

[![buymeacoffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/serhatkaya)


# ngx-dom-navigator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## HTML Dom navigator library.

- Library that allow keyboard navigation through DOM elements (←↑→↓).
- Demo : https://ngx-dom-navigator.vercel.app/

Enchanced version of [http://rmariuzzo.github.io/dom-navigator/](https://rmariuzzo.github.io/dom-navigator/)

## Version 1.0.5

- Added indexSubject to subscribe change of selection, emits the selected element.

- Fixed ignoredClassList not working on horizontal, vertical mode.

## Installation

`npm install ngx-dom-navigator`

## Usage

###### TS

```js
import { DomNavigatorElement, DomNavigator } from 'ngx-dom-navigator';

let container = document.querySelector('#context') as DomNavigatorElement;

let navigator = new DomNavigator(
  container, {
      mode: DomNavigatorMode.auto,
      selectedClassName: 'selected'
     });`;
```

###### HTML

```html
<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		border-color: #3b4253;
		overflow: hidden;
		height: 300px;
	}

	li {
		background-color: #572525;
		border-color: #3b4253 !important;
		color: #b4b7bd;
		width: 50px;
		position: relative;
		margin: 0.25rem;
		display: block;
		padding: 1rem;
		border: 1px solid rgba(34, 41, 47, 0.125);
		float: left;
		font-size: 16px;
	}

	li.selected {
		background-color: #e0ab3a !important;
		color: #fff !important;
	}
</style>
<ul id="context">
	<li
		(click)="click(code)"
		*ngFor="let code of codes; let i = index"
		[class]="i > 30 && i < 40 ? 'ignored-class' : ''"
	>
		{{ code }}
	</li>
</ul>
```

## Properties

- mode: Navigation mode, auto, horizontal, vertical, grid.
- selectedClassName: Selected element html class name.
- left: Key code for left navigation.
- right: Key code for right navigation.
- down: Key code for down navigation.
- up: Key code for up navigation.
- select: Key code for trigger click event (default ENTER)
- ignoredClassList: The classname you want to ignore for navigator.
- indexSubject: RxJs subject that emits the change of selection.

## Functions

- enable: Enables the navigator.
- disable: Disables the navigator and clears selection.
- clearSelection: Clears the selection.
