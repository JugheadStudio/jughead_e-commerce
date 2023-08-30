const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	surname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isAdmin: { type: String, required: true }
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", UserSchema);

const validate = (data) => {
  const schema = Joi.object({
      name: Joi.string().required().label("First Name"),
      surname: Joi.string().required().label("Last Name"),
      email: Joi.string().email().required().label("Email"),
      password: passwordComplexity().required().label("Password"),
      isAdmin: Joi.boolean().required().label("Is Admin"),
  });
  return schema.validate(data);
};

// new export
module.exports = { User, validate };