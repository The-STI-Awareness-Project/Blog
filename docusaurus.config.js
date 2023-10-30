// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require( 'prism-react-renderer/themes/github' );
const darkCodeTheme = require( 'prism-react-renderer/themes/vsDark' );

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '📈 Blogs and Statistal Reports',
  tagline: 'The STI Awareness Project',
  url: 'https://unique-brioche-ee7c28.netlify.app/',
  baseUrl: '/',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thecodizt', // Usually your GitHub org/user name.
  projectName: 'the-sti-awareness-project', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ( {
        docs: {
          // Please change this to your repo.
          editUrl: 'https://github.com/thecodizt/The-STI-Awareness-Project/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      } ),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ( {
      navbar: {
        title: 'The STI Awareness Blog',
        logo: {
          alt: 'STI Awareness Logo',
          src: 'img/Logo.png',
        },
        items: [
          {
            to: '/docs/welcome',
            label: 'Welcome',
            position: 'left'
          },
          {
            to: '/docs/recent',
            label: 'Recent',
            position: 'left'
          },
          {
            href: 'https://github.com/thecodizt/The-STI-Awareness-Project/tree/main/Blog/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'The STI Awareness Project',
                href: 'https://sti-awareness-project.netlify.app',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/The-STI-Awareness-Project/Blog',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    } ),
    plugins: [
      'docusaurus-plugin-auto-sidebars'
    ],
};

module.exports = config;
