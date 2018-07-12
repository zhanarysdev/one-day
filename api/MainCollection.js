

import { Mongo } from 'meteor/mongo';

 

export const MainCollection = new Mongo.Collection('MainCollection');

if(Meteor.isServer) {

    // ArtCollection.allow({
    //   'insert': function (userId,doc) {
    //     /* user and doc checks ,
    //     return true to allow insert */
    //     return !! userId; 
    //   }
    // });

    Meteor.publish('MainCollection', () => {

      return MainCollection.find();
  
    });
  
  }
  

  Meteor.methods({
    'MainCollection.insert'(data) {
      MainCollection.insert(data)
    },
    'MainCollection.delete'(data) {
      MainCollection.remove({_id: data})
    }
  })
  

