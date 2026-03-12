/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/patients", destination: "/", permanent: true },
      { source: "/contact-us-new", destination: "/contact-us", permanent: true },
      { source: "/contact-us-2", destination: "/contact-us", permanent: true },
      { source: "/request-more-info-2", destination: "/request-more-info", permanent: true },
      { source: "/request-more-info-2-v2", destination: "/request-more-info", permanent: true },
      { source: "/free-consultation-b", destination: "/schedule-virtual-consultation", permanent: true },
      { source: "/thank-you-2", destination: "/thank-you", permanent: true },
      { source: "/thank-you-page-self-scheduler", destination: "/thank-you", permanent: true },
      { source: "/purchase-order-terms", destination: "/purchaseorderterms", permanent: true },
    ];
  },
};

module.exports = nextConfig;
