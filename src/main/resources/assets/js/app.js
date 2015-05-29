(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function($scope) {
        var form = this;
        this.data = {};
        this.submitMessage = '';

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
                                        form.submit(this.name);
                                    }
                                };
                            }
                        }
                    }
                }

                $scope.$apply();
            }
        });

        this.submit = function(buttonName) {
            var fields = [];
            for (var name in this.data) {
                if (this.data.hasOwnProperty(name)) {
                    var value = this.data[name];
                    field = {
                        name: name,
                        value: value
                    };
                    fields.push(field);
                }
            }

            var formSubmission = {
                buttonPressed: buttonName,
                fields: fields
            }

            console.log('About to post ' + formSubmission);
            $.ajax({
                url: '/api/submitform',
                method: 'POST',
                data: JSON.stringify(formSubmission),
                contentType: 'application/json',
                success: function() {
                    form.submitMessage = 'Submitted successfully to server';
                    $scope.$apply();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    form.submitMessage = 'Error submitting to server: ' + textStatus + ': ' + errorThrown;
                    $scope.$apply();
                }
            });
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
})();
