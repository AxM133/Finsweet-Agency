export const SITE = {
  name: 'Finsweet',
  phone: '020 7993 2905',
  email: 'hi@finsweet.com',
  address: 'DLF Cybercity, Bhubaneswar, India, 52050',
  socials: [
    { network: 'facebook', href: 'https://facebook.com' },
    { network: 'twitter', href: 'https://twitter.com' },
    { network: 'instagram', href: 'https://instagram.com' },
    { network: 'linkedin', href: 'https://linkedin.com' },
  ],
} as const

export type SocialNetwork = (typeof SITE.socials)[number]['network']
