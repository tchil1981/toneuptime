import {provideRouter, RouterConfig} from '@angular/router';

import {IntroView} from './views/intro.component';

import {BookingView} from './views/booking.component';


export const routes:RouterConfig = 
[
    {
        path:'intro-view', component:IntroView
    },

    {
        path:'booking-view/:id', component:BookingView
    },

    {
        path:'', redirectTo:'intro-view', terminal:true
    }
];

export const APP_ROUTER_PROVIDERS = 
[
    provideRouter(routes)
];