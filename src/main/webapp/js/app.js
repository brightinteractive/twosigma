(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function() {
        this.elements = elements;
    });

    var elements = [
        {
            "name": "First"
        },
        {
            "name": "Second"
        }
    ];
})();
