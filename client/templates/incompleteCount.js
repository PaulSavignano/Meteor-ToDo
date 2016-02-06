Template.incompleteCount.helpers({
  incompleteCount: function() {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});
