const joi = require("joi");
const User = require("../model/User-Model");

const UserNameValidation = (UserName) => {
  let username = joi.object({
    UserName: joi.string().min(3).max(20).required().label("UserName"),
  });
  return username.validate(UserName);
};



const EmailValidation = (Email) => {
  let email = joi.object({
    Email: joi.string().min(3).max(20).required().email(),
  });
  return email.validate(Email);
};

const PasswordValidation = (Password) => {
  let password = joi.object({
    Password: joi.string().min(3).max(200).required(),
  });
  return password.validate(Password);
};

const GenderValidation = (Gender) => {
  let gender = joi.object({
    Gender: joi.string().min(4).max(20).required(),
  });
  return gender.validate(Gender);
};

const UserExistValidation = (UV) => {
  let userExistValidation = joi.object({
    UserName: joi.string().min(3).max(20).required(),
    Email: joi.string().min(3).max(20).required(),
  });
  return userExistValidation.validate(UV);
};

const NewPassword = (NewPassword) => {
    let newPassword = joi.object({
        NewPassword: joi.string().min(3).max(20).required(),
    });
    return newPassword.validate(NewPassword);
  };

module.exports = {
  UserNameValidation,
  EmailValidation,
  PasswordValidation,
  GenderValidation,
  UserExistValidation,
  NewPassword,
};
