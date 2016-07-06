import {Component, OnInit, OnDestroy, Input} from '@angular/core'

@Component(
    {
        selector:'controls-view',
        templateUrl:'templates/controls.html'
    })

    export /**
     * ControlView
     */
    class ControlsView implements OnInit, OnDestroy{
        constructor() {
            
        }

        ngOnInit(){}
        ngOnDestroy(){}

        onMoreInfoClick()
        {
            console.log('@ControlsView more-info');
        }

        onBookClick()
        {
            console.log('@ControlsView book');
        }

        @Input()
        public featured:Object;
    }