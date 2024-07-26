/**  @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV = "production");
const nextConfig = {
  output: "export",
  basePath: isProd ? "/static_deploy" : "",
  distDir: "out",
  images: {
    domains: ["flagcdn.com"],
    unoptimized: true,
  },
};

export default nextConfig;
