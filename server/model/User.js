// // const mongoose = require("mongoose");

// // const UserSchema = new mongoose.Schema({
// //     name:String,
// //     email:String,
// //     password:String
// // })

// // const UserModel = mongoose.model("users", UserSchema);

// // module.exports = UserModel;

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     profileImage: { type: String }, // Store the URL of the profile image
//     phoneNumber: { type: String },  // Store the phone number
//     // Add more fields as needed
// });

// const UserModel = mongoose.model("users", UserSchema);

// module.exports = UserModel;


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    profileImage: { type: String, default: "" }
});

module.exports = mongoose.model("User", UserSchema);
