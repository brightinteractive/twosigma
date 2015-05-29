(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function() {
        this.elements = elements;
    });

    app.directive('textElement', function() {
        return {
            restrict: 'E',
            scope: {element: '='},
            templateUrl: 'directives/elements/text.html'
        };
    });

    app.directive('inputTextElement', function() {
        return {
            restrict: 'E',
            scope: {element: '='},
            templateUrl: 'directives/elements/input-text.html'
        };
    });

    app.directive('buttonElement', function() {
        return {
            restrict: 'E',
            scope: {element: '='},
            templateUrl: 'directives/elements/button.html'
        };
    });

    // some hard-coded data in the format we expect it to be returned from the server
    var elements = [
        [
            {
                'type': 'Text',
                'label': 'What is your name?',
            },
            {
                'type': 'InputText',
                'name': 'name',
            }
        ],
        [
            null,
            {
                'type': 'Button',
                'name': 'pressMe',
                'label': 'Press me!'
            }
        ]
    ];
})();
