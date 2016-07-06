import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ComedianView} from './comedian.component';
import {DateView} from './date.component';
import {ControlsView} from './controls.component';
import {comedians} from './../models/comedians';

@Component(
    {
        selector:'intro-view',
        templateUrl:'templates/intro.html',
        directives:[ROUTER_DIRECTIVES, DateView, ComedianView, ControlsView]
    })
export /**
 * IntroView
 */
class IntroView implements OnInit, OnDestroy {
    constructor() {

        this.featured = comedians;
        
    }

    ngOnInit()
    {

    }

    ngOnDestroy()
    {

    }

   
    public featured:Array<any>;
}