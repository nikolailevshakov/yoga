function forms() {
    // Forms

    let message = {
        loading: 'загрузка',
        success: 'Спасибо, мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit',(event) => {
        // чтобы не обновлялась страница
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        // вместо json 
        let formData = new FormData(form);
        // переводим формдату в json
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState ===4 && request.status ==200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        // очистка инпута после сабмита
        for (let i=0; i < input.length; ++i) {
            input[i].value = '';
        }
    });

    let contactForm = document.getElementById('form'),
        inputContact = document.getElementsByTagName('input');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        // вместо json 
        let formData = new FormData(form);
        // переводим формдату в json
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState ===4 && request.status ==200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        // очистка инпута после сабмита
        for (let i=0; i < input.length; ++i) {
            input[i].value = '';
        }
    });
}

module.exports = forms;