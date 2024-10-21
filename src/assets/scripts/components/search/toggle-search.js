import ToggleController from "../../reusable/toggle-hangler.js";

class ToggleSearch {
    constructor() {
        this.toggle();
    }

    toggle() {
        const triggerClass = 'search-btn-nav';
        const targetId = 'search-box-popup';
        this.toggleController = new ToggleController(triggerClass, targetId);
    }
}

export default ToggleSearch;