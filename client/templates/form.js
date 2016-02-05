Template.form.events({
  'submit .new-task': function(event) {
    event.preventDefault();
    console.log(event);

    var text = event.target.text.value;
    Tasks.insert({
      text: text,
      createdAt: new Date()
    });

    event.target.text.value = '';
  }
});
