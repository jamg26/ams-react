const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect(
    'mongodb+srv://admin:admin@cluster0-kgze8.mongodb.net/ams_test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', error => {
      console.warn('Warning', error);
    });
});

beforeEach(async () => {
  // dropping collection beforeEach
  try {
    for (i in mongoose.connection.collections) {
      await mongoose.connection.collections[i].drop();
    }
  } catch (error) {}
});
