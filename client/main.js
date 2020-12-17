import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { _ } from 'meteor/underscore'; //for _.extend
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

import './main.html';
import '../lib/router.js';

// default-----------------------------------------------------------------------------------------------------------------

// Template.hello.onCreated(function helloOnCreated() {
//     // counter starts at 0
//     this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//     counter() {
//         return Template.instance().counter.get();
//     },
// });

// Template.hello.events({
//     'click button' (event, instance) {
//         // increment the counter when button is clicked
//         instance.counter.set(instance.counter.get() + 1);
//     },
// });

// iterating an object------------------------------------------------------------------------------------------------------

// Template.body.helpers({
//     items: [
//         { item_name: "portrait_1" },
//         { item_name: "portrait_2" },
//         { item_name: "portrait_3" }
//     ]
// });

// collections basics--------------------------------------------------------------------------------------------------------------

// const Items = new Mongo.Collection;
// Template.body.helpers({
//     items: function() {
//         //insert
//         Items.insert({ item_name: "a" }, (a, b) => { console.log(a + ' ' + b) }); //callback is optional
//         Items.insert({ item_name: "b" }, (a, b) => { console.log(a + ' ' + b) });
//         Items.insert({ item_name: "c" }, (a, b) => { console.log(a + ' ' + b) });
//         Items.insert({ item_name: "d" }, (a, b) => { console.log(a + ' ' + b) });
//         Items.insert({ item_name: "e" }, (a, b) => { console.log(a + ' ' + b) });
//         Items.insert({ item_name: "f" }, (a, b) => { console.log(a + ' ' + b) });

//         //update
//         // Items.update({ item_name: "f" }, { item_name: "g" });

//         //remove
//         Items.remove({ item_name: "f" });

//         //read
//         return Items.find(); //all item names. Find the documents in a collection that match the selector.
//         // return Items.find({ item_name: "a" }); //only 'a'
//     }
// });

// collections-class--------------------------------------------------------------------------------------------------------------

// class Display {
//     constructor(doc) {
//         _.extend(this, doc); //copying doc to 'this'
//     }

//     display() {
//         console.log(this.myName);
//     }
// }

// const Display_Name = new Mongo.Collection(null, { transform: (doc) => new Display(doc) });

// Display_Name.insert({ age: 25, myName: "a" }); //multiple insertion is not possible
// Display_Name.insert({ age: 30, myName: "b" });
// Display_Name.insert({ age: 35, myName: "c" });
// Display_Name.findOne({ age: 30 }).display(); //b. Finds the first document that matches the selector
// Display_Name.upsert({ age: 25 }, { age: 25, myName: "aa" }); //update
// Display_Name.findOne({ age: 25 }).display(); //don't use find
// Display_Name.upsert({ age: 40 }, { age: 40, myName: "d" }); //insert
// Display_Name.findOne({ age: 40 }).display(); //d
// Display_Name.remove({}); //removes all docs

// forms and subscribe------------------------------------------------------------------------------------------------------------------------------------

// const Usernames = new Mongo.Collection('usernames');

// Template.username.events({
//     'submit .username' (event) {
//         event.preventDefault(); //to avoid refresh
//         const target = event.target;
//         const data = target.user_name.value;
//         Usernames.insert({ name: data });
//         target.user_name.value = ""; //clear
//     }
// })

// Meteor.subscribe('userdata');

// Template.body.helpers({
//     usernames: function() {
//         return Usernames.find().fetch(); //subscribed data can be fetched
//     }
// })

// const Names = new Mongo.Collection('names');

// Meteor.subscribe('namelist');

// Meteor.setTimeout(function() {
//     result = Names.find().fetch(); //subscribed data can be fetched. only filtered data
//     console.log(result);
// }, 1000);

// result = Names.find().fetch(); //subscribed data can't be fetched
// console.log(result);

// methods--------------------------------------------------------------------------------------------------------------------------

// asynchronous call
// Meteor.call('userdata', { data: "glider" }, (error, result) => {
//     console.log(result);
// });

// synchronous call
// let result = Meteor.call('add', { a: 1, b: 2 });
// console.log(result); //undefined

// session-----------------------------------------------------------------------------------------------------------------------------
// only for client side

// const RoomsData = new Mongo.Collection('roomsdata');

// // Session.set({ roomName: 'hall', roomNumber: 1 });
// Session.set({ roomName: 'kitchen', roomNumber: 2 }); //set is before get
// Meteor.subscribe('rooms', { name: Session.get('roomName'), number: Session.get('roomNumber') });

// // Session.set({ roomName: 'kitchen', roomNumber: 2 }); //only id will be stored in collection. not data

// setTimeout(() => {
//     console.log(RoomsData.find().fetch());
// }, 1000);

// http--------------------------------------------------------------------------------------------------------------------------------

// read
// HTTP.call('GET', 'http://jsonplaceholder.typicode.com/posts/1', {}, function(error, response) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// update
// HTTP.call('PUT', 'http://jsonplaceholder.typicode.com/posts/1', { data: { age: 100 } }, function(error, response) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// insert
// HTTP.call('POST', 'http://jsonplaceholder.typicode.com/posts', { data: { artist: "ramya" } }, function(error, response) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// remove
// HTTP.del(url.....);
// HTTP.call('DELETE', 'http://jsonplaceholder.typicode.com/posts/1', { data: {} }, function(error, response) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });

//-----------