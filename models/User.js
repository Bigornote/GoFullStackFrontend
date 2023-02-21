const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Mongoose unique validator, permet de vérifier et être sûr qu'une seule adresse email a été créé avec Mongo
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
