/*global require, console, document*/
var creds = require('./credentials');
var Nightmare = require('nightmare');
var nightmare = Nightmare({
    show: true
});

if (!creds || !creds.username || !creds.password) {
    console.warn('missing credentials');
    return;
}

nightmare
    .goto('http://allsmak.baseball.cbssports.com/stats/stats-main')
    .type('#userid', creds.username)
    .type('#password', creds.password)
    .click('#login_form .formButton')
    .wait('#btnExport')
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
