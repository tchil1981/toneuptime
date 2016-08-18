"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var date_component_1 = require('./../views/date.component');
var venue_component_1 = require('./../views/venue.component');
var comedian_component_1 = require('./comedian.component');
var comedians_1 = require('./../models/comedians');
var router_1 = require('@angular/router');
var BookingView = (function () {
    function BookingView(router, route) {
        this.router = router;
        this.route = route;
    }
    BookingView.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.featured = comedians_1.comedians[id];
        var action = +this.route.snapshot.params['action'];
        switch (action) {
            case 1:
                this.info = 'info';
                break;
            default:
                this.book = 'book';
                break;
        }
    };
    BookingView.prototype.ngOnDestroy = function () { };
    BookingView = __decorate([
        core_1.Component({
            selector: 'booking-view',
            templateUrl: 'templates/booking.html',
            directives: [date_component_1.DateView, venue_component_1.VenueView, comedian_component_1.ComedianView]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], BookingView);
    return BookingView;
}());
exports.BookingView = BookingView;
//# sourceMappingURL=booking.component.js.map