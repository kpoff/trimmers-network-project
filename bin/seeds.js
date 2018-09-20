const mongoose = require('mongoose');
const User = require('../models/User');

const dbName = 'trimmers_network';
mongoose.connect(`mongodb://localhost/${dbName}`);

const users = 
[{"username":"ymilburn0","password":"TIDznqQ","role":"Farmer","firstName":"Yard","lastName":"Milburn","email":"ymilburn0@google.es"}]

User.create(users, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${users.length} users`)
  mongoose.connection.close()
});


// const mongoose = require('mongoose');
// const Job = require('../models/Job');

// const dbName = 'trimmers_network';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const jobs = [{"jobTitle":"Holiday Work", "numberOfTrimmers": '5', "duration":"10 weeks",
// "location":"California", "payRate":"$50/lb", "accommodations":"tents", "travelInfo":"none provided", "notes":"heat and sleeping bags provided"}];


// Job.create(jobs, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${jobs.length} jobs`)
//   mongoose.connection.close()
// });

// const mongoose = require('mongoose');
// const Message = require('../models/Message');

// const dbName = 'trimmers_network';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const messages = 
// [{"message":"helloworld"}]

// Message.create(messages, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${messages.length} messages`)
//   mongoose.connection.close()
// });