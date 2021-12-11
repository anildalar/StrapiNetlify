module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39c4d0551d6b803d89fb1e39a33e3c30'),
  },
});
