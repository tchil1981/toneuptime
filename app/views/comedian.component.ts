import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Comedian} from './../models/comedian';

@Component(
    {
        selector:'comedian-view',
        templateUrl:'templates/comedian.html'
    }
)

export /**
 * ComedianView
 */
class ComedianView implements OnInit, OnDestroy{
    constructor() {

        
        
    }

    @Input() comedian:Comedian;

    ngOnInit()
    {
       
    }

    ngOnDestroy()
    {

    }

    public echo(c)
    {
        console.log('am echoed now ', c);
    }
}