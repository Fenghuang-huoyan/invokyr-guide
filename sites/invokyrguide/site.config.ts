export const siteConfig = {
  siteName: 'Invokyr Fan Guide',
  domain: 'invokyrguide.wiki',
  url: 'https://invokyrguide.wiki',
  gameTitle: 'Invokyr',
  steamAppId: 3883570,
  steamUrl: 'https://store.steampowered.com/app/3883570/Invokyr/',
  supportEmail: 'contact@ludogram.io',
  social: [
    { href: 'https://discord.gg/A2anGpvp24', label: 'Discord' },
    { href: 'https://x.com/ludogramgames', label: 'X' },
    { href: 'https://bsky.app/profile/ludogram.io', label: 'Bluesky' },
    { href: 'https://ludogram.io/', label: 'Ludogram' },
  ],
  developer: 'Ludogram',
  publisher: 'Ludogram, Shochiku',
  tagline: 'A dark, skimmable field guide for the cursed board: dice, monsters, boards, and the shop.',
  locale: 'en',
  contentRoot: 'invokyr',
  homeTitle: 'Invokyr Fan Guide — Dice, Monsters, Boards & Co-op',
  homeDescription:
    'Unofficial English Invokyr wiki for Steam AppID 3883570. Early Access co-op horror board game by Ludogram: beginner loop, monsters, dice, idols, boards, shop, and patch notes. Community numbers are labeled.',
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Invokyr: the gold INVOKYR logo above a candlelit table with dice, a red six, a small monster figure, and shadowy players',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Invokyr: the INVOKYR logo over a dark table with dice and a red face showing six',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'invokyrguide.wiki is an unofficial fan-made guide for Invokyr. It is not affiliated with, endorsed by, or sponsored by Ludogram, Shochiku, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. Early Access changes quickly. Damage numbers, shop prices, and idol effects on this site come from a community strategy guide unless a line is quoted from a Ludogram post. Where a patch and that guide disagree, this site says so. This site is not responsible for account issues or purchase decisions.',
  nav: [
    { href: '/beginner-guide', label: 'Start' },
    { href: '/monsters', label: 'Monsters' },
    { href: '/dice', label: 'Dice' },
    { href: '/idols', label: 'Idols' },
    { href: '/boards', label: 'Boards' },
  ],
  moreNav: [
    { href: '/items', label: 'Shop' },
    { href: '/events', label: 'Events' },
    { href: '/players', label: 'Players' },
    { href: '/co-op', label: 'Co-op' },
    { href: '/updates', label: 'Updates' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/secrets', label: 'Secrets' },
    { href: '/faq', label: 'FAQ' },
  ],
  footerNav: [
    { href: '/beginner-guide', label: 'Beginner guide' },
    { href: '/monsters', label: 'Monsters' },
    { href: '/dice', label: 'Dice' },
    { href: '/co-op', label: 'Co-op' },
    { href: '/faq', label: 'FAQ' },
  ],
  version: {
    label: 'Checked 21 Oct 2026',
    detail:
      'Price, review snapshot, languages, and system requirements are from the Steam store page and appdetails API on 21 Oct 2026. Patch summaries are from Ludogram’s Steam announcements through V0.44.13 (18 Oct 2026). Monster, die, and shop figures are from Eisenfang’s Steam guide, updated 19 Oct 2026, and are not an official stat sheet.',
  },
  databases: [
    {
      href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3816039008',
      label: 'Eisenfang’s Steam guide',
    },
    {
      href: 'https://store.steampowered.com/news/app/3883570',
      label: 'Steam news',
    },
    {
      href: 'https://steamdb.info/app/3883570/',
      label: 'SteamDB',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
