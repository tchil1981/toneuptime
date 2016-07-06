import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateView} from './../views/date.component';

@Component(
    {
        selector:'booking-view',
        templateUrl:'templates/booking.html',
        directives:[DateView]
    })

    export /**
     * BookingView
     */
    class BookingView implements OnInit, OnDestroy {
        constructor() {
            
        }

        ngOnInit(){}

        ngOnDestroy(){}

    }
