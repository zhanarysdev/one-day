import { Mongo } from "meteor/mongo";

export const UsersCollection = new Mongo.Collection("UsersCollection");
if (Meteor.isServer) {
  // ArtCollection.allow({
  //   'insert': function (userId,doc) {
  //     /* user and doc checks ,
  //     return true to allow insert */
  //     return !! userId;
  //   }
  // });

  Meteor.publish("UsersCollection", () => {
    return UsersCollection.find({});
  });
}

Meteor.methods({
  "UsersCollection.insert"(data) {
    UsersCollection.insert(data);
  },
  "UsersCollection.delete"(data) {
    UsersCollection.remove({ _id: data });
  },
  "UsersCollection.update"(data) {
    Meteor.users.update(data.userId, {
      $push: {
        "profile.follows": data.follow
      }
    });
  }
});
