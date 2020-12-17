import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { _ } from 'meteor/underscore'; //for _.extend
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
    // code to run on server at startup
});

// mongo-server side

// basics----------------------------------------------------------------------------------------------------------------------------------

// const Names = new Mongo.Collection('names'); //minimongo instance 'names'. collection/db name is names. Names is to use that db here
// Names.insert({ name: "a", age: 1 });
// Names.insert({ name: "b", age: 2 });
// console.log(Names.findOne({ age: 1 })); //single object
// console.log(Names.find().fetch()); //array of objects. in terminal

// forms and publish----------------------------------------------------------------------------------------------------------------------------------

// const Usernames = new Mongo.Collection('usernames'); //collection name in server is 'usernames'

// Meteor.publish('userdata', function() {
//     console.log(Usernames.find().fetch());
//     return Usernames.find();
// })

// const Names = new Mongo.Collection('names');

// Meteor.publish('namelist', function() {
//     return Names.find({ name: "a" });
// })

// methods-------------------------------------------------------------------------------------------------------------------------------------------

// we can use multiple Meteor.methods
// Meteor.methods are used only in server
// Meteor.call can be used in both client and server

// Meteor.methods({
//     //destructured parameters
//     'userdata' ({ data }) {
//         return data;
//     },

//     'add' ({ a, b }) {
//         // console.log(a + b);
//         return a + b;
//     }
// })

// session----------------------------------------------------------------------------------------------------------------------------

// const RoomsData = new Mongo.Collection('roomsdata');

// Meteor.publish('rooms', ({ name, number }) => {
//     RoomsData.insert({ roomName: name, roomNo: number });
//     return RoomsData.find();
// })

// http-------------------------------------------------------------------------------------------------------------------------------
// Listen to incoming HTTP requests (can only be used on the server)
// WebApp.connectHandlers.use('/', (req, res, next) => {
//     res.writeHead(200);
//     res.end();
// });

//-----