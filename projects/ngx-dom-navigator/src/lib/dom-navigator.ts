import { DomNavigatorMode, DomNavigatorSettings } from "./interfaces/dom-navigator-settings.i";
import { DomNavigatorElement } from "./interfaces/dom-navigator.element.i";

export class DomNavigator {
    private $doc: Document;
    private settings: DomNavigatorSettings;
    private $container: DomNavigatorElement;
    private $keydownHandler;
    private $keys: Array<Function>;
    private $selected: HTMLLIElement;
    private $ignoredClassList: Array<string>;

    constructor(container: DomNavigatorElement, settings: DomNavigatorSettings) {
        this.$doc = window.document;
        this.$container = container;
        this.settings = this.DefaultSettings;
        Object.keys(settings).forEach(key => {
            if (settings[key])
                this.settings[key] = settings[key];
        });
        this.$ignoredClassList = settings.ignoredClassList ?? [];
        this.init();
    }

    private inViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    }

    private unboxElement(obj) {
        if (obj.jquery || Array.isArray(obj)) {
            return obj[0];
        }
        return obj;
    }

    private absoluteOffsetTop(el) {
        let offsetTop = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
        } while ((el = el.offsetParent));
        return offsetTop;
    }

    /**
     * Return the absolute offset left of an element.
     *
     * @param el {Element} The element.
     *
     * @return {Number} The offset left.
     */
    private absoluteOffsetLeft(el) {
        let offsetLeft = 0;
        do {
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while ((el = el.offsetParent));
        return offsetLeft;
    }

    private addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    private removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    /**
     * Directions.
     *
     * @returns {{left: string, up: string, right: string, down: string}}
     * @constructor
     */
    static get DIRECTION() {
        return {
            left: 'left',
            up: 'up',
            right: 'right',
            down: 'down'
        };
    }

    /**
     * Default options.
     *
     * @returns {{mode: string, selected: string, left: number, up: number, right: number, down: number, cols: number}}
     * @constructor
     */
    get DefaultSettings(): DomNavigatorSettings {
        return {
            mode: DomNavigatorMode.auto,
            selectedClassName: 'selected',
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            cols: 0,
            select: 13,
        };
    }

    /**
     * Create a new DOM Navigator.
     *
     * @param container {Element} The container of the element to navigate.
     * @param settings {Object} The options to configure the DOM navigator.
     *
     * @return void.
     */

    /**
     * Initialize the navigator.
     */
    private init() {
        this.validateOptions();
        this.$selected = null;
        this.$keydownHandler = null;

        // Create hotkeys map.
        this.$keys = []
        this.$keys[this.settings.left] = this.left;
        this.$keys[this.settings.up] = this.up;
        this.$keys[this.settings.right] = this.right;
        this.$keys[this.settings.down] = this.down;
        this.$keys[this.settings.select] = this.triggerClick;

        // Calculate cols if needed for grid mode.
        if (this.settings.mode === DomNavigatorMode.grid && !this.settings.cols) {
            let els = this.elements();
            let count = [];
            for (let i = 0; i < els.length; i++) {
                if (i > 0 && count[i - 1] !== els[i].offsetTop) {
                    break;
                }
                count[i] = els[i].offsetTop;
            }
            this.settings.cols = count.length;
        }

        this.enable();
    }

    /**
     * Validate current options.
     *
     * @return void.
     */
    private validateOptions() {
        let validMode = Object.values(DomNavigatorMode).includes(this.settings.mode);
        if (!validMode) {
            throw new Error('Unsupported navigation mode: ' + this.settings.mode);
        }
    }

    /**
     * Enable this navigator.
     *
     * @return void.
     */
    enable() {
        let self = this;
        this.$keydownHandler = function (event) {
            self.handleKeydown.call(self, event);
        };
        this.$doc.addEventListener('keydown', this.$keydownHandler);
    }

    /**
     * Disable this navigator.
     *
     * @return void.
     */
    disable() {
        if (this.$keydownHandler) {
            this.$doc.removeEventListener('keydown', this.$keydownHandler);
        }
        this.clearSelection();
    }

    clearSelection() {
        this.$selected = null;
    }

    /**
     * Destroy this navigator removing any event registered and any other data.
     *
     * @return void.
     */
    destroy() {
        this.disable();
        if (this.$container.domNavigator) {
            delete this.$container.domNavigator;
        }
    }

    /**
     * Navigate left to the next element if any.
     *
     * @return void.
     */
    private left() {
        let next = null;

        switch (this.settings.mode) {

            case DomNavigatorMode.auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let left = this.$selected.offsetLeft - 1;
                let top = this.$selected.offsetTop;

                next = this.elementsBefore(left, Infinity).reduce((prev, curr) => {
                    let currDistance = Math.abs(left - curr.offsetLeft) + Math.abs(top - curr.offsetTop);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;

            case DomNavigatorMode.horizontal:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected.previousElementSibling;
                break;

            case DomNavigatorMode.vertical:
                break;

            case DomNavigatorMode.grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let index = this.elements().indexOf(this.$selected);
                if (index % this.settings.cols !== 0) {
                    next = this.$selected.previousElementSibling;
                }

                break;
        }

        this.select(next, DomNavigator.DIRECTION.left);
    }

    /**
     * Navigate up to the next element if any.
     *
     * @return void.
     */
    private up() {
        let next = null;

        switch (this.settings.mode) {

            case DomNavigatorMode.auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let left = this.$selected.offsetLeft;
                let top = this.$selected.offsetTop - 1;

                next = this.elementsBefore(Infinity, top).reduce((prev, curr) => {
                    let currDistance = Math.abs(left - curr.offsetLeft) + Math.abs(top - curr.offsetTop);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });

                next = next.element;
                break;

            case DomNavigatorMode.horizontal:
                break;

            case DomNavigatorMode.vertical:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected.previousElementSibling;
                break;

            case DomNavigatorMode.grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected;
                for (let i = 0; i < this.settings.cols; i++) {
                    next = next && next.previousElementSibling;
                }

                break;
        }

        this.select(next, DomNavigator.DIRECTION.up);
    }

    /**
     * Triggers click event of the selected element.
     */
    private triggerClick() {
        this.$selected.click();
    }

    /**
     * Navigate right to the next element if any.
     *
     * @return void.
     */
    private right() {
        let next = null;

        switch (this.settings.mode) {

            case DomNavigatorMode.auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let left = this.$selected.offsetLeft + this.$selected.offsetWidth;
                let top = this.$selected.offsetTop;

                next = this.elementsAfter(left, 0).reduce((prev, curr) => {
                    let currDistance = Math.abs(curr.offsetLeft - left) + Math.abs(curr.offsetTop - top);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;

            case DomNavigatorMode.horizontal:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected.nextElementSibling;
                break;

            case DomNavigatorMode.vertical:
                break;

            case DomNavigatorMode.grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let index = this.elements().indexOf(this.$selected);
                if (index === 0 || (index + 1) % this.settings.cols !== 0) {
                    next = this.$selected.nextElementSibling;
                }

                break;
        }

        this.select(next, DomNavigator.DIRECTION.right);
    }

    /**
     * Navigate down to the next element if any.
     */
    private down() {
        let next = null;

        switch (this.settings.mode) {

            case DomNavigatorMode.auto:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                let left = this.$selected.offsetLeft;
                let top = this.$selected.offsetTop + this.$selected.offsetHeight;

                next = this.elementsAfter(0, top).reduce((prev, curr) => {
                    let currDistance = Math.abs(curr.offsetLeft - left) + Math.abs(curr.offsetTop - top);
                    if (currDistance < prev.distance) {
                        return {
                            distance: currDistance,
                            element: curr
                        };
                    }
                    return prev;
                }, {
                    distance: Infinity
                });
                next = next.element;
                break;

            case DomNavigatorMode.horizontal:
                break;

            case DomNavigatorMode.vertical:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected.nextElementSibling;
                break;

            case DomNavigatorMode.grid:
                if (!this.$selected) {
                    next = this.elements()[0];
                    break;
                }

                next = this.$selected;
                for (let i = 0; i < this.settings.cols; i++) {
                    next = next && next.nextElementSibling;
                }

                break;
        }

        this.select(next, DomNavigator.DIRECTION.down);
    }

    /**
     * Return the selected DOM element.
     *
     * @return {Element} The selected DOM element.
     */
    private selected() {
        return this.$selected;
    }

    /**
     * Select the given element.
     *
     * @param {Element} el The DOM element to select.
     * @param {string} direction The direction.
     * @return void
     */
    public select(el, direction) {
        // Is there an element or is it selected?
        if (!el || el === this.$selected) {
            return; // Nothing to do here.
        }
        el = this.unboxElement(el);

        // Unselect previous element.
        if (this.$selected) {
            this.removeClass(this.$selected, this.settings.selectedClassName);
        }

        // Scroll to given element.
        this.scrollTo(el, direction);

        // Select given element.
        this.addClass(el, this.settings.selectedClassName);
        this.$selected = el;
    }

    /**
     * Scroll the container to an element.
     *
     * @param el {Element} The destination element.
     * @param direction {String} The direction of the current navigation.
     *
     * @return void.
     */
    private scrollTo(el, direction) {
        el = this.unboxElement(el);
        if (!this.inContainerViewport(el)) {
            switch (direction) {
                case DomNavigator.DIRECTION.left:
                    this.$container.scrollLeft = el.offsetLeft - this.$container.offsetLeft;
                    break;
                case DomNavigator.DIRECTION.up:
                    this.$container.scrollTop = el.offsetTop - this.$container.offsetTop;
                    break;
                case DomNavigator.DIRECTION.right:
                    this.$container.scrollLeft = el.offsetLeft - this.$container.offsetLeft - (this.$container.offsetWidth - el.offsetWidth);
                    break;
                case DomNavigator.DIRECTION.down:
                    this.$container.scrollTop = el.offsetTop - this.$container.offsetTop - (this.$container.offsetHeight - el.offsetHeight);
                    break;
            }
        } else if (!this.inViewport(el)) {
            switch (direction) {
                case DomNavigator.DIRECTION.left:
                    document.body.scrollLeft = this.absoluteOffsetLeft(el) - document.body.offsetLeft;
                    break;
                case DomNavigator.DIRECTION.up:
                    document.body.scrollTop = this.absoluteOffsetTop(el) - document.body.offsetTop;
                    break;
                case DomNavigator.DIRECTION.right:
                    document.body.scrollLeft = this.absoluteOffsetLeft(el) - document.body.offsetLeft - (document.documentElement.clientWidth - el.offsetWidth);
                    break;
                case DomNavigator.DIRECTION.down:
                    document.body.scrollTop = this.absoluteOffsetTop(el) - document.body.offsetTop - (document.documentElement.clientHeight - el.offsetHeight);
                    break;
            }
        }
    }

    /**
     * Indicate if an element is in the container viewport.
     *
     * @param el {Element} The element to check.
     *
     * @return {Boolean} true if the given element is in the container viewport, otherwise false.
     */
    private inContainerViewport(el) {
        el = this.unboxElement(el);
        // Check on left side.
        if (el.offsetLeft - this.$container.scrollLeft < this.$container.offsetLeft) {
            return false;
        }
        // Check on top side.
        if (el.offsetTop - this.$container.scrollTop < this.$container.offsetTop) {
            return false;
        }
        // Check on right side.
        if ((el.offsetLeft + el.offsetWidth - this.$container.scrollLeft) > (this.$container.offsetLeft + this.$container.offsetWidth)) {
            return false;
        }
        // Check on down side.
        if ((el.offsetTop + el.offsetHeight - this.$container.scrollTop) > (this.$container.offsetTop + this.$container.offsetHeight)) {
            return false;
        }
        return true;
    }

    /**
     * Return an array of the navigable elements.
     *
     * @return {Array} An array of elements.
     */
    private elements() {
        let children = [];
        for (let i = this.$container.children.length; i--;) {
            // Skip comment nodes on IE8
            if (this.$container.children[i].nodeType !== 8 && !this.findCommonElement(this.$container.children[i].classList, this.$ignoredClassList)) {
                children.unshift(this.$container.children[i]);
            }
        }
        return children;
    }

    private findCommonElement(array1, array2) {

        // Loop for array1
        for (let i = 0; i < array1.length; i++) {

            // Loop for array2
            for (let j = 0; j < array2.length; j++) {

                // Compare the element of each and
                // every element from both of the
                // arrays
                if (array1[i] === array2[j]) {

                    // Return if common element found
                    return true;
                }
            }
        }

        // Return if no common element exist
        return false;
    }

    /**
     * Return an array of navigable elements after an offset.
     *
     * @param {number} left The left offset.
     * @param {number} top The top offset.
     *
     * @return {Array} An array of elements.
     */
    private elementsAfter(left, top) {
        return this.elements().filter(el => el.offsetLeft >= left && el.offsetTop >= top);
    }

    /**
     * Return an array of navigable elements before an offset.
     *
     * @param {number} left The left offset.
     * @param {number} top The top offset.
     *
     * @return {Array} An array of elements.
     */
    private elementsBefore(left, top) {
        return this.elements().filter(el => el.offsetLeft <= left && el.offsetTop <= top);
    }

    /**
     * Handle the key down event.
     *
     * @param {Event} event The event object.
     *
     * @return void.
     */
    private handleKeydown(event): void {
        if (this.$keys[event.which]) {
            event.preventDefault();
            this.$keys[event.which].call(this);
        }
    }
}