import './css/main.scss';
import headerImgURL from './images/header.png';
import $404ImgURL from './images/404.jpg';
import _portfolio from './portfolio.json';

require('angular');
require('@uirouter/angularjs');
require('angular-animate');
require('ng-async-img');
require('angular-moment');

import moment from 'moment';
import _ from 'lodash';

var portfolio = _.filter(_portfolio, function (it) {
    return !(it.hasOwnProperty('disabled') && it.disabled);
});

var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngAsyncImg', 'angularMoment']);
app.constant('portfolio', portfolio);
app.constant('_', _);
app.constant('moment', moment);
app.constant('images', {
    header: headerImgURL,
    $404: $404ImgURL
});
app.filter('abs', function() {
    return function(num) { return Math.abs(num); }
});

require('./src/routes.js');
require('./src/card.js');
require('./src/home.js');
require('./src/typewriter.js');
require('./src/slogan.js');
require('./src/404.js');