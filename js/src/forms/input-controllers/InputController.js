import { EventTarget } from "event-target-shim";
export default class InputController extends EventTarget {
    constructor(element) {
        super();

        this.element = element;
        this.name = element.name;
    }
}
