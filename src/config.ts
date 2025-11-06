export const SITE = {
  website: "https://rahulkarkera.github.io/blog/", // replace this with your deployed domain
  author: "Rahul Karkera",
  profile: "https://rhlk.pages.dev/",
  desc: "Senior Software Engineer building scalable solutions with Python, Django, Kubernetes & Azure. Sharing insights on software architecture, cloud, and DevOps.",
  title: "RK_LOG",
  tabTitle: "Rahul Karkera", // Used only for browser tab default
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/rahulkarkera/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Kolkata", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
