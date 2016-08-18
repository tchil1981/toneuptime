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

        this.showInfo = false;
        this.readMore = false;
        
    }

    @Input() comedian:Comedian;
    
    @Input() showInfo:boolean;

    @Input() readMore:boolean;

   private  element:any;

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

    public showDesc(event:Object, show:boolean)
    {
        
        this.showInfo =  this.showInfo == false? show : false;

        //console.log(event.target, show);

       // event.target.innerHTML  =  this.showInfo ? 'Hide info':'Read More..';
    }
}