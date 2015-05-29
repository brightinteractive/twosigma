(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function($scope) {
        var form = this;
        this.data = {};

        $.ajax({
            url: '/api/getform',
            dataType: 'json',
            success: function(data) {
                form.elements = data.elements;

                // it would be better to construct a new set of objects instead of
                // augmenting the JSON like this - only doing it this way because
                // time is short!
                for (var i = 0; i < form.elements.length; i++) {
                    var elementRow = form.elements[i];
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
                                    }
                                };
                            }
                        }
                    }
                }

                $scope.$apply();
            }
        });
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
})();
