// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const users_list = [
  {
		name: 'Dude dude',
		email: 'dude@tf.com',
	},
	{
		name: 'john john',
		email: 'john@js.com',
	},
	{
		name: 'bil bill',
		email: 'bill@ws.com',
	},
];

// remove all records that match {} -- which means remove ALL records
db.Book.deleteMany({}, function(err, books){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    // create new records based on the array books_list
    db.Book.create(books_list, function(err, books){
      if (err) { return console.log('err', err); }
      console.log("created", books.length, "books");
      process.exit();
    });
  }