const nextTranslate = require('next-translate-plugin');

/* eslint-disable prefer-arrow/prefer-arrow-functions */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/sa71woberbfe/**',
      },
    ],
  },
  poweredByHeader: false,
  i18n: {
    locales: ['en-US', 'es', 'zh'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/eligibility',
        destination: 'https://curative.com/eligibility',
      },
      {
        source: '/priorauth',
        destination: 'https://curative.com/priorauth',
      },
      {
        source: '/drugs',
        destination: 'https://curative.com/drugs',
      },
      {
        source: '/providers',
        destination: 'https://curative.com/providers',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/find-a-med',
        destination: '/pharmacy',
        permanent: true,
      },
      {
        source: '/for-members/baseline',
        destination: '/baseline',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/california-covid-testing',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/platforms',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-testing',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-19-test-offerings',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/business',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-test/florida',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-test/texas',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-test/california',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/covid-test/delaware',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/healthplan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search/:path*',
        destination: '/transition-to-health-plan',
        permanent: true,
      },
      {
        source: '/manage/:path*',
        destination: 'https://book.curative.com/manage/:path*',
        permanent: true,
      },
      {
        source: '/go/:path*',
        destination: 'https://book.curative.com/go/:path*',
        permanent: true,
      },
      {
        source: '/sites/:path*',
        destination: 'https://book.curative.com/sites/:path*',
        permanent: true,
      },
      {
        source: '/verify/:path*',
        destination: 'https://book.curative.com/verify/:path*',
        permanent: true,
      },
      {
        source: '/book/:path*',
        destination: 'https://book.curative.com/book/:path*',
        permanent: true,
      },
      {
        source: '/feedback/:path*',
        destination: 'https://book.curative.com/feedback/:path*',
        permanent: true,
      },
      {
        source: '/pay/:path*',
        destination: 'https://book.curative.com/pay/:path*',
        permanent: true,
      },
      {
        source: '/blog/how-does-health-insurance-work',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/when-is-open-enrollment-for-health-insurance-2022',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/does-insurance-cover-therapy',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/does-insurance-cover-teeth-whitening',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/10-key-things-when-choosing-health-insurance-coverage',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/comparing-5-types-of-health-insurance-plans',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/how-can-i-get-health-insurance',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/how-does-health-insurance-work-for-small-businesses',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/what-is-group-health-insurance-and-how-does-it-work',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/cost-of-small-business-health-insurance',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/key-things-to-know-about-employer-sponsored-health-insurance',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/how-long-can-you-stay-on-a-parents-health-insurance-plan',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/when-does-health-insurance-start-at-a-new-job',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextTranslate(nextConfig);
