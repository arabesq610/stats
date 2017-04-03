/*global require, console, document*/
var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true
});

nightmare
    .goto('http://allsmak.baseball.cbssports.com/stats/stats-main')
    .type('#userid', 'USERNAME')
    .type('#password', 'PASSWORD')
    .click('#login_form .formButton')
    .wait('#standardBody')
    .click('#btnExport')
    .evaluate(function () {
        'use strict';
        return document.querySelector('#standardBody');
    })
    .end()
    .then(function (result) {
        'use strict';
        console.log(result);
    })
    .catch(function (error) {
        'use strict';
        console.error('Fail ', error);
    });
