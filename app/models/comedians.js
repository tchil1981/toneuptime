"use strict";
var comedian_1 = require('./comedian');
exports.comedians = [
    {
        comedians: [
            new comedian_1.Comedian('Tom', '', 'images/landscape.jpg', "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"),
            new comedian_1.Comedian('Brandon', '', 'images/landscape.jpg', "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat")
        ],
        date: {
            string: 'Thursday 12th November',
            day: '12th',
            time: '08\:00pm-10\:00pm'
        },
        id: 0,
        venue: 'Kings College High Holborn'
    },
    {
        comedians: [
            new comedian_1.Comedian('David', '', 'images/landscape.jpg', "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"),
            new comedian_1.Comedian('Eddi Muppy', '', 'images/landscape.jpg', "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat")
        ],
        date: {
            string: 'Monday 23rd November',
            day: '23rd',
            time: '06\:00pm-8\:00pm'
        },
        id: 1,
        venue: 'Soho Theatre London'
    },
    {
        comedians: [
            new comedian_1.Comedian('Benson Carson', '', 'images/landscape.jpg', 'description'),
            new comedian_1.Comedian('Richard Dawson', '', 'images/landscape.jpg', 'description')
        ],
        date: {
            string: 'Friday 17th November',
            day: '17th',
            time: '10\:00pm-11\:50pm'
        },
        id: 2,
        venue: 'Camden Town Market E1'
    }
];
//# sourceMappingURL=comedians.js.map