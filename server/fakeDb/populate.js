const mongoose = require("mongoose");
const config = require("../config/dev");
const fakeDB = require("./FakeDb");

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async () => {
    console.log('Starting populating db...');
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log('DB has been populated');
  }
);
