var noOfDocs = 10000;

if(!Entries.findOne()) {
  console.log("Inserting %d dummy phone book entries. Please wait....", noOfDocs);
  var categories = ["family", "co-worker", "tinder", "friends"]

  for(var lc=0; lc<noOfDocs; lc++) {
    if(lc > 0 && lc % 1000 == 0) {
      console.log("  added %d entries.", lc);
    }

    var category = categories[Math.floor(Math.random() * categories.length)];

    Meteor.call('addEntry', faker.name.findName(), faker.phone.phoneNumber(), category);
  }
  console.log("Completed!");
}
