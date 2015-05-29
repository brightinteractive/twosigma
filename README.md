Form Demo
=========

Copyright Bright Interactive 2015.

Built for Two Sigma.

Prerequisites
-------------

* Maven 3
* Java 1.8
* NodeJS 0.10.x
* POSIX-like OS (developed on Linux and Mac OS X).

Building and running
--------------------

Execute the following commands to build and run the application:

    npm install
    mvn clean package
    java -jar target/formdemo-0.0.1-SNAPSHOT.jar server form-demo.yml

The above will launch a web server listening on port 8080, you can then open http://localhost:8080/ in a browser.

Spec
----

A very small client (web) and server (java) app.
 
Some Java classes:
* FormElement - interface
* Form – container  FormElement – with some way to arrange FormElement on a grid layout.
* InputText implements FormElement – represents an input text
* Button implements FormElement – represents a button, should provide a way to attach a behavior to be executed when ‘pressed’
* Text implements FormElement – represents a text label (no input)

Server side:
* Main – create an instance of Form containing at least two text labels, two input elements and a button. The behavior should print on stdout the values set by the user in the input text elements.
* REST api/getform -> returns a JSON representation of the instance of Form and its content
* REST api/submitform -> receives the form element values and which button was pressed (in JSON)


Client side:
* A single web page that calls api/getform, renders the form (using any framework you want) and when the user presses th

Assumptions
----------- 

* The behaviour attached to the button should be executed server side (not client side). 
