import {Component, OnInit, OnDestroy, Input} from  '@angular/core';
import {Date} from './../models/date'


@Component(
    {
        selector:'date-view',
        templateUrl:'templates/date.html'
    })

    export /**
     * DateView
     */
    class DateView  implements OnDestroy, OnInit{
        constructor() {
            
        }

        ngOnInit()
        {

        }

        ngOnDestroy()
        {

        }

        @Input()
        date:Date;

        public booking:boolean;
    }