import type { RouteLocationNormalizedLoaded } from 'vue-router';

interface PageSeo {
  title: string;
  description: string;
}

const siteName = 'Deagensie';

const staticPageSeo: Record<string, PageSeo> = {
  '/': {
    title: "Deagensie | Venture's Growth Lab & Talent-as-a-Service (TaaS)",
    description:
      'Deagensie helps ventures build strategy, branding, marketing & digital platforms, and connects global creative talent through predictive AI matching.',
  },
  '/about': {
    title: 'About Deagensie | Strategy, Talent & Ecosystem Innovation',
    description:
      "Learn about Deagensie's mission to build scalable venture systems and unlock global creative talent through intelligence and execution.",
  },
  '/why': {
    title: 'Why Deagensie | Two Engines. One Ecosystem.',
    description:
      "Discover why Deagensie's dual engines (Venture's Growth Lab & Talent-as-a-Service) power scalable business success and borderless talent growth.",
  },
  '/business': {
    title: "Venture's Growth Lab | Deagensie",
    description:
      'Where ventures become growth-ready. A structured growth engine across Strategy, Branding, Marketing, and Digital Platforms.',
  },
  '/business/solutions': {
    title: 'Growth Solutions | Venture Growth Lab',
    description:
      'Explore Deagensie Growth Lab solutions across 01 Strategy, 02 Branding, 03 Marketing, and 04 Digital Platforms.',
  },
  '/creatives': {
    title: 'Talent-as-a-Service (TaaS) | Deagensie',
    description:
      'Predictive AI talent matching engine connecting top-tier global creative professionals with high-impact venture opportunities.',
  },
  '/blog': {
    title: 'Growth & Talent Insights | Deagensie',
    description:
      'Read Deagensie insights on business growth, branding, digital platforms, AI matching, and the creative talent economy.',
  },
  '/resource': {
    title: 'Resource Hub | Growth & Talent Intelligence',
    description:
      'Explore Deagensie resources, playbooks, and frameworks for creative professionals, founders, and scaling teams.',
  },
  '/contact': {
    title: 'Contact Deagensie | Start a Project or Join TaaS',
    description:
      'Get in touch with Deagensie to launch a Venture Project or join our global Talent-as-a-Service ecosystem.',
  },
  '/register': {
    title: 'Get Started | Deagensie Ecosystem',
    description:
      'Register your venture for Growth Lab solutions or create your profile as a creative in our TaaS network.',
  },
  '/waitlist': {
    title: 'Join the Waitlist | Deagensie Early Access',
    description:
      'Join the Deagensie waitlist for early access to our Growth Lab, Talent-as-a-Service network, and AI-powered matching engine. Be first inside.',
  },
  '/subscription': {
    title: 'Growth Subscriptions | Deagensie',
    description:
      'Browse Deagensie subscription plans for flexible venture growth support and embedded creative talent.',
  },
};

function titleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function paramLabel(param: RouteLocationNormalizedLoaded['params'][string] | undefined) {
  return titleCase(String(Array.isArray(param) ? param[0] || '' : param || ''));
}

export function getPageSeo(route: RouteLocationNormalizedLoaded): PageSeo {
  const path = route.path.replace(/\/$/, '') || '/';
  const staticSeo = staticPageSeo[path];

  if (staticSeo) return staticSeo;

  if (path.startsWith('/register/')) {
    const type = paramLabel(route.params.type);
    const step = paramLabel(route.params.step);

    if (path.endsWith('/success')) {
      return {
        title: `${type} Registration Received | ${siteName}`,
        description:
          'Your Deagensie registration has been received. Our team will review your details and follow up with next steps.',
      };
    }

    return {
      title: step
        ? `${type} Registration: ${step} | ${siteName}`
        : `${type} Registration | ${siteName}`,
      description:
        'Complete your Deagensie registration so our team can understand your goals and guide the next step.',
    };
  }

  if (path.startsWith('/subscription/')) {
    const plan = paramLabel(route.params.plan);
    const code = paramLabel(route.params.code);

    if (path.includes('/checkout')) {
      return {
        title: `${plan || code} Checkout | ${siteName}`,
        description:
          'Complete your Deagensie subscription checkout and confirm your selected growth support plan.',
      };
    }

    if (path.includes('/request/received')) {
      return {
        title: 'Request Received | Deagensie',
        description:
          'Your tailored solution request has been received. Deagensie will review it and follow up with a proposal.',
      };
    }

    if (path.includes('/request')) {
      return {
        title: `${plan || code} Request | ${siteName}`,
        description:
          'Share your business needs with Deagensie so we can prepare a tailored solution for your team.',
      };
    }

    return {
      title: plan ? `${plan} | ${siteName}` : `${code || 'Subscription'} | ${siteName}`,
      description:
        'Review Deagensie subscription details, benefits, and plan options for your business needs.',
    };
  }

  return {
    title: siteName,
    description:
      'Deagensie empowers businesses and creatives with strategic growth, technology, and talent solutions.',
  };
}
