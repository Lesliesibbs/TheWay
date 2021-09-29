module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '29c6d6cfb4e760089d2bc48105e04551'),
    },
    cors: {
      "enabled": true,
      "headers": "*"
    },
  },
});
