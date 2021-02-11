const mongoose = require("mongoose");

const FIRST_ID = mongoose.Types.ObjectId();
const SECOND_ID = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: FIRST_ID,
      avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      email: "test@gmail.com",
      username: "Arthur Sereda",
      name: "arthurseredaa",
      description: "I am a React developer!",
      role: "admin",
      password: "123456"
    },
    {
      _id: SECOND_ID,
      avatar: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      email: "test1@gmail.com",
      username: "Крутий чувак",
      name: "krutiychuvak",
      description: "I am a cool dude",
      password: "123456"
    }
  ],
  portfolios: [
    {
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016',
      user: FIRST_ID
    },
    {
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Slovakia, Kosice',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013',
      user: FIRST_ID
    },
    {
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011',
      user: FIRST_ID
    }
  ]
}

module.exports = data;
