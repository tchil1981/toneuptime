"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    routes_1.APP_ROUTER_PROVIDERS
]).catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map