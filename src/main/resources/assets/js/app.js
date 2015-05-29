(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function() {
        var form = this;
        this.data = initialData();
        this.elements = elements;

        // it would be better to construct a new set of objects instead of
        // augmenting the JSON like this - only doing it this way because
        // time is short!
        for (var i = 0; i < this.elements.length; i++) {
            var elementRow = this.elements[i];
            for (var i = 0; i < elementRow.length; i++) {
                var element = elementRow[i];
                if (element && element.type == 'InputText') {
                    elementRow[i] = {
                        type: element.type,
                        name: element.name,
                        value: function(newValue) {
                            if (arguments.length) {
                                // set
                                return (form.data[this.name] = newValue);
                            } else {
                                // get
                                return form.data[this.name];
                            }
                        }
                    }
                }
            }
        }

        this.submit = function() {
            alert('data to submit: ' + this.data.name);
            this.data = initialData()
        }
    });

    app.directive('formElement', function() {
        return {
            restrict: 'E',
            scope: {element: '='},
            templateUrl: 'directives/elements/any.html'
        };
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

    var initialData = function() {
        return {name: 'Francis'};
    };

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
