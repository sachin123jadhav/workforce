// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   //output: "standalone",
// };

// module.exports = nextConfig;



module.exports = {
  // Other configurations...
  // Add the following lines to enable ESM support
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
  // experimental: {
  //   esmExternals: true,
  // },
};
