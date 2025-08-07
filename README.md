# auth_service-jwt

A lightweight JWT authentication and token generation service.

## Installation

```bash
npm install auth_service-jwt
```

## Usage

```js
const JWTAuthService = require("jwt-auth-service");

const jwtService = new JWTAuthService("your-secret-key");

// Generate token
const token = jwtService.generateToken({ userId: 123 });

// Verify token
const data = jwtService.verifyToken(token);

// Decode token (without verifying)
const decoded = jwtService.decodeToken(token);
```

## License

MIT
