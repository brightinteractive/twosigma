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
            for (var j = 0; j < elementRow.length; j++) {
                var element = elementRow[j];
                if (element) {
                    if (element.type == 'InputText') {
                        elementRow[j] = {
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
                    } else if (element.type == 'Button') {
                        elementRow[j] = {
                            type: element.type,
                            name: element.name,
                            label: element.label,
                            onClick: function() {
                                alert(this.name + ' clicked, data to submit: ' +
                                      form.data.name);
                                form.data = initialData();
                            }
                        };
                    }
                }
            }
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
        ],
        [
            null,
            {
                'type': 'Button',
                'name': 'dontPressMe',
                'label': "Don't press me!"
            }
        ]
    ];
})();
