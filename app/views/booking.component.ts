import {Component, OnInit, OnDestroy} from '@angular/core';
import {DateView} from './../views/date.component';
import {VenueView} from './../views/venue.component';
import {ComedianView} from './comedian.component';

import {comedians} from './../models/comedians';
import {Router, ActivatedRoute} from '@angular/router';

@Component(
    {
        selector:'booking-view',
        templateUrl:'templates/booking.html',
        directives:[DateView, VenueView, ComedianView]
    })

    export /**
     * BookingView
     */
    class BookingView implements OnInit, OnDestroy {

        constructor(private router:Router, private  route:ActivatedRoute) { 
        }

        ngOnInit()
        {
            var id:number = +this.route.snapshot.params['id'];

            this.featured = comedians[id];

           var action= +this.route.snapshot.params['action'];


           switch (action) {
               case 1:
                   this.info = 'info';
                   break;
           
               default:
                   this.book = 'book';  
                   break;
           }
          
         
        }

        ngOnDestroy(){}

        public featured:Object;
        public info:String;
        public book:String;

    }
