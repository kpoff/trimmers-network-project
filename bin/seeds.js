// const mongoose = require('mongoose');
// const User = require('../models/User');

// const dbName = 'trimmers_network';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const users = 
// [{"username":"ymilburn0","password":"TIDznqQ","role":"farmer","firstName":"Yard","lastName":"Milburn","email":"ymilburn0@google.es"},
// {"username":"mlesieur1","password":"Zc19N7kIeaN","role":"farmer","firstName":"Matthaeus","lastName":"Le Sieur","email":"mlesieur1@mac.com"},
// {"username":"scroysdale2","password":"512zZeyUhjyh","role":"farmer","firstName":"Syd","lastName":"Croysdale","email":"scroysdale2@amazon.co.uk"},
// {"username":"rkieff3","password":"oJzXwfaX8","role":"trimmer","firstName":"Roberta","lastName":"Kieff","email":"rkieff3@goodreads.com"},
// {"username":"szarfai4","password":"mT5TAr43RG","role":"farmer","firstName":"Sollie","lastName":"Zarfai","email":"szarfai4@latimes.com"},
// {"username":"egrishaev5","password":"tLHqzEgcjgv","role":"trimmer","firstName":"Edsel","lastName":"Grishaev","email":"egrishaev5@loc.gov"},
// {"username":"bdoble6","password":"YUft4JN","role":"trimmer","firstName":"Brocky","lastName":"Doble","email":"bdoble6@seattletimes.com"},
// {"username":"cgainforth7","password":"JVEZQkvIaz","role":"farmer","firstName":"Coral","lastName":"Gainforth","email":"cgainforth7@census.gov"},
// {"username":"hhartman8","password":"5jkpUJIz","role":"farmer","firstName":"Hubie","lastName":"Hartman","email":"hhartman8@google.com.hk"},
// {"username":"eethridge9","password":"Q0Bqv7OT","role":"trimmer","firstName":"Esta","lastName":"Ethridge","email":"eethridge9@whitehouse.gov"},
// {"username":"mdeddena","password":"a9CWgLwbtSJ","role":"farmer","firstName":"Michelina","lastName":"Dedden","email":"mdeddena@newsvine.com"},
// {"username":"elaydelb","password":"9qvx4iErRDo","role":"farmer","firstName":"Eldredge","lastName":"Laydel","email":"elaydelb@skype.com"},
// {"username":"hsheerc","password":"vHvx190sn","role":"farmer","firstName":"Hector","lastName":"Sheer","email":"hsheerc@newsvine.com"},
// {"username":"tnichold","password":"JU0nEqxGNL","role":"trimmer","firstName":"Thelma","lastName":"Nichol","email":"tnichold@about.com"},
// {"username":"jmorpheye","password":"DkgkUu","role":"trimmer","firstName":"Jamey","lastName":"Morphey","email":"jmorpheye@eepurl.com"},
// {"username":"cdodmanf","password":"m9AxZKS2cB","role":"trimmer","firstName":"Cleveland","lastName":"Dodman","email":"cdodmanf@ow.ly"},
// {"username":"jdovydenasg","password":"0rLxvS5AQKCd","role":"farmer","firstName":"Jesse","lastName":"Dovydenas","email":"jdovydenasg@t-online.de"},
// {"username":"pgirardeauh","password":"1Ju6yt6Q","role":"farmer","firstName":"Porty","lastName":"Girardeau","email":"pgirardeauh@youtu.be"},
// {"username":"pbarkei","password":"wKGxsaKnKy","role":"farmer","firstName":"Pearce","lastName":"Barke","email":"pbarkei@sbwire.com"},
// {"username":"lmichelij","password":"fSmwL2Bcv5f","role":"farmer","firstName":"Laurene","lastName":"Micheli","email":"lmichelij@qq.com"}]

// User.create(users, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${users.length} users`)
//   mongoose.connection.close()
// });


const mongoose = require('mongoose');
const Job = require('../models/Job');

const dbName = 'trimmers_network';
mongoose.connect(`mongodb://localhost/${dbName}`);

const jobs = [{"jobTitle":"Holiday Work", "numberOfTrimmers": '5', "duration":"10 weeks",
"location":"California", "payRate":"$50/lb", "accommodations":"tents", "travelInfo":"none provided", "notes":"heat and sleeping bags provided"}];


Job.create(jobs, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${jobs.length} jobs`)
  mongoose.connection.close()
});