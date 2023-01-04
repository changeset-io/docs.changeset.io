// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Changeset Documentation",
  tagline: "Smarter Pull Request Automation",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Changeset",
        logo: {
          alt: "Changeset logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get-started/welcome" ,
            position: "left",
            label: "Docs",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/company/changeset-io",
              },
              { 
                label: "GitHub",
                href: "https://github.com/changeset-io/community",
              },
            ],
          },
          {
            title: "Explore",
            items: [
              {
                label: "Give us feedback",
                href: "https://github.com/changeset-io/community/discussions",
              },
              {
                label: "Our Public Roadmap",
                href: "https://github.com/orgs/changeset-io/projects/1",
              },
              {
                label: "Status",
                href: "https://status.changeset.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Changeset.io.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
