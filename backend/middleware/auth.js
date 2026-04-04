const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("AUTH HEADER:", authHeader); // 👈 ADD

  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  console.log("TOKEN RECEIVED:", token); // 👈 ADD

  try {
    const decoded = jwt.verify(token, "secret_key");

    console.log("DECODED:", decoded); // 👈 ADD

    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT ERROR:", err.message); // 👈 ADD
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;