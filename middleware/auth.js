const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Méthode split pour enlever le mot bearer
    const decodedToken = jwt.verify.split(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    req.auth = {
      userId: userId,
    };
  } catch (error) {
    res.status(401).json({ error });
  }
};
