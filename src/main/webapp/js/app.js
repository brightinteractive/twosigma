(function() {
    var app = angular.module('formDemo', []);
    app.controller('FormController', function() {
        this.elements = elements;
    });

    // some hard-coded data in the format we expect it to be returned from the server
    var elements = [
        {
            "type": "Text",
            "label": "What is your name?",
        },
        {
            "type": "InputText",
            "name": "name",
        },
        {
            "type": "Button",
            "name": "pressMe",
            "label": "Press me!"
        }
    ];
})();
