window.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    let calc = require('./calculator.js'),
        form = require('./forms.js'),
        modal = require('./modal.js'),
        slider = require('./slider.js'),
        tabs = require('./tabs.js'),
        timer = require('./timer.js');

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

});