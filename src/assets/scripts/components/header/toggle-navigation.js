import ToggleController from "../../reusable/toggle-hangler.js";

class ToggleNavigation {
    constructor() {
        this.toggle();
    }

    toggle() {
        const triggerClass = 'headerMenuBtn';
        const targetId = 'headerNav';
        this.toggleController = new ToggleController(triggerClass, targetId);
    }
}

export default ToggleNavigation;