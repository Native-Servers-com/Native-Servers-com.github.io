// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Native-Servers.com - Community Wiki',
  tagline: 'Native-Servers.com - Community Wiki',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://community.native-servers.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Native-Servers-com', // Usually your GitHub org/user name.
  projectName: 'Native-Servers-com.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
       // title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'allgemeinsidebar',
            position: 'left',
            label: 'Allgemein',
          },
          {
            type: 'docSidebar',
            sidebarId: 'vserverrootserversidebar',
            position: 'left',
            label: 'vServer & Rootserver',
          },
          {
            type: 'docSidebar',
            sidebarId: 'webdomainsidebar',
            position: 'left',
            label: 'Webhosting & Domains',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gameserversidebar',
            position: 'left',
            label: 'Gameserver',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dienstleistungensidebar',
            position: 'left',
            label: 'Dienstleistungen',
          },
          {
            href: 'https://github.com/Native-Servers-com/Native-Servers-com.github.io/',
            label: 'Contribute@GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Native-Servers.com',
            items: [
              {
                label: 'Hoster-Vergleich',
                to: 'https://native-servers.com/hoster-vergleich/',
              },
              {
                label: 'Über uns',
                to: 'https://native-servers.com/uber-uns/',
              },
              {
                label: 'Partner',
                to: 'https://native-servers.com/partner/',
              },
              {
                label: 'Status-Seite',
                to: 'https://status.native-servers.com/',
              },
              {
                label: 'Support kontaktieren',
                to: 'https://native-servers.com/customer/submitticket.php',
              },
            ],
          },
          {
            title: 'vServer, Rootserver & mehr',
            items: [
              {
                label: 'Webhosting & Domain',
                to: 'https://native-servers.com/webhosting-webspace-mieten/',
              },
              {
                label: 'Windows Rootserver mieten',
                to: 'https://native-servers.com/windows-rootserver-mieten/',
              },
              {
                label: 'Linux Rootserver mieten',
                to: 'https://native-servers.com/linux-rootserver-mieten/',
              },
              {
                label: 'Intel Core i9 Rootserver mieten',
                to: 'https://native-servers.com/intel-core-i9-rootserver-mieten/',
              },
              {
                label: 'Intel XEON E5 Rootserver mieten',
                to: 'https://native-servers.com/intel-xeon-e5-rootserver-mieten/',
              },
              {
                label: 'vServer mieten',
                to: 'https://native-servers.com/linux-vserver-mieten/',
              },
              {
                label: 'LinuxGSM Server',
                to: 'https://native-servers.com/linuxgsm-server-mieten/',
              },
              {
                label: 'Managed Services',
                to: 'https://native-servers.com/managed-hosting-mieten/',
              },
              {
                label: 'Gameserver Einrichtung',
                to: 'https://native-servers.com/gameserver-einrichtung-bestellen/',
              },
              {
                label: 'Individuelle Dienstleistungen',
                to: 'https://native-servers.com/individuelle-dienstleistungen/',
              },
            ],
          },
          {
            title: 'Weiteres',
            items: [
              {
                label: 'Impressum',
                to: 'https://native-servers.com/impressum/',
              },
              {
                label: 'Datenschutz',
                to: 'https://native-servers.com/datenschutzerklaerung/',
              },
              {
                label: 'Allgemeine Geschäftsbedingungen',
                to: 'https://native-servers.com/agb/',
              },
              {
                label: 'Widerruf',
                to: 'https://native-servers.com/widerruf/',
              },
              {
                label: '🪲 Einen Fehler melden',
                to: 'https://github.com/Native-Servers-com/Native-Servers-com.github.io/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Native-Servers.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
