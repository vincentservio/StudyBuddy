# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.create(word:"Arrow Function", define:"An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.", gotit: false, deck_id:3  )
Card.create(word:"ES6 syntax", define:"ECMAScript 6 is also known as ES6 and ECMAScript 2015.

Some people call it JavaScript 6.

This chapter will introduce some of the new features in ES6.

JavaScript let
JavaScript const
JavaScript Arrow Functions
JavaScript Classes
Default parameter values
Array.find()
Array.findIndex()
Exponentiation (**) (EcmaScript 2016)", gotit: false, deck_id:3  )
Card.create(word:"Const", define:"Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.", gotit: false, deck_id:3  )
Card.create(word:"Let", define:"The let statement declares a block-scoped local variable, optionally initializing it to a value.

", gotit: false, deck_id:3  )
Card.create(word:"Closures", define:"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.", gotit: false, deck_id:3  )
Card.create(word:"This", define:"A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).", gotit: false, deck_id:3  )
Card.create(word:"Context", define:"Context in JavaScript is related to objects. It refers to the object within the function being executed. this refers to the object that the function is executing in", gotit: false, deck_id:3  )
Card.create(word:"Scope", define:"The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.", gotit: false, deck_id:3 )
Card.create(word:"Hoisting", define:"Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables.. are declared, they are moved to the top of their scope regardless of whether their scope is global or local", gotit: false, deck_id:3  )
Card.create(word:"Functions", define:"
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).", gotit: false, deck_id:3  )
Card.create(word:"Data Structures", define:"Data structure is a particular way of organizing data so that it can be used efficiently", gotit: false, deck_id:3  )
Card.create(word:"Variables", define:"JavaScript variables are containers for storing data values.", gotit: false, deck_id:3  )
Card.create(word:"Ajax", define:"which initially stood for Asynchronous JavaScript And XML, is a programming practice of building complex, dynamic webpages using a technology known as XMLHttpRequest.

Ajax allows you to update parts of the DOM of an HTML page instead without the need for a full page refresh. Ajax also lets you work asynchronously, meaning your code continues to run while the targeted part of your web page is trying to reload (compared to synchronously, which blocks your code from running until that part of your page is done reloading).

With interactive websites and modern web standards, Ajax is gradually being replaced by functions within JavaScript frameworks and the official Fetch API Standard.", gotit: false, deck_id:2  )
Card.create(word:"API", define:"An API (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third party software or hardware.

In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, or other software/hardware on the user's computer, or third party websites and services.", gotit: false, deck_id:2  )
Card.create(word:"REST", define:"Representational State Transfer (REST) refers to a group of software architecture design constraints that bring about efficient, reliable, and scalable distributed systems. A system is called RESTful when it adheres to those constraints.

The basic idea of REST is that a resource, e.g. a document, is transferred with its state and relationships (hypertext) via well-defined, standardized operations and formats. Often APIs or services call themselves RESTful when they directly modify  a type of document as opposed to triggering actions elsewhere.

Because HTTP, the standard protocol behind the Web, also transfers documents and hypertext links, simple HTTP APIs are sometimes colloquially referred to as RESTful APIs, RESTful services, or simply REST services, although they don't necessarily adhere to all REST constraints. Beginners can assume a REST API means an HTTP service that can be called using standard web libraries and tools.", gotit: false, deck_id:2 )
Card.create(word:"Oject", define:"Object refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.", gotit: false, deck_id:2  )