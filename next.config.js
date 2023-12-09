module.exports = {
    async rewrites() {
      return [
        {
          source: '/dashboard/:path*',
          destination: '/dashboard',
        },
        {
          source: '/:path*',
          destination: '/',
        },
      ];
    },
  };