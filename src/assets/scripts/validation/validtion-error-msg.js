/* eslint-disable no-shadow */
class ValidationError {

    static errorMsgElement(errorMsg) {
        const ERROR_MSG_ELEMENT = document.createElement('div');
        ERROR_MSG_ELEMENT.id='newsletter-msg';
        ERROR_MSG_ELEMENT.textContent = errorMsg;
        return ERROR_MSG_ELEMENT;
    }

    static appendErrorMsg(errorMsg,errorMsgContainer) {
        const ERROR_MSG = ValidationError.errorMsgElement(errorMsg);
        errorMsgContainer.appendChild(ERROR_MSG);
        
    }
}

export default ValidationError;