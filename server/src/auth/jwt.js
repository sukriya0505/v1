import jwt from "jsonwebtoken";

const jwtAuth = async (req, res, next) => {
  //extract the headers from the req headers

  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ error: "Token not found" });
  }
  const token = req.headers.authorization.split(" ")[1]; // it will store Bearer to [0] & token to [1]

  if (!token) {
    return res.status(401).json({ error: "Unauthorize" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // attach user info to the req objects
    req.user = decode;
    next();
  } catch (error) {
    res.status(500).json({ error: "Invalid Token" });
  }
};

// fuction to genrate jwt token

const generateToken = (userData) => {
  return jwt.sign({ userData }, process.env.JWT_SECRET);
};

export { jwtAuth, generateToken };
