import { NextConfig } from "next";
const cspHeader = `
  default-src 'self' blob: data: https://js.stripe.com https://res.cloudinary.com storage.googleapis.com authjs.dev ${process.env.NEXT_PUBLIC_URL} www.google.com www.gstatic.com https://upload-widget.cloudinary.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: data: https://js.stripe.com www.google.com www.gstatic.com https://upload-widget.cloudinary.com https://*.clerk.accounts.dev;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: ${process.env.NEXT_PUBLIC_URL} https://res.cloudinary.com storage.googleapis.com authjs.dev www.google.com www.gstatic.com https://media.licdn.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://accounts.google.com https://authjs.dev;
  frame-ancestors 'none';
  connect-src 'self' https://*.clerk.accounts.dev https://media.licdn.com https://res.cloudinary.com;
  block-all-mixed-content;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();


const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dmgswrlcd/image/upload/**", // Updated to include /upload/
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // Cache images for 7 days
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
