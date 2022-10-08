let notificationDot = document.getElementsByClassName('new');
let notifications = document.getElementsByClassName('notification');
let badge = document.getElementsByClassName('badge')[0];

let state = true;

const toggleRead = () => {
    if(state) {
        state = false;

        Array.from(notificationDot).forEach(el => {
            el.style.display = 'none'
        })
        
        for(let i = 0; i < 3; i++) {
            notifications[i].classList.remove('unread')
        }

        badge.innerHTML = '0';
    } else {
        state = true;
        Array.from(notificationDot).forEach(el => {
            el.style.display = ''
        })
        
        for(let i = 0; i < 3; i++) {
            notifications[i].classList.add('unread')
        }

        badge.innerHTML = '3';
    }
}