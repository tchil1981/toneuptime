
import {Comedian} from './comedian';

export const comedians:Array<Object>=
[
    {
        comedians:
        [
            new Comedian('Tom', '', 'images/landscape.jpg', 'description'),
            new Comedian('Brandon', '', 'images/landscape.jpg', 'description')
        ],

        date:
        {
            string:'Thursday 12th November',
            day:'12th',
            time:'08\:00pm-10\:00pm'
        },

        id:0
    },


    {
        comedians:
        [
            new Comedian('David', '', 'images/landscape.jpg', 'description'),
            new Comedian('Eddi Muppy', '', 'images/landscape.jpg', 'description')
        ],


         date:
        {
            string:'Monday 23rd November',
            day:'23rd',
            time:'06\:00pm-8\:00pm'
        },

         id:1
    },



    {
        comedians:
        [
             new Comedian('Benson Carson', '', 'images/landscape.jpg', 'description'),
             new Comedian('Richard Dawson', '', 'images/landscape.jpg', 'description')
        ],

         date:
        {
            string:'Friday 17th November',
            day:'17th',
            time:'10\:00pm-11\:50pm'
        },

         id:2
    }
]