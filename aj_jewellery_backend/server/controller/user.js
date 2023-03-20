const Admin = require("../models/admin");
const User = require("../models/user");
const Product = require("../models/product");
const Order = require("../models/order");
const { sha256 } = require("js-sha256");

require("../middleware/database");

exports.signUp = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userMobile } = req.body;
    const emailRegex = /@gmail.com/;

    if (!emailRegex.test(userEmail)) {
      throw "Please use the gmail account";
    }

    if (userPassword.length < 6)
      throw "Password must be atleast 6 characters long.";

    //check if user exists
    const userExists = await User.findOne({
      $or: [{ userName: userName }, { userEmail: userEmail }],
    });

  
    if (userExists) throw "User with same credentials exists.";

    const user = new User({
      userName,
      userEmail,
      userPassword: sha256(userPassword + process.env.SALT),
      userMobile,
    });

    await user.save();

    res.status(200).send({
      message: "User [" + userName + "] registered successfully",
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { userCredential, userPassword } = req.body;
    //userCredential can be username or useremail

  

    const user = await User.findOne({
      $or: [{ userName: userCredential }, { userEmail: userCredential }],
      userPassword: sha256(userPassword + process.env.SALT),
    });

    if (!user) throw "Credentials doesn't match";
    
    res.json({
      message: "User logged in successfully",
    });
  } catch (err) {
    res.status(400).send({ message: "Error occured " + err });
  }
};





