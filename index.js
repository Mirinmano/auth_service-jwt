const jwt = require("jsonwebtoken");

class JWTAuthService {
  constructor(secret, options = {}) {
    if (!secret) {
      throw new Error("JWT secret is required.");
    }
    this.secret = secret;
    this.options = options;
  }

  generateToken(payload, expiresIn = "1h") {
    return jwt.sign(payload, this.secret, { ...this.options, expiresIn });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, this.secret, this.options);
    } catch (err) {
      return null;
    }
  }

  decodeToken(token) {
    return jwt.decode(token, { complete: true });
  }
}

module.exports = JWTAuthService;
