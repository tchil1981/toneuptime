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
var router_1 = require('@angular/router');
var comedian_component_1 = require('./comedian.component');
var date_component_1 = require('./date.component');
var controls_component_1 = require('./controls.component');
var comedians_1 = require('./../models/comedians');
var IntroView = (function () {
    function IntroView() {
        this.featured = comedians_1.comedians;
    }
    IntroView.prototype.ngOnInit = function () {
    };
    IntroView.prototype.ngOnDestroy = function () {
    };
    IntroView = __decorate([
        core_1.Component({
            selector: 'intro-view',
            templateUrl: 'templates/intro.html',
            directives: [router_1.ROUTER_DIRECTIVES, date_component_1.DateView, comedian_component_1.ComedianView, controls_component_1.ControlsView]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroView);
    return IntroView;
}());
exports.IntroView = IntroView;
//# sourceMappingURL=intro.component.js.map