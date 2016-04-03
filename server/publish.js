Meteor.publish('newcollections',function () {
  return NewCollections.find();
});
Meteor.publish('tovarName',function (id) {
  return NewCollections.find({_id: id});
});