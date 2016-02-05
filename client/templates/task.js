Template.task.helpers({
  tasks: function() {
    return Tasks.find({}, {sort: {createdAt: -1}});
  }
});

Template.task.events({
  'click .toggle-checked': function() {
    Tasks.update(this._id, {
      $set: {checked: !this.checked}
    });
  },
  'click .delete': function() {
    Tasks.remove(this._id);
  }
});
