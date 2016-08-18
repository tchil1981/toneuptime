import {Component, OnInit, OnDestroy, Input} from '@angular/core';

@Component(
    {
        selector:'venue-view',
        templateUrl:'templates/venue.html'
    })


    export /**
     * VenueView
     */
    class VenueView  implements OnInit, OnDestroy{
        constructor() {
            
            this.venue ='';
        }

        ngOnInit(){}
        ngOnDestroy(){}

        @Input()
        public venue:String;

         @Input()
         public book:String;

         @Input()
         public info:String;
    }

