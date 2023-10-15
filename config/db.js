// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, { 
//       useNewUrlParser: true,
//       useUnifiedTopology: true

//     });
//     console.log("Mongo database is connected!!");
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/blood_bank');
  console.log('mongodb connected')
}

module.exports = connectDB;