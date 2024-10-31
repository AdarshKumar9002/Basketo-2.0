class CreateElement {
    
    static create(type, className ='' , content = '') {
        const ELEMENT = document.createElement(type);

        if(className) {
            ELEMENT.className = className;
        }

        if(content) {
            ELEMENT.textContent = content;
        }
        return ELEMENT;
    }
}

export default CreateElement;