// import location from 'location-module';

class ToggleHref {
    
    static toggle() {
        const HOME_BTN_ELEMENT = document.getElementById('home-btn');
        if(window.location.pathname.includes('index.html')) {
         
          HOME_BTN_ELEMENT.href = '#top';

        } else {
            HOME_BTN_ELEMENT.href = 'index.html';
        }
    }
}

export default ToggleHref;