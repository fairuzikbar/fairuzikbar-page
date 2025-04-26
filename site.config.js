const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Fairuz Ikbar",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "QA Automation Engineer",
    bio: "Di dunia yang terus berubah, aku mencatat pengalaman, ide, dan perjalanan. Ini adalah ruangku untuk berbagi, berkembang, dan berpetualang.",
    email: "fairuz.ikbar.w@gmail.com",
    linkedin: "fairuzikbar",
    github: "fairuzikbar",
    instagram: "fairuzikbar",
  },
  projects: [
    {
      name: `portfolio`,
      href: "https://fairuzikbar.vercel.app",
    },
  ],
  // blog setting (required)
  blog: {
    title: "typedbyikbar",
    description: "Journey through Code and Beyond",
    theme: "dark", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://typedbyikbar.vercel.app/",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Blog Coding",
      "Coding Journey",
      "Belajar Coding",
      "Big Data",
      "Frontend Development",
      "Backend Development",
      "QA Automation",
      "Testing Playwright",
      "NodeJS",
      "ExpressJS",
      "ViteJS",
      "JavaScript",
      "Python",
      "SQL Advanced",
      "Katalon",
      "Programming Journey",
      "Tutorial CRUD",
      "Tutorial Coding",
      "Typed by Ikbar",
      "Ikbar",
      "Fairuz Ikbar"
    ],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
