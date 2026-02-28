import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "zh"

export const common = {
  domain: "https://maojunzc.github.io",
  meta: {
    favicon: "/avatar.png",
    url: "https://maojunzc.github.io",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/maojunzc",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [],
    links: true,
    reading: true,
    plugins: true,
    tools: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: true,
    twikoo: {
      enabled: true,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const zh = {
  ...common,
  siteName: "maojunzc",
  meta: {
    ...common.meta,
    title: "maojunzc",
    slogan: "不可结缘",
    description: "技术分享、软件资源、生活记录",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "maojunzc的所有文章",
      ogImage: "/images/page-meta/zh/archive.png",
    },
    links: {
      title: "朋友们",
      description: "maojunzc的朋友们",
      ogImage: "/images/page-meta/zh/links.png",
    },
    about: {
      title: "关于我",
      description: "maojunzc的自我介绍",
      ogImage: "/images/page-meta/zh/about.png",
    },
    reading: {
      title: "阅读",
      description: "maojunzc的阅读列表",
      ogImage: "/images/page-meta/zh/reading.png",
    },
    plugins: {
      title: "插件",
      description: "maojunzc的Astro博客插件",
      ogImage: "/images/page-meta/zh/plugins.png",
    },
    tools: {
      title: "工具",
      description: "实用工具集合",
      ogImage: "/images/page-meta/zh/tools.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "maojunzc",
  meta: {
    ...common.meta,
    title: "maojunzc",
    slogan: "Cannot be结缘",
    description: "Technology sharing, software resources, life records",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are maojunzc's all posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are maojunzc's friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is maojunzc's self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
    reading: {
      title: "Reading",
      description: "maojunzc's reading list",
      ogImage: "/images/page-meta/en/reading.png",
    },
    plugins: {
      title: "Plugins",
      description: "maojunzc's Astro blog plugins",
      ogImage: "/images/page-meta/en/plugins.png",
    },
    tools: {
      title: "Tools",
      description: "Useful tools collection",
      ogImage: "/images/page-meta/en/tools.png",
    },
  },
}
