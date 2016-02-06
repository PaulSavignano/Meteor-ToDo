Template.form.events({
  'submit .new-task': function(event) {
    event.preventDefault();
    console.log(event);
    // Insert a task
    var text = event.target.text.value;
    Meteor.call('addTask', text);
    // clear the form
    event.target.text.value = '';
  }
});
