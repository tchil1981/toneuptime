import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './routes';

bootstrap(AppComponent, 
[
    APP_ROUTER_PROVIDERS
]).catch(error=>console.log(error));
