import { FilesCollection } from 'meteor/ostrio:files';
export var UserFiles = new FilesCollection({
  
    storagePath: '/docs',
    downloadRoute: '/docs',
    permissions: 0774,
      parentDirPermissions: 0774,
    collectionName: 'UserFiles'});
  
  if (Meteor.isServer) {
    /* Set deny/allow rules:
     * Deny all
     * @see http://docs.meteor.com/#/full/deny
     */
    UserFiles.denyClient();
  
    /* Allow all
     * @see http://docs.meteor.com/#/full/allow
     */
    UserFiles.allowClient();
  
    /* Deny per action
     * @see http://docs.meteor.com/#/full/deny
     */
    UserFiles.deny({
      insert: function() {
        return false;
      },
      update: function() {
        return true;
      },
      remove: function() {
        return false;
      }
    });
  
    /* Allow per action
     * @see http://docs.meteor.com/#/full/allow
     */
    UserFiles.allow({
      insert: function() {
        return true;
      },
      update: function() {
        return false;
      },
      remove: function() {
        return true;
      }
    });
  }
  
  
  UserFiles.collection.find({}).forEach( (fileRef) => {
    UserFiles.link(fileRef);
  });
  
  
  // Example: Publish:
  if (Meteor.isServer) {
    Meteor.publish('files.all', function () {
      return UserFiles.collection.find({});
    });
  }
  
  
  Meteor.methods({
    'get.link'(file) {
      return UserFiles.findOne(file._id).link()
    },
    'insert'(file){
      UserFiles.insert(file)
    },
    'get.link.id'(id) {
      return UserFiles.findOne().link()
    }
  })
  
  
  
  
  
  
  