Entries = new Meteor.Collection('entries');

Meteor.methods({
  addEntry: function(name, phoneNo, type) {
    Entries.insert({name: name, phoneNo: phoneNo, category: type});
  }
});

Meteor.methods({
  getEntries: function(searchText) {
    var regExp = new RegExp(searchText, 'i');
    return Entries.find({
      name: regExp
    }, {sort: {name: 1}, limit:20}).fetch();
  }
});
