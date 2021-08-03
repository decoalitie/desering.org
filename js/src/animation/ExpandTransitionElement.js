import { appearTransitionsEnabled } from "./appearTransitions";
import nextFrame from "./nextFrame";
import prefersReducedMotion from "./prefersReducedMotion";

/**
 * Element that shows/hides with an expand/collapse animation
 */
export default class ExpandTransitionElement {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add('ExpandTransitionElement');

        this._visible = false;
        this.display = 'none';

        this.activeTransitionCount = 0;

        this.element.addEventListener('transitionrun', this.handleTransitionRun.bind(this));
        this.element.addEventListener('transitioncancel', this.handleTransitionCancel.bind(this));
        this.element.addEventListener('transitionend', this.handleTransitionEnd.bind(this));
    }

    handleTransitionCancel() {
        this.activeTransitionCount--;
    }

    handleTransitionEnd() {
        this.activeTransitionCount--;

        if (!this.activeTransitionCount) {
            this.display = this._visible ? 'block' : 'none';
        }
    }

    handleTransitionRun() {
        this.activeTransitionCount++;
    }

    get display() {
        return this._display;
    }

    set display(display) {
        if (display !== this._display) {
            this.element.style.display = display;
            this._display = display;
        }
    }

    get visible() {
        return this._visible;
    }

    set visible(visible) {
        if (this._visible === !!visible) {
            return;
        }

        const reducedMotion = prefersReducedMotion();
        if (visible) {
            const transitionEnabled = !reducedMotion && this.display !== 'block' && appearTransitionsEnabled();
            const delay = transitionEnabled ? nextFrame : (fn => fn());
            this.display = 'block';

            delay(() => {
                this.element.style.maxHeight = `${this.element.scrollHeight}px`;
            });
        } else {
            const transitionEnabled = !reducedMotion && this.display === 'block' && appearTransitionsEnabled();
            this.element.style.maxHeight = 0;

            if (!transitionEnabled && !this.activeTransitionCount) {
                this.display = 'none';
            }
        }

        this._visible = !!visible;
    }
}
