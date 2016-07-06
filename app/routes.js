"use strict";
var router_1 = require('@angular/router');
var intro_component_1 = require('./views/intro.component');
var booking_component_1 = require('./views/booking.component');
exports.routes = [
    {
        path: 'intro-view', component: intro_component_1.IntroView
    },
    {
        path: 'booking-view/:id', component: booking_component_1.BookingView
    },
    {
        path: '', redirectTo: 'intro-view', terminal: true
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=routes.js.map