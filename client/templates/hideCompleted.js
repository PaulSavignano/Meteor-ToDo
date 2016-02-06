Template.hideCompleted.events({
  'change .hide-completed': function(event) {
    Session.set("hideCompleted", event.target.checked);
  }
})
