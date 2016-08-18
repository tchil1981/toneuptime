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
var comedian_1 = require('./../models/comedian');
var ComedianView = (function () {
    function ComedianView() {
        this.showInfo = false;
        this.readMore = false;
    }
    ComedianView.prototype.ngOnInit = function () {
    };
    ComedianView.prototype.ngOnDestroy = function () {
    };
    ComedianView.prototype.echo = function (c) {
        console.log('am echoed now ', c);
    };
    ComedianView.prototype.showDesc = function (event, show) {
        this.showInfo = this.showInfo == false ? show : false;
        //console.log(event.target, show);
        // event.target.innerHTML  =  this.showInfo ? 'Hide info':'Read More..';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', comedian_1.Comedian)
    ], ComedianView.prototype, "comedian", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ComedianView.prototype, "showInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ComedianView.prototype, "readMore", void 0);
    ComedianView = __decorate([
        core_1.Component({
            selector: 'comedian-view',
            templateUrl: 'templates/comedian.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ComedianView);
    return ComedianView;
}());
exports.ComedianView = ComedianView;
//# sourceMappingURL=comedian.component.js.map